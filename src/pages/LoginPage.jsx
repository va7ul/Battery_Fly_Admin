import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/admin/adminSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <CustomLoader isLoading={isLoading} />
      <LoginForm />
    </>
  );
};

export default LoginPage;
