import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Stack, TextField } from '@mui/material';
import { textFieldCommonProps } from '../../components/form-text-field';

const LoginForm = () => {
  return (
    <form action="/login" method="post">
      <Grid container spacing={2} columns={3}>
        <Grid item xs={1} />
        <Grid item xs={1}>
          <Stack spacing={2}>
            <h1>Sign In</h1>
            Email
            <TextField {...textFieldCommonProps} name="email" />
            Password
            <TextField
              {...textFieldCommonProps}
              type="password"
              name="password"
            />
            <Button variant="contained" color="primary" type="submit">
              Log In
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
