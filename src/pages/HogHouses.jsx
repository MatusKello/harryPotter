import { Box } from '@mui/material';
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        height: '95vh',
        mt: '12px',
      }}
    >
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <NavLink to={'/hogwarts-houses/gryffindor'}>
          <img src={gryffindor} alt='' style={imgStyle} />
        </NavLink>
        <NavLink to={'/hogwarts-houses/hufflepuff'}>
          <img src={hufflepuff} alt='' style={imgStyle} />
        </NavLink>
      </Box>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <NavLink to={'/hogwarts-houses/ravenclaw'}>
          <img src={ravenclaw} alt='' style={imgStyle} />
        </NavLink>
        <NavLink to={'/hogwarts-houses/slytherin'}>
          <img src={slytherin} alt='' style={imgStyle} />
        </NavLink>
      </Box>
    </Box>
  );
};

export default HogHouses;
