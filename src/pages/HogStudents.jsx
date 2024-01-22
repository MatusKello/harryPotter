import { useFetchAllStudentsQuery } from '../apiSlice';
import { Box, Card } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import { NavLink } from 'react-router-dom';
import Translation from '../components/Translation';

const HogStudents = () => {
  const allStudents = useFetchAllStudentsQuery();

  return (
    <DataFetcherWrapper queryResponse={[allStudents]}>
      <Translation
        text='hogwartsStudents'
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
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Adjust the column width as needed
        }}
      >
        {allStudents?.data?.map((student) => (
          <Card
            key={student.id}
            sx={{
              background: (theme) => theme.palette.secondary.dark,
              m: 1,
            }}
          >
            <Translation
              text={student.name}
              typographyProps={{ color: (theme) => theme.palette.primary.main }}
            />

            <NavLink
              to={`/hogwarts-students/${student.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              More info
            </NavLink>
          </Card>
        ))}
      </Box>
    </DataFetcherWrapper>
  );
};

export default HogStudents;
