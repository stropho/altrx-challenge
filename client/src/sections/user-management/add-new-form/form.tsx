import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Stack, TextField } from '@mui/material';

const textFieldCommonProps = {
  variant: 'filled',
  size: 'small',
} as const;

const CreateUserForm = () => {
  return (
    <Grid container spacing={2} columns={19}>
      <Grid item xs={5} />
      <Grid item xs={3}>
        <Stack spacing={2}>
          First Name
          <TextField {...textFieldCommonProps} type="text" name="firstName" />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2}>
          Last Name
          <TextField {...textFieldCommonProps} type="text" name="lastName" />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2}>
          Email
          <TextField {...textFieldCommonProps} type="text" name="email" />
        </Stack>
      </Grid>
      <Grid item xs={5} />
      <Grid item xs={5} />
      <Grid item xs={3}>
        <Stack spacing={2}>
          Password
          <TextField
            {...textFieldCommonProps}
            type="password"
            name="password"
          />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2}>
          &nbsp;
          <Button variant="contained" color="primary">
            Create User
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={8} />
    </Grid>
  );
};

export default CreateUserForm;
