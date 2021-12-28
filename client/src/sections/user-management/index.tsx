import React from 'react';
import { useFetchUserList } from '../../hooks/user-endpoints';

const UserManagement = () => {
  const { data, isLoading } = useFetchUserList();

  if (isLoading) return <>Loading...</>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, '\t')}</pre>
    </div>
  );
};

export default UserManagement;
