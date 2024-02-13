import { Box, Grid } from '@mui/material';
import Translation from '../components/Translation';
//import Redirection from '../components/Redirection';
import hogwarts from '../images/hogwarts.png';
import TriviaQuestions from '../components/TriviaQuestions';

const MainPage = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      height='93vh'
    >
      <Grid item>
        <Translation
          text='welcome'
          typographyProps={{
            variant: 'h2',
            sx: { color: (theme) => theme.palette.primary.main },
          }}
        />
      </Grid>
      <TriviaQuestions />
      <Grid item>
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
            maxWidth: 650,
            widthL: '100%',
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
          <img src={hogwarts} alt='hogwarts castle' />
        </Box>
      </Grid>
      <Grid item>
        {/* <Redirection /> */}
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
      </Grid>
    </Grid>
  );
};

export default MainPage;
