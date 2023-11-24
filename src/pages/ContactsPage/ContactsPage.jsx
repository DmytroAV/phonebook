import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/fetchContactsApi';
import { selectFilter } from 'redux/contacts/selectorContacts';
import ContactsList from 'components/ContactsList/ContactsList';
import ModalFormContact from 'components/ModalFormContact/ModalFormContact';
import { InputFilter } from 'components/InputFilter/InputFilter';
import { Loader } from 'components/Loader/Loader';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Messages from 'components/Messages/Messages';
import { MdPersonAddAlt } from 'react-icons/md';
import Button from '@mui/joy/Button';
import { toast } from 'react-toastify';
import {
  AddContactTooltip,
  BoxInputBtn,
  ContainerBox,
} from './ContactsPageStyled';
import { Typography } from '@mui/material';
const notifyOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const initialValues = {
  name: '',
  number: '',
};

export default function ContactsPage() {
  const [createContact] = useCreateContactMutation();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const { data: contacts, isFetching } = useGetContactsQuery();

  const filters = useSelector(selectFilter);

  const addFilterContacts = () => {
    const normalFilter = filters.toLowerCase().trim();
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalFilter)
      );
    }
    return;
  };

  const filteredContacts = addFilterContacts();

  const handleAddContact = async ({ name, number }) => {
    const normalName = name.toLowerCase();
    const checkName = contacts?.some(
      ({ name }) => name.toLowerCase() === normalName
    );
    if (checkName) {
      toast.info(`${name} is already in your phone book`, notifyOptions);
      return;
    }

    const newContact = {
      name: name,
      number: number,
    };

    try {
      await createContact(newContact);
      toast.success(
        `Contact ${name} has been added to your PhoneBook`,
        notifyOptions
      );
      onCloseModal();
    } catch (error) {
      toast.error(error, notifyOptions);
    }
  };

  const handleOpenAddModal = e => {
    if (e.target) {
      setOpenCreateModal(true);
    }
  };
  const onCloseModal = () => setOpenCreateModal(false);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <ContainerBox>
          <BoxInputBtn>
            <InputFilter />
            <AddContactTooltip
              sx={{ display: { sm: 'block', md: 'none' } }}
              title="Add New Contact"
              placement="bottom-end"
            >
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'end',
                  maxWidth: 180,
                  height: 40,
                  gap: '10px',
                  padding: '10px',
                  transition:
                    'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  boxShadow:
                    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                }}
                variant="outlined"
                color="neutral"
                onClick={handleOpenAddModal}
              >
                <MdPersonAddAlt size={25} fill="#833510" />
                <Typography
                  sx={{
                    display: { xs: 'none', sm: 'none', md: 'block' },
                    color: '#342c29',
                    m: 0,
                  }}
                  gutterBottom
                  variant="p"
                  component="p"
                >
                  Add New Contact
                </Typography>
              </Button>
            </AddContactTooltip>
          </BoxInputBtn>
          {contacts ? (
            <ContactsList items={filteredContacts} />
          ) : (
            <Messages text="You are not contacts" />
          )}
          <ScrollToTop />
        </ContainerBox>
      )}
      <ModalFormContact
        onSubmit={handleAddContact}
        initialValues={initialValues}
        isOpen={openCreateModal}
        onClose={onCloseModal}
        title="Create contact"
        content="create new contact"
      />
    </>
  );
}
