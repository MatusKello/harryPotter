import { NavLink, useParams } from 'react-router-dom';
import { useFetchCharacterByIdQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const CharactersInfo = () => {
  const { id } = useParams();
  const exactCharacter = useFetchCharacterByIdQuery(id);
  const exactCharacterData =
    (exactCharacter.isSuccess && exactCharacter?.data?.[0]) || {};

  return (
    <DataFetcherWrapper queryResponse={[exactCharacter]}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '97vh',
        }}
      >
        <Card
          sx={{
            background: (theme) => theme.palette.secondary.main,
            width: '25rem',
            height: '70vh',
          }}
        >
          <Typography>Name: {exactCharacterData.name || 'Unknown'}</Typography>
          <Typography>
            House: {exactCharacterData.house || 'Unknown'}
          </Typography>
          <Typography>
            Ancestry: {exactCharacterData.ancestry || 'Unknown'}
          </Typography>
          <Typography>
            Eye color: {exactCharacterData.eyeColour || 'Unknown'}
          </Typography>
          <Typography>
            Hair color:{exactCharacterData.hairColour || 'Unknown'}
          </Typography>
          <Typography>
            Wand core: {exactCharacterData.wand?.core || 'Unknown'}
          </Typography>
          <Typography>
            Patronus: {exactCharacterData.patronus || 'Unknown'}
          </Typography>
          <Typography>
            Actor/Actress: {exactCharacterData.actor || 'Unknown'}
          </Typography>
          <Typography>
            {exactCharacterData.alive ? 'alive' : 'dead' || 'Unknown'}
          </Typography>

          <img
            style={{
              width: '90%', // Set the width to 100% of the container
              height: 'auto', // Maintain aspect ratio
              maxHeight: '450px', // Set a maximum height if needed
              marginLeft: '20px',
            }}
            src={exactCharacterData.image}
            alt={exactCharacter.name || ''}
          />
        </Card>
        <NavLink
          to={
            exactCharacterData.hogwartsStudent === true
              ? '/hogwarts-students'
              : '/hogwarts-teachers'
          }
          className='linkStyle'
        >
          Back to all
        </NavLink>
      </Box>
    </DataFetcherWrapper>
  );
};

export default CharactersInfo;
