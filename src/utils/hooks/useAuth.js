import { useSelector } from 'react-redux';
import {
  selectErrorStatus,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectLogin,
} from '../../redux/admin/adminSelectors';

export const useAuth = () => {
  const login = useSelector(selectLogin);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const errorStatus = useSelector(selectErrorStatus);

  return { login, isLoggedIn, isRefreshing, errorStatus };
};
