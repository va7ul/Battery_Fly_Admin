import { useTypedSelector } from '../redux/hooks';
import { selectIsLoading } from '../redux/admin/adminSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { LoginForm } from 'components/LoginPage/LoginForm';

const LoginPage = () => {
  const isLoading = useTypedSelector(selectIsLoading);
  return (
    <>
      <CustomLoader isLoading={isLoading} />
      <LoginForm />
    </>
  );
};

export default LoginPage;
