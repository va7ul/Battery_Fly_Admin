import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

export const ModalConfirm = ({ open, handleClose, handleAction, text }) => {
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
          minWidth: '400px',
          gap: '10px',
          bgcolor: 'secondary.main',
          borderRadius: '18px',
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
      <DialogActions>
        <Button
          onClick={handleAction}
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
