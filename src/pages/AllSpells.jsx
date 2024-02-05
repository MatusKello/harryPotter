import { useFetchAllSpellsQuery } from '../apiSlice';
import { Grid, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import Translation from '../components/Translation';

const AllSpells = () => {
  const spells = useFetchAllSpellsQuery();
  return (
    <DataFetcherWrapper queryHook={[spells]}>
      <Translation
        text='spells'
        typographyProps={{
          sx: {
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            color: (theme) => theme.palette.primary.main,
          },
          variant: 'h2',
        }}
      />
      <Grid container spacing={2}>
        {spells?.data?.map((spell) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={spell.id}>
            <Card
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
          </Grid>
        ))}
      </Grid>
    </DataFetcherWrapper>
  );
};

export default AllSpells;
