import { useEffect, useMemo } from 'react';
import { useTypedSelector } from '../../redux/hooks';
import { selectQuickOrders } from '../../redux/orders/ordersSelectors';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  useGridApiRef,
  GridColDef,
} from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';
import { CustomNoResultsOverlay } from 'components/Shared/NoResultsOverlay/NoResultsOverlay';

export const QuickOrdersTable = () => {
  const apiRef = useGridApiRef();
  const quickOrders = useTypedSelector(selectQuickOrders);

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

  const columns: GridColDef[] = [
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
      valueFormatter: (value: any): string => {
        if (value == null) {
          return '';
        }
        const date = value.toLocaleString().slice(0, 10);
        const hours = value.toLocaleString().slice(11, 16);
        return `${date} ${hours}`;
      },
    },
  ];

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: 'background.primary',
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
          noResultsOverlay: CustomNoResultsOverlay,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
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
