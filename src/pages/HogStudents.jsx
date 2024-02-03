import { useFetchAllStudentsQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';
import { NavLink } from 'react-router-dom';
import Translation from '../components/Translation';
import CharactersAutocomplete from '../components/CharactersAutocomplete';
import { useEffect, useState } from 'react';

const HogStudents = () => {
  const [searchedStudent, setSearchedStudents] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const allStudents = useFetchAllStudentsQuery();
  const allStudentsData = (allStudents.isSuccess && allStudents?.data) || [];

  useEffect(() => {
    if (allStudentsData) {
      setFilteredStudents(allStudentsData);
    }
  }, [allStudents]);

  useEffect(() => {
    setFilteredStudents(
      allStudentsData.filter((student) =>
        student.name.toLowerCase().includes(searchedStudent.toLocaleLowerCase())
      )
    );
  }, [searchedStudent]);

  return (
    <DataFetcherWrapper queryResponse={[allStudents]}>
      <CharactersAutocomplete
        allStudentsData={allStudentsData}
        setSearchedStudents={setSearchedStudents}
      />
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Adjust the column width as needed
        }}
      >
        {filteredStudents?.map((student) => (
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
            <img
              style={{
                width: '60%', // Set the width to 100% of the container

                maxHeight: '150px', // Set a maximum height if needed
                marginLeft: '20px',
              }}
              src={student.image}
              alt=''
            />
            <br />
            <Typography sx={{ color: (theme) => theme.palette.primary.light }}>
              {student.house}
            </Typography>
            <NavLink
              to={`/hogwarts-students/${student.id}`}
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

export default HogStudents;
