import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { randomId } from '@mui/x-data-grid-generator';
import { GridPagination, GridRowModes } from '@mui/x-data-grid';
import { GridRowsProp, GridRowModesModel } from '@mui/x-data-grid/models';

interface CustomFooterProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

export const CustomFooter = (props: CustomFooterProps) => {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows(oldRows => [
      {
        id,
        promoCode: '',
        discount: '',
        valid: true,
        createdAt: '',
        isNew: true,
      },
      ...oldRows,
    ]);
    setRowModesModel(oldModel => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'promoCode' },
    }));
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
        Додати промокод
      </Button>
      <GridPagination />
    </>
  );
};
