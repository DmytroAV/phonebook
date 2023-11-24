import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

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
  },
}));

export const BtnStyled = styled(Button)(({ theme }) => ({
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

export const LogInForm = ({ text, textBtn, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const {
    control,
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <BoxStyled
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      control={control}
      // autoComplete="off"
    >
      <Typography fontSize={18} color="#833510" alignSelf="center">
        {text}
      </Typography>
      <FormControl variant="outlined">
        <TextField
          name="email"
          label="Email"
          hiddenlabel="true"
          id="filled-hidden-label-email"
          defaultValue=""
          autoFocus
          {...register('email')}
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
          hiddenlabel="true"
          defaultValue=""
          {...register('password')}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <BtnStyled type="submit">{textBtn}</BtnStyled>
    </BoxStyled>
  );
};
