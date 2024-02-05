import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Translation from './Translation';
import { Box } from '@mui/material';

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/hogwarts-houses');
    }, 10000);

    // Clear the timer to avoid memory leaks when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <Box sx={{ mt: 2 }}>
      <Translation
        text='redirection'
        typographyProps={{
          sx: { color: (theme) => theme.palette.primary.main },
        }}
      />
    </Box>
  );
};

export default Redirection;
