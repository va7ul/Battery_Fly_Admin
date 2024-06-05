import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectProducts } from '../../../redux/products/productsSelectors';
import {
  deleteProduct,
  deleteProductZbirky,
} from '../../../redux/products/productsOperations';
import { getParams } from 'utils/helpers';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { themeMUI } from 'styles/GlobalStyled';
import { Box, Button } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  GridPagination,
  GridActionsCellItem,
  useGridApiRef,
} from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from '../NoRowsOverlay/NoRowsOverlay';
import { ModalConfirm } from 'components/Modals/ModalConfirm/ModalConfirm';

export const ProductsTable = ({ category }) => {
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState();
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
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Назва товару',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'category',
      headerName: 'Категорія та тип',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Кількість',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'price',
      headerName: 'Ціна',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'discount',
      headerName: 'Знижка',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
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
      headerClassName: 'super-app-theme--header',
      type: 'boolean',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      headerClassName: 'super-app-theme--header',
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
    setIdToDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = () => {
    const { paramsSubType } = getParams(category);

    paramsSubType === 'product'
      ? dispatch(deleteProduct(idToDelete))
      : dispatch(deleteProductZbirky(idToDelete));
  };

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: themeMUI.palette.background.primary,
        },
      }}
    >
      <ModalConfirm
        open={open}
        handleClose={handleClose}
        handleAction={deleteItem}
        text="Ви впевнені, що хочете видалити товар?"
      />
      <DataGrid
        autoHeight
        apiRef={apiRef}
        rows={rows}
        columns={columns}
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
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
      />
    </Box>
  );
};
