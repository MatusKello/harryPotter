import { Box } from '@mui/material';
import griffindor from '../images/griffindor.png';
import hufflepuff from '../images/hufflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';

const HogHouses = () => {
  const imgStyle = {
    width: '400px', // Set your desired width
    height: '400px', // Set your desired height
    border: '2px solid red',
    cursor: 'pointer',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <img src={griffindor} alt='' style={imgStyle} />
        <img src={hufflepuff} alt='' style={imgStyle} />
      </Box>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <img src={ravenclaw} alt='' style={imgStyle} />
        <img src={slytherin} alt='' style={imgStyle} />
      </Box>
    </Box>
  );
};

export default HogHouses;
