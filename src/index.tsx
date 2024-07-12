import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { persistor, store } from './redux/store.ts';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/GlobalStyled.js';
import { App } from 'App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Battery_Fly_Admin">
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
            <Toaster
              toastOptions={{
                duration: 2000,
                style: {
                  borderRadius: '10px',
                  background: '#333',
                },
                loading: {
                  style: {
                    color: `${theme.colors.hoverColor}`,
                  },
                },
                success: {
                  style: {
                    color: `${theme.colors.success}`,
                  },
                },
                error: {
                  style: {
                    color: `${theme.colors.error}`,
                  },
                },
              }}
            />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
