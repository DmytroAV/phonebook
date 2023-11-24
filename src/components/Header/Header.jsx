import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Avatar, styled } from '@mui/material';
import LogOutUserModal from 'components/LogOutUserModal/LogOutUserModal';

function AvatarUser(name) {
  return name.includes(' ')
    ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    : `${name.split(' ')[0][0]}`;
}

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openLogOutModal, setOpenLogOutModal] = useState(false);
  const { isLoggedIn, user } = useAuth();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#f8f8f8' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* LOGO - HEADER - START */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontSize: '2rem',
                justifySelf: 'center',
              }}
            >
              <ImportContactsTwoToneIcon
                sx={{
                  fontSize: '2rem',
                  justifySelf: 'center',
                  color: '#833510',
                  marginRight: '25px',
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  justifySelf: 'center',
                  fontFamily: 'ui-monospace',
                  fontStyle: 'italic',
                  letterSpacing: '.1rem',
                  color: '#833510',
                  textDecoration: 'none',
                }}
              >
                PhoneBook
              </Typography>
            </Box>
            {/* LOGO - HEADER -END */}
            {/* Burger - Box - START */}
            {isLoggedIn && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', sm: 'none' },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="#833510"
                >
                  <TooltipStyled title="Open Nav Menu">
                    <MenuIcon />
                  </TooltipStyled>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      component={NavLink}
                      to="/"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? '#cc4305' : '#342c29',
                          borderBottom: isActive ? '.1rem solid #cc4305' : '',
                        };
                      }}
                      textAlign="center"
                      sx={{
                        textDecoration: 'none',
                        fontSize: '.8rem',
                        fontFamily: 'ui-monospace',
                        fontStyle: 'italic',
                        lineHeight: '1rem',
                      }}
                    >
                      Home
                    </Typography>
                  </MenuItem>
                  {isLoggedIn && (
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        component={NavLink}
                        to="/contacts"
                        style={({ isActive }) => {
                          return {
                            color: isActive ? '#cc4305' : '#342c29',
                            borderBottom: isActive ? '.1rem solid #cc4305' : '',
                          };
                        }}
                        textAlign="center"
                        sx={{
                          textDecoration: 'none',
                          fontSize: '.8rem',
                          fontFamily: 'ui-monospace',
                          fontStyle: 'italic',
                          lineHeight: '1rem',
                        }}
                      >
                        Contacts
                      </Typography>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            )}
            {/* Burger - Box - END */}
            {/* Burger + LOGO - HEADER - START */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <ImportContactsTwoToneIcon
                sx={{
                  // display: { xs: 'flex', md: 'none' },
                  justifySelf: 'center',
                  fontSize: '1.1rem',
                  color: '#833510',
                  marginRight: '5px',
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  // display: { xs: 'flex', md: 'none', fontSize: '1rem' },
                  flexGrow: 1,
                  justifySelf: 'center',
                  fontFamily: 'ui-monospace',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: '1rem',
                  letterSpacing: '.1rem',
                  color: '#833510',
                  textDecoration: 'none',
                  maxWidth: '100px',
                }}
              >
                PhoneBook
              </Typography>
            </Box>
            {/* Header Nav START */}
            {isLoggedIn && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: 'none',
                    sm: 'flex',
                    justifyContent: 'space-around;',
                    maxWidth: 400,
                  },
                }}
              >
                <Button
                  component={NavLink}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? '#cc4305' : '#342c29',
                      borderBottom: isActive ? '.1rem solid #cc4305' : '',
                    };
                  }}
                  to="/"
                  sx={{
                    my: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'ui-monospace',
                    fontStyle: 'italic',
                    fontSize: '.7rem',
                    borderRadius: 0,
                    lineHeight: '1rem',
                    padding: '4px 0',
                  }}
                >
                  Home
                </Button>

                <Button
                  component={NavLink}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? '#cc4305' : '#342c29',
                      borderBottom: isActive ? '.1rem solid #cc4305' : '',
                    };
                  }}
                  to="/contacts"
                  sx={{
                    my: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'ui-monospace',
                    fontStyle: 'italic',
                    fontSize: '.7rem',
                    borderRadius: 0,
                    lineHeight: '1rem',
                    padding: '4px 0',
                  }}
                >
                  Contacts
                </Button>
              </Box>
            )}
            {/* Heder Nav END */}
            {/* Box - SigUp and LogIn */}
            {isLoggedIn && (
              <UserBoxStyled>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'flex',
                    },
                    fontSize: '1rem',
                    fontFamily: 'ui-monospace',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    letterSpacing: '.1rem',
                    color: '#342c29',
                    textTransform: 'capitalize',
                  }}
                >
                  Welcome, {user.name}
                </Typography>
                {/* Box - UserMenu & LogOut */}
                <Box sx={{ flexGrow: 0 }}>
                  <TooltipStyled title="Open User Menu">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <AvatarStyled>{AvatarUser(user.name)}</AvatarStyled>
                    </IconButton>
                  </TooltipStyled>
                  <Menu
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      mt: '45px',
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        fontFamily="ui-monospace"
                        fontStyle="italic"
                        color="#342c29"
                        fontSize=".8rem"
                        lineHeight="1rem"
                      >
                        {user.email}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        display="flex"
                        textAlign="center"
                        fontFamily="ui-monospace"
                        fontStyle="italic"
                        color="#342c29"
                        fontSize=".8rem"
                        width="100%"
                        lineHeight="1rem"
                        onClick={() => setOpenLogOutModal(true)}
                      >
                        logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </UserBoxStyled>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <LogOutUserModal
        isOpenLogOutModal={openLogOutModal}
        onCloseLogOutModal={() => setOpenLogOutModal(false)}
      />
    </>
  );
}

export default Header;

export const UserBoxStyled = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '250px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'end',
  },
}));

export const BoxSignLog = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'end',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#e4e0df',
  color: '#342c29',
  fontFamily: 'ui-monospace',
  fontStyle: 'italic',
  fontSize: '1rem',
  textTransform: 'uppercase',
  fontWeight: 500,
  width: 35,
  height: 35,

  [theme.breakpoints.down('md')]: {
    width: 30,
    height: 30,
    fontSize: '.8rem',
  },

  [theme.breakpoints.down('sm')]: {
    width: 25,
    height: 25,
    fontSize: '.7rem',
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
