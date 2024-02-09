import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import gryffindor from '../images/gryffindor.png';
import hufflepuff from '../images/hufflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';

const HogHouses = () => {
  const imgStyle = {
    width: '350px',
    height: '350px',
    border: '2px solid red',
    cursor: 'pointer',
    borderRadius: 5,
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{ height: '92vh', marginTop: '12px' }}
    >
      <Grid item container justifyContent='center' spacing={2}>
        <Grid item>
          <NavLink to={'/hogwarts-houses/gryffindor'}>
            <img src={gryffindor} alt='' style={imgStyle} />
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to={'/hogwarts-houses/hufflepuff'}>
            <img src={hufflepuff} alt='' style={imgStyle} />
          </NavLink>
        </Grid>
      </Grid>
      <Grid item container justifyContent='center' spacing={2}>
        <Grid item>
          <NavLink to={'/hogwarts-houses/ravenclaw'}>
            <img src={ravenclaw} alt='' style={imgStyle} />
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to={'/hogwarts-houses/slytherin'}>
            <img src={slytherin} alt='' style={imgStyle} />
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HogHouses;
