import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectProducts } from '../../../redux/products/productsSelectors';
import { getParams } from 'utils/helpers';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
  DataGrid,
  GridToolbar,
  GridPagination,
  GridActionsCellItem,
  useGridApiRef,
} from '@mui/x-data-grid';

export const ProductsTable = ({ category }) => {
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

  useEffect(() => {
    if (apiRef.current) {
      apiRef.current.autosizeColumns(autosizeOptions);
    }
  }, [apiRef, autosizeOptions, products]);

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
    // setRows(rows.filter(row => row.id !== id));
  };

  return (
    <Box
      sx={{
        height: '100%',
        maxWidth: '100%',
      }}
    >
      <DataGrid
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        autosizeOptions={autosizeOptions}
        pageSizeOptions={[10, 25, 100]}
        hideFooterSelectedRowCount
        slots={{
          toolbar: GridToolbar,
          pagination: CustomFooter,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
      />
    </Box>
  );
};
