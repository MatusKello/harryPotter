import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const RegisterForm = ({ onSubmitCallback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Call the onSubmitCallback function passed from the parent component
    onSubmitCallback(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName', { required: true })}
        placeholder='First name'
      />
      {errors.firstName && (
        <Typography variant='caption' display='block'>
          This field is required
        </Typography>
      )}

      <input
        {...register('lastName', { required: true })}
        placeholder='Last name'
      />
      {errors.lastName && (
        <Typography variant='caption' display='block'>
          This field is required
        </Typography>
      )}

      <input type='submit' value='Submit' />
    </form>
  );
};

export default RegisterForm;
