import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../redux/hooks';
import { selectAllOrders } from '../../redux/orders/ordersSelectors';
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
  useGridApiRef,
  gridClasses,
  GridColDef,
  GridRowId,
  GridCellParams,
} from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';
import { CustomNoResultsOverlay } from 'components/Shared/NoResultsOverlay/NoResultsOverlay';

export const OrdersTable = () => {
  const apiRef = useGridApiRef();
  const navigate = useNavigate();
  const orders = useTypedSelector(selectAllOrders);

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
        delivery: el.deliveryType,
        payment: el.payment,
        comment: el.comment,
        date: el.createdAt,
      })),
    [orders]
  );

  const columns: GridColDef[] = [
    {
      field: 'numberOfOrder',
      headerName: '№ Замовлення',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Прізвище та імя',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'tel',
      headerName: 'Телефон',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'total',
      headerName: 'Сума',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'promoCode',
      headerName: 'Промокод',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'promoCodeDiscount',
      headerName: '% Знижки',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
      valueFormatter: (value: any): string => {
        if (value == null) {
          return '';
        }
        return `${value.toLocaleString()} %`;
      },
    },
    {
      field: 'discountValue',
      headerName: 'Знижка',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'together',
      headerName: 'Разом',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'delivery',
      headerName: 'Доставка',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'payment',
      headerName: 'Спосіб оплати',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'comment',
      headerName: 'Коментар',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'date',
      headerName: 'Дата',
      headerClassName: 'super-app-theme--header',
      type: 'date',
      align: 'center',
      headerAlign: 'center',
      valueFormatter: (value: any): string => {
        if (value == null) {
          return '';
        }
        const date = value.toLocaleString().slice(0, 10);
        const hours = value.toLocaleString().slice(11, 16);
        return `${date} ${hours}`;
      },
    },
    {
      field: 'status',
      headerName: 'Статус',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
      type: 'singleSelect',
      valueOptions: ['Нове', 'В роботі', 'Скасовано', 'Доставлено'],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      headerClassName: 'super-app-theme--header',
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

  const handleEditClick = (id: GridRowId) => () => {
    navigate(`/admin/orders/${id}`);
  };

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: 'background.primary',
        },
        [`.${gridClasses.cell}.new`]: {
          color: 'warning.main',
          '&:hover': {
            color: 'warning.main',
          },
        },
        [`.${gridClasses.cell}.inWork`]: {
          color: 'primary.main',
          '&:hover': {
            color: 'primary.main',
          },
        },
        [`.${gridClasses.cell}.delivered`]: {
          color: 'success.main',
          '&:hover': {
            color: 'success.main',
          },
        },
        [`.${gridClasses.cell}.canceled`]: {
          color: 'error.main',
          '&:hover': {
            color: 'error.main',
          },
        },
      }}
    >
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        editMode="row"
        apiRef={apiRef}
        autosizeOnMount={true}
        autosizeOptions={autosizeOptions}
        pageSizeOptions={[10, 25, 100]}
        hideFooterSelectedRowCount
        slots={{
          toolbar: GridToolbar,
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
        getCellClassName={(params: GridCellParams) => {
          if (params.field === 'status') {
            switch (params.value) {
              case 'Нове':
                return 'new';
              case 'В роботі':
                return 'inWork';
              case 'Доставлено':
                return 'delivered';
              case 'Скасовано':
                return 'canceled';

              default:
                return '';
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
