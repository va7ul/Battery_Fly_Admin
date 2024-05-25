import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { selectPromoCodes } from '../../redux/promoCodes/promoCodesSelectors';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';
import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  GridPagination,
  GridRowModes,
  GridActionsCellItem,
  useGridApiRef,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

export const PromoCodesTable = () => {
  const [open, setOpen] = useState(false);
  const apiRef = useGridApiRef();
  const dispatch = useDispatch();
  const promoCodes = useSelector(selectPromoCodes);

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
  }, [apiRef, autosizeOptions, promoCodes]);

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
  const [rowModesModel, setRowModesModel] = useState({});

  const columns = [
    { field: 'promoCode', headerName: 'Промокод', editable: true },
    {
      field: 'discount',
      headerName: 'Знижка',
      type: 'number',
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'valid',
      headerName: 'Активний',
      type: 'boolean',
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Дата додавання',
      type: 'date',
      editable: true,
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
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteProduct = () => {
    dispatch();
  };

  const CustomFooter = props => {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      const date = new Date().toLocaleDateString();
      setRows(oldRows => [
        ...oldRows,
        {
          id,
          promoCode: '',
          discount: '',
          valid: true,
          createdAt: date,
          isNew: true,
        },
      ]);
      setRowModesModel(oldModel => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
      }));
    };
    return (
      <>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClick}
          sx={{ marginLeft: '10px', marginRight: 'auto' }}
        >
          Додати промокод
        </Button>
        <GridPagination />
      </>
    );
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
          },
        }}
        sx={{
          '& .MuiDialog-paper': {
            bgcolor: 'secondary.main',
            borderRadius: '18px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          Ви впевнені, що хочете видалити товар?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={deleteProduct}
            sx={{
              color: 'text.primary',
              '&:hover': { color: 'hoverColor.main' },
            }}
          >
            Підтвердити
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              color: 'text.primary',
              '&:hover': { color: 'hoverColor.main' },
            }}
          >
            Скасувати
          </Button>
        </DialogActions>
      </Dialog>
      <DataGrid
        autoHeight
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        editMode="row"
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
        sx={{ '--DataGrid-overlayHeight': '300px' }}
      />
    </Box>
  );
};
