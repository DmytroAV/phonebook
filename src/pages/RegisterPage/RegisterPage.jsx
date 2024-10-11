import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { Register } from 'components/Register/Register';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { styled } from '@mui/material/styles';
import { registerUser } from 'redux/auth/operations';
import { toast } from 'react-toastify';

const notifyOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async data => {
    // const credentials = {
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    // };
    // console.log('credentials :>> ', credentials);
    try {
      await dispatch(
        registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
        }).unwrap()
      );
    } catch (error) {
      toast.error(error, notifyOptions);
    }
    navigate('/contacts');
  };
  return (
    <Grid
      container
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
        rowGap: '40px',
        width: '100%',
      }}
    >
      <BtnStyled
        onClick={() => navigate('/')}
        startIcon={<ArrowBackIosNewIcon />}
      >
        Go back
      </BtnStyled>
      <Register initialValues={initialValues} onSubmit={handleSubmit} />
    </Grid>
  );
}

export const BtnStyled = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  fontSize: '.8rem',
  border: '2px solid #c1b7b3 ',
  backgroundColor: '#ebe5e3',
  margin: '20px',
  color: '#833510',
  padding: '3px 4px',
  '&:hover': {
    backgroundColor: '#c1b7b3',
    border: '2px solid #ebe5e3 ',
    color: '#ebe5e3',
  },
  [theme.breakpoints.down('sm')]: {
    margin: 0,
    fontSize: '.7rem',
    fontWeight: 500,
  },
}));
