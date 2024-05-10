import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const { errorStatus } = useAuth();

  useEffect(() => {
    if (errorStatus === 401) {
      handleOpenAgreeModal();
    }
  }, [errorStatus]);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  const formik = useFormik({
    initialValues: {
      email: '',
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
          id="email"
          name="email"
          label="Логін"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
              <InputAdornment name="password" position="end">
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
        <TextAgree>Перевірте, будь ласка, введення логіну та паролю.</TextAgree>
      </ModalAgree>
    </>
  );
};
