import { useDeleteContactMutation } from 'redux/fetchContactsApi';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';

import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { toast } from 'react-toastify';

const notifyOptions = {
  position: 'top-right',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export default function DeleteContactModal({ isOpen, onClose, id, name }) {
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = () => {
    deleteContact(id);
    onClose();
    toast.success(
      `Contact ${name}  has been deleted to your PhoneBook`,
      notifyOptions
    );
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon sx={{ fill: '#c41c1c' }} />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure want to discard {name} of your PhoneBook ?
          </DialogContent>
          <DialogActions>
            <Button
              variant="solid"
              color="danger"
              onClick={handleDeleteContact}
            >
              Confirm
            </Button>
            <Button variant="plain" color="neutral" onClick={onClose}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </>
  );
}
