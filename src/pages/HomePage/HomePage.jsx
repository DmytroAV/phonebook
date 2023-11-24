import { Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import backgroundImage from '../../images/ImageHomePage.png';
import {
  BoxStyled,
  BtnContactsStyled,
  BtnStyled,
  Heading,
  TextHeading,
  TooltipStyled,
  UserNameStyled,
} from './HomePageStyled';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function HomePage() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  return (
    <Grid
      container
      maxWidth="xl"
      justifyContent="start"
      alignSelf="start"
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50%',
        backgroundPosition: 'right 10% bottom 10%',
      }}
    >
      <BoxStyled>
        {isLoggedIn ? (
          <>
            <Heading variant="h1">
              Welcome to your PhoneBook,
              <UserNameStyled>{user.name}!</UserNameStyled>
            </Heading>
            <TextHeading variant="p">
              ALL YOUR CONTACTS
              <TooltipStyled title="Your Contacts">
                <BtnContactsStyled onClick={() => navigate('/contacts')}>
                  <ArrowRightAltIcon sx={{ fontSize: '2.5rem' }} />
                </BtnContactsStyled>
              </TooltipStyled>
            </TextHeading>
          </>
        ) : (
          <>
            <Heading variant="h1">PhoneBook</Heading>
            <TextHeading variant="p">
              ALL YOUR CONTACTS IN ONE PLACE
            </TextHeading>
            <Stack
              spacing={2}
              justifyContent="space-evenly"
              alignSelf="end"
              direction="row"
            >
              <BtnStyled
                onClick={() => navigate('/register')}
                variant="contained"
              >
                Register
              </BtnStyled>
              <BtnStyled onClick={() => navigate('/login')} variant="contained">
                login
              </BtnStyled>
            </Stack>
          </>
        )}
      </BoxStyled>
    </Grid>
  );
}
