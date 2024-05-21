import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectCustomers } from '../../redux/customers/customersSelectors';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';

export const CustomersTable = () => {
  const apiRef = useGridApiRef();
  const customers = useSelector(selectCustomers);

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
  }, [apiRef, autosizeOptions, customers]);

  const rows = useMemo(
    () =>
      customers.map(el => ({
        id: el._id,
        firstName: el.firstName,
        lastName: el.lastName,
        patronymic: el.patronymic ? el.patronymic : '',
        tel: el.tel ? el.tel : '',
        email: el.email,
        verifiedEmail: el.verifiedEmail,
        promoCodes: el.promoCodes ? el.promoCodes : '',
        delivery: el.delivery
          ? `${el.delivery.city}, ${el.delivery.warehouse}`
          : '',
        createdAt: el.createdAt,
      })),
    [customers]
  );

  const columns = [
    { field: 'lastName', headerName: 'Прізвище' },
    { field: 'firstName', headerName: 'Імя' },
    { field: 'patronymic', headerName: 'По батькові' },
    {
      field: 'email',
      headerName: 'Пошта',
    },
    {
      field: 'tel',
      headerName: 'Телефон',
      // align: 'left',
      // headerAlign: 'left',
    },

    {
      field: 'promoCodes',
      headerName: 'Промокоди',
    },
    {
      field: 'delivery',
      headerName: 'Доставка',
    },
    {
      field: 'createdAt',
      headerName: 'Дата реєстрації',
      type: 'date',
      valueFormatter: value => {
        if (value == null) {
          return '';
        }
        return `${value.toLocaleString().slice(0, 10)}`;
      },
    },
    {
      field: 'verifiedEmail',
      headerName: 'Верифікований',
      type: 'boolean',
    },
  ];

  return (
    <Box>
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
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
          // columns: {
          //   columnVisibilityModel: {
          //     patronymic: false,
          //     promoCodes: false,
          //     delivery: false,
          //     createdAt: false,
          //   },
          // },
        }}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
      />
    </Box>
  );
};
