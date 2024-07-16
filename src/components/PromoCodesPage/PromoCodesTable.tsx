import { useEffect, useMemo, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { selectPromoCodes } from '../../redux/promoCodes/promoCodesSelectors';
import {
  addPromoCode,
  deletePromoCode,
  updatePromoCode,
} from '../../redux/promoCodes/promoCodesOperations';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridRowModes,
  GridRowModesModel,
  GridCellParams,
  GridActionsCellItem,
  useGridApiRef,
  gridClasses,
  GridColDef,
  GridRowModel,
  GridRowId,
} from '@mui/x-data-grid';
import { ModalConfirm } from 'components/Modals/ModalConfirm/ModalConfirm';
import toast from 'react-hot-toast';
import { PromoData } from '../../@types/promoCodes.types';
import { CustomFooter } from './CustomFooter';
import { CustomNoResultsOverlay } from 'components/Shared/NoResultsOverlay/NoResultsOverlay';

export const PromoCodesTable = () => {
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<GridRowId>('');
  const apiRef = useGridApiRef();
  const dispatch = useTypedDispatch();
  const promoCodes = useTypedSelector(selectPromoCodes);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const autosizeOptions = useMemo(
    () => ({
      includeHeaders: true,
      includeOutliers: true,
      expand: true,
    }),
    []
  );

  useEffect(() => {
    if (apiRef.current) {
      apiRef.current.autosizeColumns(autosizeOptions);
    }
  }, [apiRef, autosizeOptions, promoCodes, rowModesModel]);

  const initialRows = useMemo(
    () =>
      promoCodes.map(el => ({
        id: el._id,
        promoCode: el.name,
        discount: el.discount,
        valid: el.valid,
        createdAt: el.createdAt,
      })),
    [promoCodes]
  );

  const [rows, setRows] = useState<GridRowsProp>(initialRows);

  const processRowUpdate = (newRow: GridRowModel): GridRowModel | undefined => {
    if (newRow.discount > 100) {
      toast.error('Знижка повинна бути менше 100%');
      return undefined;
    }

    if (newRow.discount < 1) {
      toast.error('Знижка повинна бути більшою за 0');
      return undefined;
    }

    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)));

    const newPromoData: PromoData = {
      name: newRow.promoCode,
      discount: newRow.discount,
      valid: newRow.valid,
    };

    if (rows.find(row => row.id === newRow.id && row.promoCode === '')) {
      dispatch(addPromoCode(newPromoData));
    } else {
      dispatch(updatePromoCode({ id: newRow.id, promoData: newPromoData }));
    }

    return updatedRow;
  };

  const columns: GridColDef[] = [
    {
      field: 'promoCode',
      headerName: 'Промокод',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'discount',
      headerName: 'Знижка, %',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'valid',
      headerName: 'Активний',
      headerClassName: 'super-app-theme--header',
      type: 'boolean',
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Дата додавання',
      headerClassName: 'super-app-theme--header',
      type: 'date',
      align: 'center',
      headerAlign: 'center',
      valueFormatter: (value: any): string => {
        if (value == null) {
          return '';
        }
        return `${value.toLocaleString().slice(0, 10)}`;
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      headerClassName: 'super-app-theme--header',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveOutlinedIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CloseOutlinedIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditOutlinedIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find(row => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setOpen(true);
    setIdToDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = () => {
    dispatch(deletePromoCode(idToDelete as string));
  };

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: 'tableHeader.main',
        },
        [`.${gridClasses.cell}.yes`]: {
          '& .MuiSvgIcon-root': {
            color: 'success.main',
          },
        },
        [`.${gridClasses.cell}.no`]: {
          '& .MuiSvgIcon-root': {
            color: 'error.main',
          },
        },
      }}
    >
      <ModalConfirm
        open={open}
        handleClose={handleClose}
        handleAction={deleteItem}
        text="Ви впевнені, що хочете видалити промокод?"
      />
      <DataGrid
        autoHeight
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        processRowUpdate={processRowUpdate}
        autosizeOnMount={true}
        autosizeOptions={autosizeOptions}
        pageSizeOptions={[10, 25, 100]}
        hideFooterSelectedRowCount
        slots={{
          toolbar: GridToolbar,
          pagination: () => (
            <CustomFooter
              setRows={setRows}
              setRowModesModel={setRowModesModel}
            />
          ),
          noRowsOverlay: CustomNoRowsOverlay,
          noResultsOverlay: CustomNoResultsOverlay,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        getCellClassName={(params: GridCellParams) => {
          if (params.field === 'valid') {
            if (params.value === true) {
              return 'yes';
            } else {
              return 'no';
            }
          }
          return '';
        }}
        sx={{
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          '--DataGrid-overlayHeight': '300px',
        }}
      />
    </Box>
  );
};
