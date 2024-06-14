import { useState } from 'react';
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
} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { randomId } from '@mui/x-data-grid-generator';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHero, editHero, addHero } from '../../redux/hero/heroOperations';
import { selectHero } from '../../redux/hero/heroSelectors';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';
import { ModalConfirm } from 'components/Modals/ModalConfirm/ModalConfirm';

export const Banners = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectHero);
  const [rowModesModel, setRowModesModel] = useState({});
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState();

  const initialRows = images.map(({ _id, image, text }) => ({
    id: _id,
    image,
    text,
  }));

  const [rows, setRows] = useState(initialRows);
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const openModalConfirm = id => () => {
    setOpen(true);
    setIdToDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteHero(idToDelete));
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

  const handleSaveClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    const newRow = rows.find(row => row.isNew === true && row.text === '');
    const formData = new FormData();
    if (image[id]?.file) {
      formData.append('image', image[id].file);
    }
    formData.append('text', text[id] || rows.find(row => row.id === id).text);
    try {
      if (newRow) {
        dispatch(addHero(formData));
      } else {
        dispatch(editHero({ id, formData }));
      }
    } catch (error) {
      console.error(`error`, error.message);
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
      headerName: 'Фото',
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
      width: 450,
      align: 'center',
      headerAlign: 'center',
      editable: false,
    },
    {
      field: 'text',
      headerName: 'Текст',
      type: 'text',
      width: 725,
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
              onKeyDown={e => e.stopPropagation()}
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
            onClick={openModalConfirm(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const AddBannerButton = props => {
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
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleClick}
        sx={{
          marginRight: 'auto',
          marginLeft: '10px',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        }}
      >
        Додати банер
      </Button>
    );
  };

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
      }}
    >
      <ModalConfirm
        open={open}
        handleClose={handleClose}
        handleAction={handleDelete}
        text={'Ви впевнені, що хочете видалити банер?'}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        disableColumnMenu={true}
        disableColumnResize={true}
        disableColumnSorting={true}
        rowHeight={100}
        rowSelection={false}
        autoHeight
        slots={{
          pagination: AddBannerButton,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        slotProps={{
          pagination: { setRows, setRowModesModel },
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
