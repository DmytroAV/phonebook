import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from 'redux/auth/operations';
import { LogInForm } from 'components/LogInForm/LogInForm';
import { Button, Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { styled } from '@mui/material/styles';
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

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async data => {
    try {
      await dispatch(logInUser(data)).unwrap();
    } catch (error) {
      toast.error(error, notifyOptions);
    }

    navigate('/');
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
      <LogInForm text="log In" textBtn="log in" onSubmit={handleSubmit} />
    </Grid>
  );
}

export const BtnStyled = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-start',
  fontSize: '.8rem',
  border: '2px solid #c1b7b3 ',
  backgroundColor: '#ebe5e3',
  color: '#833510',
  margin: '20px',
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
