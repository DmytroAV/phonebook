import { useState } from 'react';
import PropTypes from 'prop-types';
import { useUpdateContactMutation } from 'redux/fetchContactsApi';
import UserAvatar from 'components/UserAvatar/UserAvatar';
import DeleteContactModal from 'components/DeleteContactModal/DeleteContactModal';
import ModalFormContact from 'components/ModalFormContact/ModalFormContact';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { toast } from 'react-toastify';
import Button from '@mui/joy/Button';
import { Box } from '@mui/material';
import {
  CardActionsStyled,
  CardContentStyled,
  CardStyled,
  TooltipStyled,
} from './ContactCardStyled';

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

export default function ContactCard({ item }) {
  const [updateContact] = useUpdateContactMutation();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleUpdateContact = async fields => {
    try {
      await updateContact(fields);
      onCloseModal();
      toast.success(
        `Contact ${fields.name} has updated your phone book`,
        notifyOptions
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onCloseModal = () => setOpenEditModal(false);

  return (
    <>
      <CardStyled>
        <UserAvatar name={item.name} />
        <CardContentStyled>
          <Typography
            sx={{
              justifySelf: 'start',
              color: '#342c29',
              m: 0,
              textTransform: 'capitalize',
            }}
            gutterBottom
            variant="p"
            component="p"
          >
            {item.name}
          </Typography>
          <Box
            component="div"
            sx={{
              justifySelf: 'end',
              display: 'grid',
              gridTemplateColumns: '10% 1fr',
              justifyItems: 'center',
              columnGap: '10px',
            }}
          >
            <ContactPhoneIcon sx={{ color: '#833510', fontSize: '20px' }} />
            <Typography
              sx={{ color: '#342c29', justifySelf: 'end' }}
              variant="p"
              component="p"
            >
              {item.number}
            </Typography>
          </Box>
        </CardContentStyled>
        <CardActionsStyled>
          <TooltipStyled
            sx={{
              display: { sm: 'flex', md: 'none' },
            }}
            title="Edit"
            size="lg"
            placement="top"
          >
            <Button
              sx={{
                gap: '5px',
              }}
              variant="plain"
              size="small"
              name="edit"
              type="button"
              onClick={() => setOpenEditModal(true)}
            >
              <DriveFileRenameOutlineIcon
                sx={{
                  display: {
                    xs: 'flex',
                    sm: 'none',
                    justifyContent: 'space-around;',
                  },
                  color: '#833510',
                  fontSize: '20px',
                }}
              />
              <Typography
                variant="p"
                component="p"
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'flex',
                    justifyContent: 'space-around;',
                    fontSize: '14px',
                  },
                  textTransform: 'uppercase',
                  color: '#833510',
                }}
              >
                edit
              </Typography>
            </Button>
          </TooltipStyled>
          <TooltipStyled
            sx={{ display: { sm: 'flex', md: 'none' } }}
            title="Delete"
            size="lg"
            placement="bottom"
          >
            <Button
              sx={{
                gap: '5px',
              }}
              variant="plain"
              size="small"
              name="delete"
              type="button"
              onClick={() => setOpenDeleteModal(true)}
            >
              <DeleteIcon
                sx={{
                  display: {
                    xs: 'flex',
                    sm: 'none',
                    justifyContent: 'space-around;',
                  },
                  color: '#f01818',
                  fontSize: '20px',
                }}
              />
              <Typography
                variant="p"
                component="p"
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'flex',
                    justifyContent: 'space-around;',
                    fontSize: '14px',
                  },
                  textTransform: 'uppercase',
                  color: '#f01818',
                }}
              >
                delete
              </Typography>
            </Button>
          </TooltipStyled>
        </CardActionsStyled>
      </CardStyled>
      <ModalFormContact
        onSubmit={handleUpdateContact}
        initialValues={item}
        isOpen={openEditModal}
        onClose={onCloseModal}
        title="Edit Contact"
        content="Edit Contact"
      />
      <DeleteContactModal
        isOpen={openDeleteModal}
        name={item.name}
        id={item.id}
        onClose={() => setOpenDeleteModal(false)}
      />
    </>
  );
}

ContactCard.propTypes = {
  item: PropTypes.object.isRequired,
};
