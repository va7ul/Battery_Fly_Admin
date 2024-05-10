import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button } from './ProfileButton.styled';
import { useSelector } from 'react-redux';
import { selectLogin } from '../../../redux/admin/adminSelectors';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/admin/adminOperations';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const ProfileButton = () => {
  const dispatch = useDispatch();
  const login = useSelector(selectLogin);

  const logout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Button type="button" onClick={logout}>
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
      </Button>
    </>
  );
};
