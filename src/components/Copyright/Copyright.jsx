import { Box, Link } from '@mui/material';

const Copyright = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '280px',
        height: '70px',
        gap: '5px',
        fontFamily: 'ui-monospace',
        fontStyle: 'italic',
        color: '#342c29',
        fontSize: '1rem',
      }}
    >
      {'© '} {new Date().getFullYear()}
      <Link
        sx={{
          fontFamily: 'ui-monospace',
          fontStyle: 'italic',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '1rem',
          textDecoration: 'none',
          color: '#833510',
        }}
        // href="https://github.com/dmytroav"
        // href="https://github.com/igorklyopov"
        target="_blank"
        rel="noopener noreferrer"
      >
        by Dmytro Velkov
      </Link>
    </Box>
  );
};

export default Copyright;
