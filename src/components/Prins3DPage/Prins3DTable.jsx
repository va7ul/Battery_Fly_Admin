import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectPrins3D } from '../../redux/orders/ordersSelectors';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';

export const Prins3DTable = () => {
  const apiRef = useGridApiRef();
  const prins3D = useSelector(selectPrins3D);

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
  }, [apiRef, autosizeOptions, prins3D]);

  const rows = useMemo(
    () =>
      prins3D.map(el => ({
        id: el._id,
        numberOfOrder: el.numberOfOrder,
        userName: el.userName,
        tel: el.tel,
        text: el.text,
        accuracy: el.accuracy,
        plactic: el.plactic,
        color: el.color,
        createdAt: el.createdAt,
      })),
    [prins3D]
  );

  const columns = [
    { field: 'numberOfOrder', headerName: 'Номер замовлення' },
    { field: 'userName', headerName: 'Імя' },
    {
      field: 'tel',
      headerName: 'Телефон',
    },
    {
      field: 'text',
      headerName: 'Коментар',
    },
    { field: 'accuracy', headerName: 'Точність' },
    { field: 'plactic', headerName: 'Тип пластику' },
    { field: 'color', headerName: 'Колір' },
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
