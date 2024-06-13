import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectCustomers } from '../../redux/customers/customersSelectors';
import { themeMUI } from 'styles/GlobalStyled';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  useGridApiRef,
  gridClasses,
} from '@mui/x-data-grid';
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
    {
      field: 'lastName',
      headerName: 'Прізвище',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'firstName',
      headerName: 'Імя',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'patronymic',
      headerName: 'По батькові',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: 'Пошта',
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
      field: 'promoCodes',
      headerName: 'Промокоди',
      headerClassName: 'super-app-theme--header',
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
      field: 'createdAt',
      headerName: 'Дата реєстрації',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
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
      headerClassName: 'super-app-theme--header',
      type: 'boolean',
    },
  ];

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: themeMUI.palette.background.primary,
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
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
          columns: {
            columnVisibilityModel: {
              patronymic: false,
              promoCodes: false,
              delivery: false,
            },
          },
        }}
        getCellClassName={params => {
          if (params.field === 'verifiedEmail') {
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
