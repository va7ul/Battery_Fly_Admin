import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { themeMUI } from 'styles/GlobalStyled';
import { Container } from './Layout.styled';
import { Header } from '../../components/Header/Header';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';

export const Layout = () => {
  return (
    <>
      <ThemeProvider theme={themeMUI}>
        <Header />
        <main>
          <Container>
            <Suspense fallback={<CustomLoader />}>
              <Outlet />
            </Suspense>
          </Container>
        </main>
        <footer></footer>
      </ThemeProvider>
    </>
  );
};
