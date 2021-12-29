import React, { memo, useCallback, useState } from 'react';
import { UserFullBody } from '../../../generated/api';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Close';
import { Divider, Modal } from '@mui/material';
import { UpdateUserForm } from '../update-form';

const UserTableRow = ({
  firstName,
  lastName,
  email,
  password,
  id,
}: UserFullBody) => {
  const [isOpened, setOpened] = useState(false);
  const toggleOpened = useCallback(() => setOpened(!isOpened), [isOpened]);

  return (
    <Grid container spacing={2} columns={19}>
      <Modal open={isOpened} onClose={toggleOpened}>
        <UpdateUserForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          id={id}
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
        <DeleteIcon color="error" />
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
