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
  editHeroImage,
  // addHeroImage,
} from '../../redux/hero/heroOperations';
import { selectHero } from '../../redux/hero/heroSelectors';

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

export const Banners = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectHero);

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

  const rows = images.map(item => ({
    id: item._id,
    text: item.text,
    image: item.image,
  }));

  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleDelete = id => {
    dispatch(deleteHeroImage(id));
  };

  const handleCancelClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const handleEditClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleRowModesModelChange = newRowModesModel => {
    setRowModesModel(newRowModesModel);
  };

  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  const handleFileChange = id => e => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // setImage(prev => ({
        //   ...prev,
        //   [id]: { url: reader.result, file },
        // }));
        setImage({ [id]: { url: reader.result, file } });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = id => async () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    const formData = new FormData();
    if (image[id]?.file) {
      console.log(image[id]?.file);
      formData.append('image', image[id].file);
    }
    formData.append('text', text[id] || rows.find(row => row.id === id).text);
    try {
      await dispatch(editHeroImage({ id, formData }));
      console.log(`ura`);
    } catch (error) {
      console.error(`jopa`, error.message);
    }
  };

  const handleTextChange = id => e => {
    const newText = e.target.value;
    setText(prev => ({
      ...prev,
      [id]: newText,
    }));
  };

  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      type: 'image',
      renderCell: params => {
        const { id } = params.row;
        const preview = image[id]?.url || params.value;
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
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange(id)}
              />
            </div>
          </form>
        );
      },
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
      renderCell: params => {
        const { id } = params.row;
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return (
            <input
              type="text"
              defaultValue={params.value}
              onChange={handleTextChange(id)}
            />
          );
        }
        return params.value;
      },
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
        // processRowUpdate={processRowUpdate}
        disableColumnMenu={true}
        disableColumnResize={true}
        disableColumnSorting={true}
        hideFooter={true}
        hideFooterPagination={true}
        rowHeight={100}
        slots={{
          toolbar: EditToolbar,
        }}
        // slotProps={{
        //   toolbar: { setRows, setRowModesModel },
        // }}
      />
    </Box>
  );
};