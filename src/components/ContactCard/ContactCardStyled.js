import { Card, CardActions, CardContent } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const CardStyled = styled(Card)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '10% 1fr 20%',
  justifyItems: 'center',
  alignContent: 'center',
  width: '100%',
  height: '60px',
  rowGap: '10px',
  maxWidth: 700,
  padding: '5px',
  columnGap: '20px',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow:
    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '20% 1fr 15%',
    columnGap: '5px',
    justifyContent: 'center',
    alignItems: 'center'
  },

}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'space-around',
  justifyItems: 'center',
  alignContent: 'center',
  width: '100%',
  padding: 0,
  fontWeight: 600,
  fontSize: 18,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'none',
    fontSize: 16,
    rowGap: 5,
  },

}));

export const CardActionsStyled = styled(CardActions)(({ theme }) => ({
  justifySelf: 'center',
  alignSelf: 'start',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: 0,
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'end',
  },

}));

export const TooltipStyled = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
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
