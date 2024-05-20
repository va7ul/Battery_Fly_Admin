import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLogin } from '../../../redux/admin/adminSelectors';
import { logOut } from '../../../redux/admin/adminOperations';
import { StyledButton } from './ProfileButton.styled';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from '@mui/material';

export const ProfileButton = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const login = useSelector(selectLogin);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <StyledButton type="button" onClick={handleClickOpen}>
        <AccountCircleOutlinedIcon
          sx={{
            color: 'text.primary',
            width: '24px',
          }}
        />
        {login}
        <LogoutOutlinedIcon
          sx={{
            color: 'text.primary',
            width: '24px',
            zIndex: 2,
          }}
        />
      </StyledButton>
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
        <DialogTitle id="alert-dialog-title">{'Вихід'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ви впевнені, що хочете вийти з акаунту?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={logout}
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
    </>
  );
};
