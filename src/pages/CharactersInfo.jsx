import { useParams } from 'react-router-dom';
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
        }}
      >
        <Card
          sx={{
            background: (theme) => theme.palette.secondary.main,
            width: '30rem',
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
          <img src={exactCharacterData.image} alt={exactCharacter.name || ''} />
        </Card>
      </Box>
    </DataFetcherWrapper>
  );
};

export default CharactersInfo;
