import { AppBar, Stack } from '@mui/material';
import React from 'react';
import { useFetchUserList } from '../../hooks/user-endpoints';
import { CreateUserForm } from './add-new-form';
import { UsersTable } from './table';

const UserManagement = () => {
  const { data, isLoading } = useFetchUserList();

  if (isLoading) return <>Loading...</>;

  return (
    <div>
      <AppBar position="static" sx={{ margin: ' 0 0 15px 0', padding: '5px' }}>
        <span style={{ margin: 5 }}>Users</span>
      </AppBar>
      <Stack>
        <CreateUserForm />
        <div>
          <br />
          <br />
        </div>
        <UsersTable data={data.data} />
      </Stack>
    </div>
  );
};

export default UserManagement;
