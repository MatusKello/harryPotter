import { Autocomplete, TextField } from '@mui/material';

const CharactersAutocomplete = ({ allStudentsData, setSearchedStudents }) => {
  return (
    <Autocomplete
      sx={{ width: 250, mt: 1 }}
      id='character-autocomplete'
      options={allStudentsData.map((character) => character.name)}
      onChange={(e, value) => setSearchedStudents(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => setSearchedStudents(e.target.value)}
          label='Find character'
        />
      )}
    />
  );
};

export default CharactersAutocomplete;
