import React, { ReactNode, useCallback, useState } from 'react';
import SnackbarMsg from '../../../components/snack-bar';
import { UserFullBody } from '../../../generated/api';
import UserTableHeader from './header';
import UserTableRow from './row';

type Props = {
  data: UserFullBody[];
};
const UsersTable = ({ data }: Props) => {
  const [msg, setNotificationMsg] = useState<ReactNode>('');
  const clearMsg = useCallback(
    () => setNotificationMsg(''),
    [setNotificationMsg]
  );

  return (
    <div>
      <SnackbarMsg open={!!msg} onClose={clearMsg}>
        <span>{msg}</span>
      </SnackbarMsg>
      <UserTableHeader />
      {data.map((user) => (
        <UserTableRow
          key={user.id}
          setNotificationMsg={setNotificationMsg}
          {...user}
        />
      ))}
    </div>
  );
};

export default UsersTable;
