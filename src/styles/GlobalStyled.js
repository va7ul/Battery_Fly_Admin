import { createTheme } from '@mui/material/styles';
import { createGlobalStyle, css } from 'styled-components';
import 'modern-normalize';

export const themeMUI = createTheme({
  palette: {
    secondary: {
      main: 'rgba(251, 208, 110, 1)',
    },
    hoverColor: {
      main: 'rgba(244, 170, 0, 1)',
    },
    background: {
      paper: 'rgba(225, 225, 225, 1)',
      default: 'rgba(247, 247, 247, 1)',
      primary: 'rgba(213, 213, 213, 0.54)',
    },
    text: {
      primary: 'rgba(31, 31, 31, 1)',
      disabled: 'rgba(157, 157, 157, 1)',
    },
    warning: {
      main: 'rgba(228, 219, 0, 1)',
    },
    error: {
      main: 'rgba(255, 0, 0, 1)',
    },
    success: {
      main: 'rgba(20, 211, 16, 1)',
    },
    primary: {
      main: 'rgba(244, 170, 0, 1)',
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 20,
    htmlFontSize: 20,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h2: {
      fontWeight: 700,
    },
  },
});

export const theme = {
  colors: {
    textPrimary: 'rgba(31, 31, 31, 1)', // колір тексту чорний
    textDisabled: 'rgba(157, 157, 157, 1)', //колір плейсхолдерів, неактивного тексту світло сірий
    greyOutput: 'rgba(144, 144, 144, 1)', // ??? поки не використовується?
    greyPlaysholder: 'rgba(165, 165, 165, 1)', // ??? поки не використовується?
    greyBackgroundPaper: 'rgba(225, 225, 225, 1)', // колір фону нотаток, кнопок, світло сірий
    greyPrimary: 'rgba(213, 213, 213, 0.54)', // колір фону хедера, футера світло сірий

    secondary: 'rgba(251, 208, 110, 1)', // колір жовтий без ховера використовується для піднавігації
    hoverColor: 'rgba(244, 170, 0, 1)', // колір ел. ховера, активних посилань та заливки svg темно оранжевий
    background: 'rgba(247, 247, 247, 1)', // колір фону сторінки білий

    gradient: 'linear-gradient(rgba(255, 208, 100, 1), rgba(251, 208, 110, 0))', // для не функціональних кнопок
    gradientYellow:
      'linear-gradient(rgba(255, 208, 100, 1),rgba(255, 239, 202, 1))', // для фону жовтих модалок
    gradientHover:
      'linear-gradient(rgba(255, 177, 0, 1), rgba(251, 208, 110, 0))', // більше не використовується!!!
    gradientBlack:
      'linear-gradient(rgba(51, 51, 51, 1), rgba(114, 114, 114, 1))', // для фону чорної модалки
    gradientBackground:
      'linear-gradient(rgba(251, 208, 110, 0.04),rgba(251, 208, 110, 0.39),rgba(251, 208, 110, 0))', // для фону секцій
    gradientSubNavGrey:
      'linear-gradient(rgba(231, 231, 231, 1), rgba(255, 255, 255, 0))', // для сірих кнопок меню піднавігації
    warning: 'rgba(228, 219, 0, 1)',
    error: 'rgba(255, 0, 0, 1)',
    success: 'rgba(20, 211, 16, 1)',
  },
  transition: {
    main: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: ${theme.colors.background};
  color: ${theme.colors.textPrimary}; 
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    margin-bottom: 0;
}

ul, ol, li {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

a
 {
  color: currentColor;
  text-decoration: none; 
  transition: ${theme.transition.main};
}

button {
  margin: 0;
  padding: 0;
  border: transparent;
  cursor: pointer;
  transition: ${theme.transition.main};    
  color: ${theme.colors.textPrimary};
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
     appearance: textfield;
}
`;

export const hidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const getRotation = props => {
  if (props.handleOpen) {
    return `rotate(90deg)`;
  }
  return 'rotate(270deg)';
};
