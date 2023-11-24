import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { styled } from '@mui/material/styles';

export default function LogOutUserModal({
  isOpenLogOutModal,
  onCloseLogOutModal,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOutUser = () => {
    dispatch(logOutUser());
    navigate('/');
    onCloseLogOutModal();
  };

  return (
    <>
      <Modal open={isOpenLogOutModal} onClose={onCloseLogOutModal}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              color: '#833510',
              fontFamily: 'ui-monospace',
              fontStyle: 'italic',
            }}
          >
            Log Out
          </DialogTitle>
          <DialogContent
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              color: '#342c29',
              fontFamily: 'ui-monospace',
              fontStyle: 'italic',
            }}
          >
            Are you sure Log Out ?
          </DialogContent>
          <DialogActions
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <BtnStyled onClick={handleLogOutUser}>Yes</BtnStyled>
            <BtnStyled onClick={onCloseLogOutModal}>No</BtnStyled>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </>
  );
}

export const BtnStyled = styled(Button)(({ theme }) => ({
  width: '70px',
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
