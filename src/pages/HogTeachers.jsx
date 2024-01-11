import { useFetchTeachersQuery } from '../apiSlice';
import { Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const HogTeachers = () => {
  return (
    <DataFetcherWrapper queryHook={useFetchTeachersQuery}>
      {(data) => (
        <div>
          {data.map((teacher) => (
            <Typography key={teacher.id}>{teacher.name}</Typography>
          ))}
        </div>
      )}
    </DataFetcherWrapper>
  );
};

export default HogTeachers;
