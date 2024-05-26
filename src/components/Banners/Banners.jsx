import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbarContainer,
} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { randomId } from '@mui/x-data-grid-generator';
import { useDispatch, useSelector } from 'react-redux';
import {
  getHeroImages,
  deleteHeroImage,
  // addHeroImage,
  // editHeroImage,
} from '../../redux/hero/heroOperations';
import { selectHero } from '../../redux/hero/heroSelectors';
// import { randomId } from '@mui/x-data-grid-generator';

// const images = [
//   {
//     _id: '662e4b4df04b85608f6b5843',
//     text: 'Потужність у кожному кілометрі: наші електричні батареї для вашого транспорту!',
//     image:
//       'https://res.cloudinary.com/dge7alacy/image/upload/v1714309887/Hero/yx3zqxzkv9bvlygisq2v.png',
//   },
//   {
//     _id: '662e4bc3f04b85608f6b5844',
//     text: 'Безмежна енергія для захоплюючих польотів: батареї для FPV дронів!',
//     image:
//       'https://res.cloudinary.com/dge7alacy/image/upload/v1714309886/Hero/ir8j18htynnf3wnessba.png',
//   },
//   {
//     _id: '662e4c1cf04b85608f6b5845',
//     text: 'Втілюй ідеї у реальність: 3D друк на кожен день!',
//     image:
//       'https://res.cloudinary.com/dge7alacy/image/upload/v1714309886/Hero/a0czcwwqskwdnfqq2f3k.png',
//   },
// ];

const EditToolbar = props => {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows(oldRows => [...oldRows, { id, image: '', text: '', isNew: true }]);
    setRowModesModel(oldModel => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'text' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
};

const ImageCell = ({ value, onChange }) => {
  const [preview, setPreview] = useState(value);

  const handleFileChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          objectFit: 'contain',
          margin: 0,
        }}
      >
        <img
          src={preview}
          alt="Preview"
          style={{ maxWidth: '200px', height: 100 }}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
    </form>
  );
};

export const Banners = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectHero);
  // useEffect(() => {
  //   dispatch(getHeroImages());
  // }, [dispatch]);

  useEffect(() => {
    const getHeroImagesSync = async () => {
      try {
        dispatch(getHeroImages());
      } catch (error) {
        console.log('error', error.message);
      }
    };
    getHeroImagesSync();
  }, [dispatch]);

  const initialRows = images.map(item => ({
    id: item._id,
    text: item.text,
    image: item.image,
  }));

  const [rows, setRows] = useState(initialRows);

  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleDelete = id => {
    dispatch(deleteHeroImage(id));
  };

  const handleEditClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find(row => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const processRowUpdate = newRow => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = newRowModesModel => {
    setRowModesModel(newRowModesModel);
  };

  // const [image, setImage] = useState('');
  // const [imageURL, setImageURL] = useState('');
  // const fileReader = new FileReader();

  // fileReader.onloadend = () => {
  //   setImageURL(fileReader.result);
  // };

  // const handleFileChange = e => {
  //   e.preventDefault();
  //   const file = e.target.files[0];
  //   setImage(file);
  //   fileReader.readAsDataURL(file);
  // };

  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      type: 'image',
      renderCell: params => (
        <ImageCell
          value={params.value}
          onChange={newValue => {
            const updatedRows = [...params.api.getRowModels()];
            updatedRows[params.id] = {
              ...updatedRows[params.id],
              image: newValue,
            };
            params.api.setRows(updatedRows);
          }}
        />
      ),
      width: 500,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
    {
      field: 'text',
      headerName: 'Text',
      type: 'text',
      width: 670,
      align: 'center',
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      align: 'center',
      headerAlign: 'center',
      headerName: 'Actions',
      cellClassName: 'actions',

      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDelete(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        disableColumnMenu={true}
        disableColumnResize={true}
        disableColumnSorting={true}
        hideFooter={true}
        hideFooterPagination={true}
        rowHeight={100}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
};
