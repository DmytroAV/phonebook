import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/material/styles';

export default function Layout() {
  return (
    <ContainerStyled>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ToastContainer />
    </ContainerStyled>
  );
}

export const ContainerStyled = styled(Container)(({ theme }) => ({
  maxWidth: 'xl',
  component: 'div',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  gap: '10px',
  bgcolor: '#faf8f8',

  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '5px',
    paddingRight: '5px',
  },
}));
