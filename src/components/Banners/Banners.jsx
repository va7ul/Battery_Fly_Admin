import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { StyledInput } from './Banners.styled';
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
  getHero,
  deleteHero,
  editHero,
  // addHeroImage,
} from '../../redux/hero/heroOperations';
import { selectHero } from '../../redux/hero/heroSelectors';
import { useNavigate } from 'react-router-dom';

export const Banners = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const images = useSelector(selectHero);
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    const getHeroImagesSync = async () => {
      try {
        dispatch(getHero());
      } catch (error) {
        console.log('error', error.message);
      }
    };
    getHeroImagesSync();
  }, [dispatch]);

  // const rows = images.map(({ _id, image, text }) => ({
  //   id: _id,
  //   image,
  //   text,
  // }));
  useEffect(() => {
    if (images) {
      const initialRows = images.map(({ _id, image, text }) => ({
        id: _id,
        image,
        text,
      }));
      setRows(initialRows);
    }
  }, [images]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleDelete = id => () => {
    dispatch(deleteHero(id));
    //   .then(result => {
    //   if (result.meta.requestStatus === 'fulfilled') {
    //     navigate('/admin/banners');
    //   }
    // });
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
      await dispatch(editHero({ id, formData }));
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
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
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
              style={{ display: isInEditMode ? 'inline-block' : 'none' }}
            />
          </div>
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
      editable: false,
      renderCell: params => {
        const { id } = params.row;
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return (
            <StyledInput
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
              icon={<SaveOutlinedIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CloseOutlinedIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

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
            onClick={handleDelete(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const EditToolbar = props => {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      setRows(oldRows => [
        ...oldRows,
        { id, image: '', text: '', isNew: true },
      ]);
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

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        '& .actions': {
          color: 'text.primary',
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
        autoHeight
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
