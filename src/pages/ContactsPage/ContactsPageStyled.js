import { Box } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const AddContactTooltip = styled(({ className, ...props }) => (
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

export const BoxInputBtn = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: 20,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: '100px',
    rowGap: '20px',
  },

}));

export const ContainerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100%",
  height: "100%",
  rowGap: "40px",
  padding: "10px 0",
  position: "relative",
}));


