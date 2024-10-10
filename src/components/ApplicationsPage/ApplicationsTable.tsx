import { useEffect, useMemo } from 'react';
import { useTypedSelector } from '../../redux/hooks';
import { selectApplications } from '../../redux/orders/ordersSelectors';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  useGridApiRef,
  GridColDef,
} from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';
import { CustomNoResultsOverlay } from 'components/Shared/NoResultsOverlay/NoResultsOverlay';

export const ApplicationsTable = () => {
  const apiRef = useGridApiRef();
  const applications = useTypedSelector(selectApplications);

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
        numberOfApplication: el.numberOfApplication,
        name: el.name,
        tel: el.tel,
        comment: el.comment,
        createdAt: el.createdAt,
      })),
    [applications]
  );

  const columns: GridColDef[] = [
    {
      field: 'numberOfApplication',
      headerName: '№ заявки',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
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
      field: 'comment',
      headerName: 'Коментар',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'createdAt',
      headerName: 'Дата',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
      type: 'date',
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
