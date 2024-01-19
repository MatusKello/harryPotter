import { useParams } from 'react-router-dom';
import { useFetchTeacherByIdQuery } from '../apiSlice';
import { Box, Card, Typography } from '@mui/material';
import DataFetcherWrapper from '../components/DataFetcherWrapper';

const HogTeacherInfo = () => {
  const { id } = useParams();
  const exactTeacher = useFetchTeacherByIdQuery(id);
  const exactTeacherData =
    (exactTeacher.isSuccess && exactTeacher?.data?.[0]) || {};
  return (
    <DataFetcherWrapper queryResponse={[exactTeacher]}>
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
          <Typography>Name: {exactTeacherData.name || 'Unknown'}</Typography>
          <Typography>House: {exactTeacherData.house || 'Unknown'}</Typography>
          <Typography>
            Ancestry: {exactTeacherData.ancestry || 'Unknown'}
          </Typography>
          <Typography>
            Eye color: {exactTeacherData.eyeColour || 'Unknown'}
          </Typography>
          <Typography>
            Hair color:{exactTeacherData.hairColour || 'Unknown'}
          </Typography>
          <Typography>
            Wand core: {exactTeacherData.wand?.core || 'Unknown'}
          </Typography>
          <Typography>
            Patronus: {exactTeacherData.patronus || 'Unknown'}
          </Typography>
          <Typography>
            Actor/Actress: {exactTeacherData.actor || 'Unknown'}
          </Typography>
          <Typography>
            {exactTeacherData.alive ? 'alive' : 'dead' || 'Unknown'}
          </Typography>
          <img src={exactTeacherData.image} alt={exactTeacher.name || ''} />
        </Card>
      </Box>
    </DataFetcherWrapper>
  );
};

export default HogTeacherInfo;
