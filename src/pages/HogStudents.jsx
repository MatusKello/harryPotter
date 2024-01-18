import { useFetchAllStudentsQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import { NavLink } from 'react-router-dom';

const HogStudents = () => {
  const allStudents = useFetchAllStudentsQuery();

  return (
    <DataFetcherWrapper queryResponse={[allStudents]}>
      <Typography
        variant='h2'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Hogwarts students
      </Typography>
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
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
              {student.name}
            </Typography>
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
