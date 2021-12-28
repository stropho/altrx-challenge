import React, { memo } from 'react';
import { UserFullBody } from '../../../generated/api';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Close';

const UserTableRow = ({ firstName, lastName, email }: UserFullBody) => {
  return (
    <Grid container spacing={2} columns={19}>
      <Grid item xs={5} />
      <Grid item xs={3} color={'darkblue'}>
        <u>{`${firstName} ${lastName}`}</u>
      </Grid>
      <Grid item xs={5}>
        {email}
      </Grid>
      <Grid item xs={1}>
        <DeleteIcon color="error" />
      </Grid>
      <Grid item xs={5} />
    </Grid>
  );
};

export default memo(UserTableRow);
