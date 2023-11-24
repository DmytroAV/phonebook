import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: '#833510',
  fontSize: '1.2rem',
  m: 0,
  padding: 0,
  fontWeight: 500,

  [theme.breakpoints.down('md')]: {
    fontSize: '.8rem',
  },
}));

function Messages({ text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        color: '#833510',
        fontSize: '1.2rem',
      }}
    >
      <TypographyStyled variant="p" component="p">
        {text}
      </TypographyStyled>
    </Box>
  );
}

Messages.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Messages;
