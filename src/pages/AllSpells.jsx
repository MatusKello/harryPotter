import { useFetchAllSpellsQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const AllSpells = () => {
  const spells = useFetchAllSpellsQuery();
  return (
    <DataFetcherWrapper queryHook={[spells]}>
      <Box>
        {spells?.data?.map((spell) => (
          <Card key={spell.id}>
            <Typography>Spell: {spell.name}</Typography>
            <Typography>Spell description: {spell.description}</Typography>
          </Card>
        ))}
      </Box>
    </DataFetcherWrapper>
  );
};

export default AllSpells;
