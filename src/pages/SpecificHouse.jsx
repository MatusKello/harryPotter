import { Box, Card, Typography } from '@mui/material';
import { useFetchHouseQuery } from '../apiSlice';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import { NavLink, useParams } from 'react-router-dom';
import Translation from '../components/Translation';
import { houseSwitch } from '../helpers';

const SpecificHouse = () => {
  const { house } = useParams();
  const allCharactersInHouse = useFetchHouseQuery(house);

  return (
    <DataFetcherWrapper queryResponse={[allCharactersInHouse]}>
      <Translation
        typographyProps={{
          sx: {
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            color: (theme) => theme.palette.primary.main,
          },
          variant: 'h2',
        }}
        text={houseSwitch(house).title}
      />
      <Translation
        typographyProps={{
          sx: {
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            color: (theme) => theme.palette.primary.light,
          },
          variant: 'subtitle',
        }}
        text={houseSwitch(house).info}
      />
      <Box
        sx={{
          display: 'grid',
          gap: '5px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          height: '97vh',
        }}
      >
        {allCharactersInHouse?.data?.map((character) => (
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

        <NavLink to='/hogwarts-houses' className='linkStyle'>
          Back to all houses
        </NavLink>
      </Box>
    </DataFetcherWrapper>
  );
};

export default SpecificHouse;
