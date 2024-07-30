import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import { selectProducts } from '../../../redux/products/productsSelectors';
import {
  deleteProduct,
  deleteProductZbirky,
} from '../../../redux/products/productsOperations';
import { getParams } from 'utils/helpers';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { Box, Button } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  GridPagination,
  GridActionsCellItem,
  useGridApiRef,
  gridClasses,
  GridRowId,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { CustomNoRowsOverlay } from '../NoRowsOverlay/NoRowsOverlay';
import { ModalConfirm } from 'components/Modals/ModalConfirm/ModalConfirm';

type ProductsTableProps = {
  category: string;
};

export const ProductsTable: React.FC<ProductsTableProps> = ({ category }) => {
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<GridRowId>('');
  const dispatch = useTypedDispatch();
  const apiRef = useGridApiRef();
  const navigate = useNavigate();
  const products = useTypedSelector(selectProducts);
  const { paramsCategory, paramsType, paramsSubType } = getParams(category);

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
  }, [apiRef, autosizeOptions, products, open]);

  const CustomFooter = (props: any) => {
    const handleClick = () => {
      navigate(
        `/admin/assortment/${paramsCategory}/${paramsType}/${paramsSubType}`
      );
    };
    return (
      <>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClick}
          sx={{
            marginLeft: '10px',
            marginRight: 'auto',
            '&:hover': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          Додати товар
        </Button>
        <GridPagination />
      </>
    );
  };

  const rows = useMemo(
    () =>
      products.map(el => ({
        id: el.codeOfGood,
        codeOfGood: el.codeOfGood,
        name: el.name,
        category: `${el.category} ${el.type ? el.type : ''}`,
        quantity: el.quantity,
        price: el.price,
        discount: el.discount,
        popular: el.popular,
      })),
    [products]
  );

  const columns: GridColDef[] = [
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
      field: 'category',
      headerName: 'Категорія та тип',
      headerClassName: 'super-app-theme--header',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Кількість',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'price',
      headerName: 'Ціна',
      headerClassName: 'super-app-theme--header',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'discount',
      headerName: 'Знижка',
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
      field: 'popular',
      headerName: 'Популярний',
      headerClassName: 'super-app-theme--header',
      type: 'boolean',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      headerClassName: 'super-app-theme--header',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditOutlinedIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleEditClick = (id: GridRowId) => () => {
    navigate(`/admin/assortment/${id}`);
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setOpen(true);
    setIdToDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = () => {
    const { paramsSubType } = getParams(category);

    paramsSubType === 'product'
      ? dispatch(deleteProduct(idToDelete as string))
      : dispatch(deleteProductZbirky(idToDelete as string));
  };

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: 'background.primary',
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
      {open && (
        <ModalConfirm
          open={open}
          handleClose={handleClose}
          handleAction={deleteItem}
          text="Ви впевнені, що хочете видалити товар?"
        />
      )}
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
          pagination: CustomFooter,
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
        getCellClassName={(params: GridCellParams) => {
          if (params.field === 'popular') {
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
