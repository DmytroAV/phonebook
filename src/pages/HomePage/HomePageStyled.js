import { styled } from '@mui/material/styles';
import { Box, Button, Tooltip, Typography, tooltipClasses } from '@mui/material';

export const BoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '200px',
  padding: '5px',
  marginLeft: '30px',
  marginTop: '30px',
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    marginTop: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    marginTop: '10px',
    height: '120px',
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'ui-monospace',
  fontStyle: 'italic',
  fontSize: '2rem',
  fontWeight: 500,
  width: '100%',
  letterSpacing: '.3rem',
  color: '#833510',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    letterSpacing: '.15rem',
    maxWidth: 300
  },
}));
export const UserNameStyled = styled(Typography)(({ theme }) => ({
  fontFamily: 'ui-monospace',
  fontStyle: 'italic',
  fontSize: '2rem',
  fontWeight: 500,
  textTransform: 'capitalize',
  width: '100%',
  letterSpacing: '.3rem',
  color: '#833510',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    letterSpacing: '.15rem',
    maxWidth: 300
  },
}));

export const TextHeading = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'ui-monospace',
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: '1rem',
  letterSpacing: '.3rem',
  columnGap: 20,
  width: '100%',
  color: '#833510',
  [theme.breakpoints.down('md')]: {
    fontSize: '.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '.5rem',
    letterSpacing: '.1rem',
    columnGap: 10,
  },
}));

export const BtnStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#e4e0df',
  color: '#833510',
  '&:hover': {
    backgroundColor: '#b4a49d',
    color: '#e4e0df',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '.7rem',
    lineHeight: '1rem',
    padding: '4px 6px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '.5rem',
    lineHeight: '.8rem',
    padding: '4px 6px',
  },
}));

export const BtnContactsStyled = styled(Button)(({ theme }) => ({
  alignSelf: 'center',
  justifyContent: 'center',
  color: '#b4a49d',
  height: '1.5rem',
  padding: '4px 6px',
  '&:hover': {
    backgroundColor: '#b4a49d',
    color: '#efeae7',
    border: 'none'
  },

  [theme.breakpoints.down('md')]: {
  },
  [theme.breakpoints.down('sm')]: {
  },
}));

export const TooltipStyled = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: '110px',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    border: '1px solid #dadde9',
    backgroundColor: '#f5f5f9',
    color: '#342c29',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
});
