import { useState, useEffect } from 'react';
import { useTypedDispatch } from '../../redux/hooks';
import { useFormik } from 'formik';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signInSchema } from '../../common/schemas/signInSchema';
import { login } from '../../redux/admin/adminOperations';
import { useAuth } from 'utils/hooks';
import { ModalAgree } from 'components/Modals/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/Text/Text';
import { Field } from 'components/Modals/TextField/TextField';
import { Btn, StyledForm } from './LoginForm.styled';
import { DataUser } from '../../@types/admin.types';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const dispatch = useTypedDispatch();
  const { errorStatus } = useAuth();

  useEffect(() => {
    if (errorStatus === 401) {
      handleOpenAgreeModal();
    }
  }, [errorStatus]);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  const formik = useFormik<DataUser>({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values, _) => {
      dispatch(login(values));
    },
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Field
          id="login"
          name="login"
          label="Логін"
          type="text"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
        />
        <Field
          id="password"
          name="password"
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    width: '20px',
                    height: '20px',
                  }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {!showPassword ? (
                    <VisibilityOff
                      sx={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  ) : (
                    <Visibility
                      sx={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Btn type="submit">
          <span>Увійти</span>
        </Btn>
      </StyledForm>
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>Некоректно введені дані.</TextAgree>
        <TextAgree>Перевірте, будь ласка, введений логін та пароль.</TextAgree>
      </ModalAgree>
    </>
  );
};
