import { useParams } from 'react-router-dom';
import { useFetchStudentByIdQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const HogStudentInfo = () => {
  const { id } = useParams();
  const exactStudent = useFetchStudentByIdQuery(id);
  const exactStudentData =
    (exactStudent.isSuccess && exactStudent?.data?.[0]) || {};

  return (
    <DataFetcherWrapper queryResponse={[exactStudent]}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            background: (theme) => theme.palette.secondary.main,
            width: '30rem',
          }}
        >
          <Typography>Name: {exactStudentData.name || ''}</Typography>
          <Typography>House: {exactStudentData.house || ''}</Typography>
          <Typography>Ancestry: {exactStudentData.ancestry || ''}</Typography>
          <Typography>Eye color: {exactStudentData.eyeColour || ''}</Typography>
          <Typography>
            Hair color:{exactStudentData.hairColour || ''}
          </Typography>
          <Typography>
            Wand core: {exactStudentData.wand?.core || ''}
          </Typography>
          <Typography>Patronus: {exactStudentData.patronus || ''}</Typography>
          <Typography>Actor/Actress: {exactStudentData.actor || ''}</Typography>
          <Typography>
            {exactStudentData.alive ? 'alive' : 'dead' || ''}
          </Typography>
        </Card>
        <img src={exactStudentData.image} alt={exactStudent.name || ''} />
      </Box>
    </DataFetcherWrapper>
  );
};

export default HogStudentInfo;
