import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';


export const BoxStyled = styled(Box)(({ theme }) => ({
  // width: 50,
  position: 'fixed',
  bottom: '30%',
  right: '20%',

  [theme.breakpoints.down('lg')]: {
    bottom: '5%',
    right: '5%',
  },

}));
