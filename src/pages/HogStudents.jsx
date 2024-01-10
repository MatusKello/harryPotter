import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStudents } from '../apiSlice';
import { useEffect } from 'react';
import { Typography } from '@mui/material';

const HogStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.potter.students);
  const error = useSelector((state) => state.potter.error);

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ useEffect:', useEffect);
    dispatch(fetchAllStudents());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (students.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <Typography>{student.name}</Typography>
        </div>
      ))}
    </div>
  );
};

export default HogStudents;
