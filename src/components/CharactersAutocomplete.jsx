import { Autocomplete, TextField } from '@mui/material';

const CharactersAutocomplete = ({ allStudentsData, setSearchedStudents }) => {
  return (
    <Autocomplete
      id='character-autocomplete'
      options={allStudentsData.map((character) => character.name)}
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
