import React, { memo, ReactNode, useCallback, useState } from 'react';
import { UserFullBody } from '../../../generated/api';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Close';
import { Alert, Divider, Modal } from '@mui/material';
import { UpdateUserForm } from '../update-form';
import { useRemoveUser } from '../../../hooks/user-endpoints';

type Props = UserFullBody & { setNotificationMsg: (msg: ReactNode) => void };

const UserTableRow = ({
  firstName,
  lastName,
  email,
  password,
  id,
  setNotificationMsg,
}: Props) => {
  const [isOpened, setOpened] = useState(false);
  const toggleOpened = useCallback(() => setOpened(!isOpened), [isOpened]);
  const { mutateAsync } = useRemoveUser();

  const removeUser = useCallback(async () => {
    const wasRemoved = (await mutateAsync(id)).data;

    setNotificationMsg(
      wasRemoved ? (
        <Alert severity="success">User was removed</Alert>
      ) : (
        <Alert severity="error">Something went wrong</Alert>
      )
    );
  }, [id, mutateAsync, setNotificationMsg]);

  return (
    <Grid container spacing={2} columns={19}>
      <Modal open={isOpened} onClose={toggleOpened}>
        <UpdateUserForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          id={id}
          onClose={toggleOpened}
          setNotificationMsg={setNotificationMsg}
        />
      </Modal>
      <Grid item xs={5} />
      <Grid item xs={3} color={'darkblue'} onClick={toggleOpened}>
        <u>{`${firstName} ${lastName}`}</u>
      </Grid>
      <Grid item xs={5}>
        {email}
      </Grid>
      <Grid item xs={1}>
        <DeleteIcon color="error" onClick={removeUser} />
      </Grid>
      <Grid item xs={5} />

      <Grid item xs={5} />
      <Grid item xs={9}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default memo(UserTableRow);
