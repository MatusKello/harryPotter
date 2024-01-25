import { useFetchTeachersQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import { NavLink } from 'react-router-dom';
import Translation from '../components/Translation';

const HogTeachers = () => {
  const allTeachers = useFetchTeachersQuery();
  return (
    <DataFetcherWrapper queryResponse={[allTeachers]}>
      <Translation
        text='hogwartsTeachers'
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', // Adjust the column width as needed
        }}
      >
        {allTeachers?.data?.map((teacher) => (
          <Card
            key={teacher.id}
            sx={{
              background: (theme) => theme.palette.secondary.dark,
              m: 1,
              width: '80%',
            }}
          >
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
              {teacher.name}
            </Typography>
            <img
              style={{
                width: '20%', // Set the width to 100% of the container

                maxHeight: '150px', // Set a maximum height if needed
                marginLeft: '20px',
              }}
              src={teacher.image}
              alt=''
            />
            <br />
            <Typography sx={{ color: (theme) => theme.palette.primary.light }}>
              {teacher.house}
            </Typography>
            <NavLink
              to={`/hogwarts-teachers/${teacher.id}`}
              className='linkStyle'
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
