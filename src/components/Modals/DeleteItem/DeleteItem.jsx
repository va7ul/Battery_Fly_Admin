import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

export const DeleteItem = ({ open, handleClose, deleteItem }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        },
      }}
      sx={{
        '& .MuiDialog-paper': {
          bgcolor: 'secondary.main',
          borderRadius: '18px',
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        Ви впевнені, що хочете видалити промокод?
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={deleteItem}
          sx={{
            color: 'text.primary',
            '&:hover': { color: 'hoverColor.main' },
          }}
        >
          Підтвердити
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            color: 'text.primary',
            '&:hover': { color: 'hoverColor.main' },
          }}
        >
          Скасувати
        </Button>
      </DialogActions>
    </Dialog>
  );
};
