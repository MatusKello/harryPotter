import { useFetchTeachersQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const HogTeachers = () => {
  const allTeachers = useFetchTeachersQuery();
  return (
    <DataFetcherWrapper queryResponse={[allTeachers]}>
      <Box>
        {allTeachers?.data?.map((teacher) => (
          <Card key={teacher.id}>
            <Typography>{teacher.name}</Typography>
          </Card>
        ))}
      </Box>
    </DataFetcherWrapper>
  );
};

export default HogTeachers;
