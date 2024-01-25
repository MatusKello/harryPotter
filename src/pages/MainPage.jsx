import { Box } from '@mui/material';
import Translation from '../components/Translation';

const MainPage = () => {
  return (
    <Box
      sx={{
        height: '97vh',
        display: 'flex',
        flexDirection: 'column',

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
      <Box
        sx={{
          position: 'relative',
          '&:hover': {
            borderColor: (theme) => theme.palette.secondary.main,
          },
          borderWidth: 2,
          borderStyle: 'solid',
          padding: 2,
          borderRadius: 4,
          width: 600,
          textAlign: 'center',
        }}
      >
        <Translation
          text='about'
          typographyProps={{
            variant: 'subtitle1',
            sx: { color: (theme) => theme.palette.primary.main },
          }}
        />
      </Box>
      <br />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          m: 1,
        }}
      >
        <Translation
          text='author'
          typographyProps={{
            variant: 'caption',
            sx: { color: (theme) => theme.palette.secondary.dark },
          }}
        />
      </Box>
    </Box>
  );
};

export default MainPage;
