import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectorContacts';
import ContactCard from 'components/ContactCard/ContactCard';
import Messages from 'components/Messages/Messages';
import { Box } from '@mui/material';

function ContactsList({ items }) {
  const nameFiltered = useSelector(selectFilter);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {items.length > 0 ? (
        items.map(item => <ContactCard key={item.id} item={item} />)
      ) : (
        <Messages
          text={`You don't have a contact with the name " ${nameFiltered} "`}
        />
      )}
    </Box>
  );
}

ContactsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ContactsList;
