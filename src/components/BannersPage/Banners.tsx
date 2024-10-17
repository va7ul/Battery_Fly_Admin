import { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';

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
  GridRowId,
  GridColDef,
  GridRowsProp,
  GridRowModesModel,
  GridEventListener,
} from '@mui/x-data-grid';

import { deleteHero, editHero, addHero } from '../../redux/hero/heroOperations';
import { selectHero } from '../../redux/hero/heroSelectors';
import { CustomNoRowsOverlay } from 'components/Shared/NoRowsOverlay/NoRowsOverlay';
import { ModalConfirm } from 'components/Modals/ModalConfirm/ModalConfirm';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { AddBannerButton } from './AddBannerButton';

export const Banners = () => {
  const dispatch = useTypedDispatch();
  const images = useTypedSelector(selectHero);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [open, setOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<GridRowId>('');

  const initialRows: GridRowsProp = images.map(({ _id, image, text }) => ({
    id: _id,
    image,
    text,
  }));

  const [rows, setRows] = useState(initialRows);
  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const openModalConfirm = (id: GridRowId) => () => {
    setOpen(true);
    setIdToDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteHero(idToDelete as string));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  type Image = {
    [key: string]: { url: string | ArrayBuffer | null; file: File };
  };

  const [image, setImage] = useState<Image>({});
  const [text, setText] = useState<{ [key: GridRowId]: string }>({});
  let file: File;
  const handleFileChange =
    (id: GridRowId) => (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      if (e.target.files) {
        file = e.target.files[0];
      }

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage({ [id]: { url: reader.result, file } });
        };
        reader.readAsDataURL(file);
      }
    };

  const handleSaveClick = (id: GridRowId) => async () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    const newRow = rows.find(row => row.isNew && row.text === '');
    const formData = new FormData();

    if (image[id]?.file) {
      formData.append('image', image[id].file);
    }
    formData.append('text', text[id] || rows.find(row => row.id === id)?.text);

    try {
      if (newRow) {
        await dispatch(addHero(formData));
      } else {
        await dispatch(editHero({ id: id as string, formData }));
      }
    } catch (error) {
      console.error('Error saving row:', error);
    }
  };

  const handleTextChange =
    (id: GridRowId) => (e: ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      setText(prev => ({
        ...prev,
        [id]: newText,
      }));
    };

  const columns: GridColDef[] = [
    {
      field: 'image',
      headerName: 'Фото',
      headerClassName: 'super-app-theme--header',
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
      headerClassName: 'super-app-theme--header',
      // type: 'text',
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
      headerClassName: 'super-app-theme--header',
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

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: 'background.primary',
        },
      }}
    >
      {open && (
        <ModalConfirm
          open={open}
          handleClose={handleClose}
          handleAction={handleDelete}
          text={'Ви впевнені, що хочете видалити банер?'}
        />
      )}
      <DataGrid
        autoHeight
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
        slots={{
          pagination: () => (
            <AddBannerButton
              setRows={setRows}
              setRowModesModel={setRowModesModel}
            />
          ),
          noRowsOverlay: CustomNoRowsOverlay,
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
