import { Box, Card, Typography } from '@mui/material';
import { useFetchHouseQuery } from '../apiSlice';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import { useParams } from 'react-router-dom';

const SpecificHouse = () => {
  const { house } = useParams();
  const allCharactersInHouse = useFetchHouseQuery(house);

  console.log('House:', house);
  console.log('API Response:', allCharactersInHouse);

  return (
    <DataFetcherWrapper queryResponse={[allCharactersInHouse]}>
      <Box
        sx={{
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          height: '97vh',
        }}
      >
        {allCharactersInHouse.isSuccess &&
          allCharactersInHouse?.data?.map((character) => (
            <Card
              sx={{
                background: (theme) => theme.palette.secondary.main,
                margin: '1rem',
              }}
              key={character.id}
            >
              <Typography variant='h5'>{character.name}</Typography>
              <Typography>House: {character.house}</Typography>
            </Card>
          ))}
      </Box>
    </DataFetcherWrapper>
  );
};

export default SpecificHouse;
