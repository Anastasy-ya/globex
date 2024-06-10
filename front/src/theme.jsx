import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "ProximaNova, Arial, sans-serif",
    fontStyle: "normal",
    margin: "0",
    padding: "0",
    fontOpticalSizing: "auto",
    webkitFontSmoothing: "antialiased",
    mozOsxFontSmoothing: "grayscale",
    webkitTextSizeAdjust: "100%",
    msTextSizeAdjust: "100%",
    mozTextSizeAdjust: "100%",
    textRendering: "optimizeSpeed",
    lineHeight: "1.5",
  },
  palette: {
    primary: {
      main: "#8189A3",
      darkGrey: "#262C40",
      lightGrey: "#D4DEFE",
      overlay: "rgba(188, 195, 208, .5)",

    },
  },
});
