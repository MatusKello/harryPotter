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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            background: (theme) => theme.palette.secondary.main,
            width: '30rem',
          }}
        >
          <Typography>Name: {exactStudentData.name || 'Unknown'}</Typography>
          <Typography>House: {exactStudentData.house || 'Unknown'}</Typography>
          <Typography>
            Ancestry: {exactStudentData.ancestry || 'Unknown'}
          </Typography>
          <Typography>
            Eye color: {exactStudentData.eyeColour || 'Unknown'}
          </Typography>
          <Typography>
            Hair color:{exactStudentData.hairColour || 'Unknown'}
          </Typography>
          <Typography>
            Wand core: {exactStudentData.wand?.core || 'Unknown'}
          </Typography>
          <Typography>
            Patronus: {exactStudentData.patronus || 'Unknown'}
          </Typography>
          <Typography>
            Actor/Actress: {exactStudentData.actor || 'Unknown'}
          </Typography>
          <Typography>
            {exactStudentData.alive ? 'alive' : 'dead' || 'Unknown'}
          </Typography>
        </Card>
        <img src={exactStudentData.image} alt={exactStudent.name || ''} />
      </Box>
    </DataFetcherWrapper>
  );
};

export default HogStudentInfo;
