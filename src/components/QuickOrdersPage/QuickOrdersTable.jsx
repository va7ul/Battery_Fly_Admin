import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectQuickOrders } from '../../redux/orders/ordersSelectors';
import { themeMUI } from 'styles/GlobalStyled';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';

export const QuickOrdersTable = () => {
  const apiRef = useGridApiRef();
  const quickOrders = useSelector(selectQuickOrders);

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
  }, [apiRef, autosizeOptions, quickOrders]);

  const rows = useMemo(
    () =>
      quickOrders.map(el => ({
        id: el._id,
        numberOfOrder: el.numberOfOrder,
        codeOfGood: el.codeOfGood,
        tel: el.tel,
        name: el.name,
        userName: el.userName,
        createdAt: el.createdAt,
      })),
    [quickOrders]
  );

  const columns = [
    {
      field: 'numberOfOrder',
      headerName: '№ замовлення',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
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
      field: 'userName',
      headerName: 'Імя',
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
      field: 'createdAt',
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
        }}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
      />
    </Box>
  );
};
