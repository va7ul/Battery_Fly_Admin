import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { selectPromoCodes } from '../../redux/promoCodes/promoCodesSelectors';
import {
  addPromoCode,
  deletePromoCode,
  updatePromoCode,
} from '../../redux/promoCodes/promoCodesOperations';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';
import { Box, Button } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  GridPagination,
  GridRowModes,
  GridActionsCellItem,
  useGridApiRef,
  gridClasses,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { ModalConfirm } from 'components/Modals/ModalConfirm/ModalConfirm';
import toast from 'react-hot-toast';

export const PromoCodesTable = () => {
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState();
  const apiRef = useGridApiRef();
  const dispatch = useDispatch();
  const promoCodes = useSelector(selectPromoCodes);
  const [rowModesModel, setRowModesModel] = useState({});

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

  const [rows, setRows] = useState(initialRows);

  const processRowUpdate = newRow => {
    if (newRow.discount > 100) {
      return toast.error('Знижка повинна бути менше 100%');
    }

    if (newRow.discount < 1) {
      return toast.error('Знижка повинна бути більшою за 0');
    }

    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)));

    const newPromoData = {
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

  const columns = [
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
      valueFormatter: value => {
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

  const handleEditClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  const handleSaveClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };

  const handleCancelClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find(row => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const handleDeleteClick = id => () => {
    setOpen(true);
    setIdToDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = () => {
    dispatch(deletePromoCode(idToDelete));
  };

  const CustomFooter = props => {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      setRows(oldRows => [
        {
          id,
          promoCode: '',
          discount: '',
          valid: true,
          createdAt: '',
          isNew: true,
        },
        ...oldRows,
      ]);
      setRowModesModel(oldModel => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'promoCode' },
      }));
    };

    return (
      <>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClick}
          sx={{
            marginLeft: '10px',
            marginRight: 'auto',
            '&:hover': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          Додати промокод
        </Button>
        <GridPagination />
      </>
    );
  };

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: 'background.primary',
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
          pagination: CustomFooter,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
          pagination: { setRows, setRowModesModel },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        getCellClassName={params => {
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
