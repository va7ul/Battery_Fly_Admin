import { useTypedSelector } from '../../redux/hooks';
import {
  selectErrorStatus,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectLogin,
} from '../../redux/admin/adminSelectors';

export const useAuth = () => {
  const login = useTypedSelector(selectLogin);
  const isLoggedIn = useTypedSelector(selectIsLoggedIn);
  const isRefreshing = useTypedSelector(selectIsRefreshing);
  const errorStatus = useTypedSelector(selectErrorStatus);

  return { login, isLoggedIn, isRefreshing, errorStatus };
};
