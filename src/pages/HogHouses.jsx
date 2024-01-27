import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useFetchHouseQuery } from '../apiSlice';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import griffindor from '../images/griffindor.png';
import hufflepuff from '../images/hufflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';

const HogHouses = () => {
  const exactHouse = useFetchHouseQuery();
  const imgStyle = {
    width: '400px', // Set your desired width
    height: '400px', // Set your desired height
    border: '2px solid red',
    cursor: 'pointer',
  };

  return (
    <DataFetcherWrapper queryResponse={[exactHouse]}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          height: '97vh',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <NavLink to={'/hogwarts-houses/griffindor'}>
            <img src={griffindor} alt='' style={imgStyle} />
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
    </DataFetcherWrapper>
  );
};

export default HogHouses;
