import { styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name.includes(' ')
      ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
      : `${name.split(' ')[0][0]}`,
  };
}

export default function UserAvatar({ name }) {
  return (
    <Stack direction="row" spacing={2}>
      <AvatarStyled {...stringAvatar(name)} />
    </Stack>
  );
}

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  fontFamily: 'ui-monospace',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  width: '50px',
  height: '50px',
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
    fontSize: 16,
  },
}));
