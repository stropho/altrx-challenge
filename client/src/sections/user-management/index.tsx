import React from 'react';
import { useFetchUserList } from '../../hooks/user-endpoints';
import { UsersTable } from './table';

const UserManagement = () => {
  const { data, isLoading } = useFetchUserList();

  if (isLoading) return <>Loading...</>;

  return (
    <div>
      <UsersTable data={data.data} />
    </div>
  );
};

export default UserManagement;
