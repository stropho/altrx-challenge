import React from 'react';
import { AppBar, Stack } from '@mui/material';

const SectionHeader = () => {
  return (
    <AppBar position="static" sx={{ margin: ' 0 0 15px 0', padding: '5px' }}>
      <Stack direction="row" justifyContent="space-between">
        <span style={{ margin: 5 }}>Users</span>
        <span style={{ margin: 5 }}>
          <a href="logout" style={{ color: 'white' }}>
            Logout
          </a>
        </span>
      </Stack>
    </AppBar>
  );
};

export default SectionHeader;
