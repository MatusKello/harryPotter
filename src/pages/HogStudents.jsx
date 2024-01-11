import { useFetchAllStudentsQuery } from '../apiSlice';
import { Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const HogStudents = () => {
  return (
    <DataFetcherWrapper queryHook={useFetchAllStudentsQuery}>
      {(data) => (
        <div>
          {data.map((student) => (
            <Typography key={student.id}>{student.name}</Typography>
          ))}
        </div>
      )}
    </DataFetcherWrapper>
  );
};

export default HogStudents;
