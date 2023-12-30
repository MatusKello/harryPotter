import { ThemeProvider } from '@mui/material/styles';
import theme from './configs/theme';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant='h2' sx={{ color: theme.palette.primary.main }}>
          Harry potter
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default App;
