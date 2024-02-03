import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Translation from './Translation';
import { Box, Button } from '@mui/material';

const Redirection = () => {
  const navigate = useNavigate();
  const [stopRedirect, setStopRedirect] = useState(true);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (stopRedirect) {
        navigate('/hogwarts-houses');
      }
    }, 10000);

    // Clear the timer to avoid memory leaks when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [navigate, stopRedirect]);

  const handleStopRedirecting = () => {
    setStopRedirect(false);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <Translation
        text='redirection'
        typographyProps={{
          sx: { color: (theme) => theme.palette.primary.main },
        }}
      />
      <Button
        variant='contained'
        sx={{ ml: 1 }}
        onClick={handleStopRedirecting}
      >
        STOP
      </Button>
    </Box>
  );
};

export default Redirection;
