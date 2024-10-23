import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'ProximaNova, Arial, sans-serif',
    fontStyle: 'normal',
    margin: '0',
    padding: '0',
    fontOpticalSizing: 'auto',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
    webkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%',
    mozTextSizeAdjust: '100%',
    textRendering: 'optimizeSpeed',
    // lineHeight: '1.5',
    h2: {
      fontWeight: 700,
      color: '#262C40',
      fontSize: '24px',
      lineHeight: '30px',
      textAlign: 'left',
    },
    body1: {
      fontWeight: 400,
      color: '#262C40',
      fontSize: '18px',
      lineHeight: '24px',
      textAlign: 'left',
    },
    body2: {
      fontWeight: 400,
      color: '#8189A3',
      fontSize: '16px',
      lineHeight: '18px',
      textAlign: 'left',
    },
  },
  palette: {
    primary: {
      main: '#8189A3',
      darkGrey: '#262C40',
      lightGrey: '#D4DEFE',
      overlay: 'rgba(188, 195, 208, .3)',
    },
  },
});
