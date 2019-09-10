import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = createMuiTheme({
  root: {
  },
  palette: {
    primary: {
      main: '#EE2C33',
    },
    secondary: {
      main: '#300000',
    },
    error: {
      main: red.A400,
    },
    background: {
      main: '#fff',
      default: '#fff'
    },
  },
});