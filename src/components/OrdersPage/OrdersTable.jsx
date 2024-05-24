import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllOrders } from '../../redux/orders/ordersSelectors';
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
  useGridApiRef,
} from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';

export const OrdersTable = () => {
  const apiRef = useGridApiRef();
  const navigate = useNavigate();
  const orders = useSelector(selectAllOrders);

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
  }, [apiRef, autosizeOptions, orders]);

  const rows = useMemo(
    () =>
      orders.map(el => ({
        id: el.numberOfOrder,
        numberOfOrder: el.numberOfOrder,
        name: `${el.lastName} ${el.firstName}`,
        email: el.email,
        tel: el.tel,
        status: el.status,
        total: el.total,
        promoCode: el.promoCode,
        promoCodeDiscount: el.promoCodeDiscount,
        discountValue: el.discountValue,
        together: el.together,
        delivery: el.delivery,
        payment: el.payment,
        comment: el.comment,
        date: el.createdAt,
      })),
    [orders]
  );

  const columns = [
    {
      field: 'numberOfOrder',
      headerName: '№ Замовлення',
    },
    { field: 'name', headerName: 'Прізвище та імя' },
    { field: 'email', headerName: 'Email' },
    { field: 'tel', headerName: 'Телефон' },
    {
      field: 'total',
      headerName: 'Сума',
      type: 'number',
      align: 'left',
      headerAlign: 'left',
    },
    { field: 'promoCode', headerName: 'Промокод' },
    {
      field: 'promoCodeDiscount',
      headerName: '% Знижки',
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
      field: 'discountValue',
      headerName: 'Знижка',
      type: 'number',
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'together',
      headerName: 'Разом',
      type: 'number',
      align: 'left',
      headerAlign: 'left',
    },
    { field: 'delivery', headerName: 'Доставка' },
    { field: 'payment', headerName: 'Спосіб оплати' },
    { field: 'comment', headerName: 'Коментар' },
    {
      field: 'date',
      headerName: 'Дата',
      type: 'date',
      valueFormatter: value => {
        if (value == null) {
          return '';
        }
        return `${value.toLocaleString().slice(0, 10)}`;
      },
    },
    {
      field: 'status',
      headerName: 'Статус',
      type: 'singleSelect',
      valueOptions: ['Нове', 'В роботі', 'Скасовано', 'Доставлено'],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<InfoOutlinedIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleEditClick = id => () => {
    navigate(`/admin/orders/${id}`);
  };

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        apiRef={apiRef}
        autoHeight
        autosizeOptions={autosizeOptions}
        pageSizeOptions={[10, 25, 100]}
        hideFooterSelectedRowCount
        slots={{
          toolbar: GridToolbar,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
          sorting: {
            sortModel: [{ field: 'col1', sort: 'desc' }],
          },
          columns: {
            columnVisibilityModel: {
              total: false,
              promoCode: false,
              promoCodeDiscount: false,
              discountValue: false,
              delivery: false,
              payment: false,
              comment: false,
            },
          },
        }}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
      />
    </Box>
  );
};
