import { Stack } from '@mui/material';
import React from 'react';
import { useFetchUserList } from '../../hooks/user-endpoints';
import { CreateUserForm } from './add-new-form';
import { UsersTable } from './table';

const UserManagement = () => {
  const { data, isLoading } = useFetchUserList();

  if (isLoading) return <>Loading...</>;

  return (
    <div>
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
