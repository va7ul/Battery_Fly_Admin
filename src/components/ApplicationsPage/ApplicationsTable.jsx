import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectApplications } from '../../redux/orders/ordersSelectors';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';

export const ApplicationsTable = () => {
  const apiRef = useGridApiRef();
  const applications = useSelector(selectApplications);

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
  }, [apiRef, autosizeOptions, applications]);

  const rows = useMemo(
    () =>
      applications.map(el => ({
        id: el._id,
        numberOfApplications: el.numberOfApplications,
        name: el.name,
        tel: el.tel,
        comment: el.comment,
        createdAt: el.createdAt,
      })),
    [applications]
  );

  const columns = [
    { field: 'numberOfApplications', headerName: 'Номер заявки' },
    { field: 'name', headerName: 'Імя' },
    {
      field: 'tel',
      headerName: 'Телефон',
    },
    {
      field: 'comment',
      headerName: 'Коментар',
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
