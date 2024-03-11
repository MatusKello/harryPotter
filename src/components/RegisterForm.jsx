import { Button, FormControl, TextField } from '@mui/material'; // Import MUI components
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup'; // Import yup for schema validation
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterForm = ({ onSubmitCallback, setOpen }) => {
  const defaultValues = { firstName: '', lastName: '', email: '' };

  // Define schema using yup
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('First name is required')
      .min(3, 'At least 3 characters long'),
    lastName: yup
      .string()
      .required('Last name is required')
      .min(3, 'At least 3 characters long'),
    email: yup
      .string()
      .required('Email is required')
      .email('Enter valid email'),
  });

  const {
    control,
    reset,
    //watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(schema), mode: 'onBlur' });

  // onSubmit function to handle form submission
  const onSubmit = (data) => {
    onSubmitCallback(data);
    setOpen(false);
  };

  const handleSetForm = () => {
    setValue('firstName', 'Michael');
    setValue('lastName', 'Melis');
    setValue('email', 'melis@gmail.com');
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <label>First Name</label>
        <Controller
          name='firstName'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='First Name'
              variant='outlined'
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ''}
            />
          )}
        />
      </FormControl>
      <FormControl>
        <label>Last Name</label>
        <Controller
          name='lastName'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='Last Name'
              variant='outlined'
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ''}
              /*  style={{
                background: watch('lastName').length < 3 ? 'red' : 'green',
              }} */
            />
          )}
        />
      </FormControl>
      <FormControl>
        <label>Email</label>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Email'
              variant='outlined'
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />
      </FormControl>
      <Button type='submit' variant='contained'>
        Submit
      </Button>
      <Button type='reset' onClick={reset} variant='outlined'>
        Reset
      </Button>
      <Button onClick={handleSetForm} variant='outlined'>
        Set form for me
      </Button>
    </form>
  );
};

export default RegisterForm;
