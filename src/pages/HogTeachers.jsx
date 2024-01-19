import { useFetchTeachersQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import { NavLink } from 'react-router-dom';

const HogTeachers = () => {
  const allTeachers = useFetchTeachersQuery();
  return (
    <DataFetcherWrapper queryResponse={[allTeachers]}>
      <Typography
        variant='h2'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Teachers in Hogwarts
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', // Adjust the column width as needed
        }}
      >
        {allTeachers?.data?.map((teacher) => (
          <Card
            key={teacher.id}
            sx={{
              background: (theme) => theme.palette.secondary.dark,
              m: 1,
            }}
          >
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
              {teacher.name}
            </Typography>
            <NavLink
              to={`/hogwarts-teachers/${teacher.id}`}
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

export default HogTeachers;
