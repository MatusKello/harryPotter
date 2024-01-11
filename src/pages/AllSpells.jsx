import { useFetchAllSpellsQuery } from '../apiSlice';
import { Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const AllSpells = () => {
  return (
    <DataFetcherWrapper queryHook={useFetchAllSpellsQuery}>
      {(data) => (
        <div>
          {data.map((spell) => (
            <div key={spell.id}>
              <Typography>{spell.name}</Typography>
              <Typography>{spell.description}</Typography>
            </div>
          ))}
        </div>
      )}
    </DataFetcherWrapper>
  );
};

export default AllSpells;
