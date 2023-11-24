import { Container } from '@mui/material';

export default function Main({ children }) {
  return (
    <Container
      maxWidth="100%"
      component="main"
      sx={{
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        flex: '1 1 auto',
        padding: '10px',
        bgcolor: '#f8f8f8',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow:
          '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      }}
    >
      {children}
    </Container>
  );
}
