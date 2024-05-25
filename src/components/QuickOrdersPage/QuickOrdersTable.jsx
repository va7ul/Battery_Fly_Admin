import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectQuickOrders } from '../../redux/orders/ordersSelectors';
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
    { field: 'numberOfOrder', headerName: 'Номер замовлення' },
    { field: 'codeOfGood', headerName: 'Код товару' },
    {
      field: 'name',
      headerName: 'Назва товару',
    },
    { field: 'userName', headerName: 'Імя' },
    {
      field: 'tel',
      headerName: 'Телефон',
    },
    {
      field: 'createdAt',
      headerName: 'Дата',
      type: 'date',
      valueFormatter: value => {
        if (value == null) {
          return '';
        }
        return `${value.toLocaleString().slice(0, 10)}`;
      },
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
        }}
        sx={{ '--DataGrid-overlayHeight': '300px' }}
      />
    </Box>
  );
};
