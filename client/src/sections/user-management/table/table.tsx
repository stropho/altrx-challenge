import React from 'react';
import { UserFullBody } from '../../../generated/api';
import UserTableHeader from './header';
import UserTableRow from './row';

type Props = {
  data: UserFullBody[];
};
const UsersTable = ({ data }: Props) => {
  return (
    <div>
      <UserTableHeader />
      {data.map((user) => (
        <UserTableRow key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UsersTable;
