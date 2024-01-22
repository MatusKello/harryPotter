import { Box } from '@mui/material';
import Translation from '../components/Translation';

const MainPage = () => {
  return (
    <Box
      sx={{
        height: '93vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Translation
        text='welcome'
        typographyProps={{
          variant: 'h2',
          sx: { color: (theme) => theme.palette.primary.main },
        }}
      />
      <Translation
        text='author'
        typographyProps={{
          variant: 'caption',
          sx: { color: (theme) => theme.palette.primary.main },
        }}
      />
    </Box>
  );
};

export default MainPage;
