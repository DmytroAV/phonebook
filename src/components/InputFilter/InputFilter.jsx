import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectorContacts';
import { DebounceInput } from 'react-debounce-input';
import { Box, Input } from '@mui/material';
import { MdSearch } from 'react-icons/md';

export const InputFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <MdSearch size={25} fill="#833510" />
      <DebounceInput
        type="text"
        name="filter"
        autoComplete="off"
        minLength={2}
        debounceTimeout={500}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        element={Input}
        placeholder="Search of contact by name…"
        sx={{
          '--Input-focused': 1,
          width: 200,
          fontStyle: 'italic',
          fontSize: '.8rem',
        }}
      />
    </Box>
  );
};
