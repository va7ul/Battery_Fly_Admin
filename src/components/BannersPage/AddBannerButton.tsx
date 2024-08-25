import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { randomId } from '@mui/x-data-grid-generator';
import {
  GridRowModes,
  GridRowsProp,
  GridRowModesModel,
} from '@mui/x-data-grid';

interface AddBannerProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

export  const AddBannerButton = (props: AddBannerProps) => {
   const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      setRows((oldRows: GridRowsProp) => [
        ...oldRows,
        { id, image: '', text: '', isNew: true },
      ]);
      setRowModesModel((oldModel) => ({
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
