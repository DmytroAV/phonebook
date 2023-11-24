import { Box, Button } from '@mui/material';
import NotFoundImage from '../../images/NotFound_404.jpg';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <BtnStyled
        onClick={() => navigate('/')}
        startIcon={<ArrowBackIosNewIcon />}
      >
        Go back
      </BtnStyled>
      <img src={NotFoundImage} alt="" width="100%" height="100%" />
    </Box>
  );
}

export const BtnStyled = styled(Button)(({ theme }) => ({
  position: 'absolute',
  zIndex: 3,
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
