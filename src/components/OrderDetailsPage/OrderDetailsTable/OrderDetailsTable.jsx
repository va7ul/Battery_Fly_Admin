import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectOneOrder } from '../../../redux/orders/ordersSelectors';
import { themeMUI } from 'styles/GlobalStyled';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';

export const OrderDetailsTable = () => {
  const apiRef = useGridApiRef();
  const order = useSelector(selectOneOrder);

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
  }, [apiRef, autosizeOptions, order]);

  const rows = [
    {
      id: order.numberOfOrder,
      numberOfOrder: order.numberOfOrder,
      name: `${order.lastName} ${order.firstName}`,
      email: order.email,
      tel: order.tel,
      promoCode: order.promoCode,
      promoCodeDiscount: order.promoCodeDiscount,
      comment: order.comment,
      date: order.createdAt,
      status: order.status,
    },
  ];

  const columns = [
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
      valueFormatter: value => {
        if (value == null) {
          return '';
        }
        return `${value.toLocaleString()} %`;
      },
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
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
      type: 'singleSelect',
      valueOptions: ['Нове', 'В роботі', 'Скасовано', 'Доставлено'],
    },
  ];

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: themeMUI.palette.background.primary,
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        apiRef={apiRef}
        autoHeight
        autosizeOnMount={true}
        autosizeOptions={autosizeOptions}
        hideFooter
        hideFooterPagination
        slots={{
          toolbar: GridToolbar,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {
              promoCode: false,
              promoCodeDiscount: false,
            },
          },
        }}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
      />
    </Box>
  );
};
