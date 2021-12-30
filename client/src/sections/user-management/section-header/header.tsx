import React from 'react';
import { AppBar, Stack } from '@mui/material';
import { useWhoami } from '../../../hooks/user-endpoints';

const SectionHeader = () => {
  const { data } = useWhoami();
  const userName = data && `${data.data.firstName} ${data.data.lastName}`;

  return (
    <AppBar
      position="static"
      sx={{ margin: ' 0 0 15px 0', padding: '5px', color: 'white' }}
    >
      <Stack direction="row" justifyContent="space-between">
        <span style={{ margin: 5 }}>Users</span>

        <span style={{ margin: 5 }}>
          {userName} &nbsp;&nbsp;{' '}
          <a href="logout" style={{ color: 'white' }}>
            Logout
          </a>
        </span>
      </Stack>
    </AppBar>
  );
};

export default SectionHeader;
