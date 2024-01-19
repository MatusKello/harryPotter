import { useFetchAllSpellsQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const AllSpells = () => {
  const spells = useFetchAllSpellsQuery();
  return (
    <DataFetcherWrapper queryHook={[spells]}>
      <Typography
        variant='h2'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Spells in Harry Potter universe
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Adjust the column width as needed
        }}
      >
        {spells?.data?.map((spell) => (
          <Card
            key={spell.id}
            sx={{
              background: (theme) => theme.palette.secondary.dark,
              m: 1,
            }}
          >
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
              Spell: {spell.name}
            </Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
              Description: {spell.description}
            </Typography>
          </Card>
        ))}
      </Box>
    </DataFetcherWrapper>
  );
};

export default AllSpells;
