import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .max(32, 'Name must be less than 100 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const Register = ({ initialValues, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleShowPassword = () => setShowPassword(show => !show);
  const handleShowPasswordConfirm = () => setShowPasswordConfirm(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleMouseDownPasswordConfirm = event => {
    event.preventDefault();
  };

  const {
    control,
    formState,
    reset,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <BoxStyled
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      control={control}
    >
      <Typography fontSize={18} color="#833510" alignSelf="center">
        Register
      </Typography>
      <Controller
        name="name"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <TextField
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-input': {
                textTransform: 'capitalize',
              },
            }}
            name={name}
            label="Name"
            type="name"
            autoComplete="off"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            hiddenLabel
            autoFocus
            error={!!errors[name]}
            helperText={errors[name] && errors[name].message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <TextField
            name={name}
            label="Email"
            type="email"
            autoComplete="off"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            hiddenLabel
            error={!!errors[name]}
            helperText={errors[name] && errors[name].message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <FormControl variant="outlined">
            <TextField
              name={name}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="off"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              hiddenLabel
              error={!!errors[name]}
              helperText={errors[name] && errors[name].message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        )}
      />
      <Controller
        name="passwordConfirm"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <FormControl variant="outlined">
            <TextField
              name={name}
              label="Confirm Password"
              type={showPasswordConfirm ? 'text' : 'password'}
              autoComplete="off"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              hiddenLabel
              error={!!errors[name]}
              helperText={errors[name] && errors[name].message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle passwordConfirm visibility"
                      onClick={handleShowPasswordConfirm}
                      onMouseDown={handleMouseDownPasswordConfirm}
                      edge="end"
                    >
                      {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        )}
      />
      <BtnRegStyled type="submit" disabled={isSubmitting || !isValid}>
        Register
      </BtnRegStyled>
      <BtnResetStyled
        type="button"
        disabled={isDirty === false}
        onClick={() => reset()}
      >
        Reset
      </BtnResetStyled>
    </BoxStyled>
  );
};

export const BoxStyled = styled(Box)(({ theme }) => ({
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  rowGap: 20,
  width: 300,
  padding: '24px',
  backgroundColor: '#f8f8f8',
  border: '1px solid #b4a49d ',
  borderRadius: '3px',
  boxShadow: ' 0 4px 7px rgba(0, 0, 0, 0.25)',
  // [theme.breakpoints.down('md')]: {
  //   width: '100%',
  //   // height: '200px',
  // },
  // [theme.breakpoints.up('sm')]: {
  //   width: '100%',
  // },
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    padding: '10px',
    // height: '200px',
  },
}));

export const BtnRegStyled = styled(Button)(({ theme }) => ({
  border: '2px solid #c1b7b3 ',
  backgroundColor: '#ebe5e3',
  color: '#342c29',
  '&:hover': {
    backgroundColor: '#c1b7b3',
    border: '2px solid #ebe5e3 ',
    color: '#ebe5e3',
  },
  [theme.breakpoints.up('xs')]: {
    color: '#833510',
    fontSize: '.7rem',
    fontWeight: 500,
  },
}));
export const BtnResetStyled = styled(Button)(({ theme }) => ({
  border: '2px solid #c1b7b3 ',
  backgroundColor: '#a0e893',
  color: '#342c29',
  '&:hover': {
    backgroundColor: '#23a835',
    border: '2px solid #ebe5e3 ',
    color: '#ebe5e3',
  },
  [theme.breakpoints.up('xs')]: {
    color: '#833510',
    fontSize: '.7rem',
    fontWeight: 500,
  },
}));
