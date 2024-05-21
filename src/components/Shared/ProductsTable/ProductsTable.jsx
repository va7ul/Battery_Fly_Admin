import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectProducts } from '../../../redux/products/productsSelectors';
import { getParams } from 'utils/helpers';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  GridPagination,
  GridActionsCellItem,
  useGridApiRef,
} from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from '../NoRowsOverlay/NoRowsOverlay';

export const ProductsTable = ({ category }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const apiRef = useGridApiRef();
  const navigate = useNavigate();
  const products = useSelector(selectProducts);
  const { paramsCategory, paramsType, paramsSubType } = getParams(category);

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
  }, [apiRef, autosizeOptions, products, open]);

  const CustomFooter = props => {
    const handleClick = () => {
      navigate(
        `/admin/assortment/${paramsCategory}/${paramsType}/${paramsSubType}`
      );
    };
    return (
      <>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClick}
          sx={{ marginLeft: '10px', marginRight: 'auto' }}
        >
          Додати товар
        </Button>
        <GridPagination />
      </>
    );
  };

  const rows = useMemo(
    () =>
      products.map(el => ({
        id: el.codeOfGood,
        codeOfGood: el.codeOfGood,
        name: el.name,
        category: `${el.category} ${el.type ? el.type : ''}`,
        quantity: el.quantity,
        price: el.price,
        discount: el.discount,
        popular: el.popular,
      })),
    [products]
  );

  const columns = [
    {
      field: 'codeOfGood',
      headerName: 'Код товару',
      type: 'number',
      align: 'left',
      headerAlign: 'left',
    },
    { field: 'name', headerName: 'Назва товару' },
    {
      field: 'category',
      headerName: 'Категорія та тип',
    },
    {
      field: 'quantity',
      headerName: 'Кількість',
      type: 'number',
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'price',
      headerName: 'Ціна',
      type: 'number',
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'discount',
      headerName: 'Знижка',
      type: 'number',
      align: 'left',
      headerAlign: 'left',
      valueFormatter: value => {
        if (value == null) {
          return '';
        }
        return `${value.toLocaleString()} %`;
      },
    },
    {
      field: 'popular',
      headerName: 'Популярний',
      type: 'boolean',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
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
    navigate(`/admin/assortment/${id}`);
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
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
      />
    </Box>
  );
};
