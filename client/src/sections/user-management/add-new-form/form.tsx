import React, { useCallback } from 'react';
import Grid from '@mui/material/Grid';
import { Button, FormHelperText, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { UserBody } from '../../../generated/api';
import FormTextField from '../../../components/form-text-field';
import { useCreateNewUser } from '../../../hooks/user-endpoints';
import { useSubmit } from '../../../hooks/form-feedback';

const CreateUserForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<UserBody>();
  const { mutateAsync } = useCreateNewUser();

  const processFormData = useCallback(
    async (data: UserBody) => {
      reset();
      return mutateAsync(data);
    },
    [mutateAsync, reset]
  );
  const { onSubmit, Snackbar } = useSubmit(
    processFormData,
    handleSubmit,
    'User was created'
  );
  return (
    <form onSubmit={onSubmit}>
      {Snackbar}
      <Grid container spacing={2} columns={19}>
        <Grid item xs={5} />
        <Grid item xs={3}>
          <Stack spacing={2}>
            First Name
            <FormTextField control={control} name="firstName" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2}>
            Last Name
            <FormTextField control={control} name="lastName" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2}>
            Email
            <FormTextField control={control} name="email" />
          </Stack>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={5} />
        <Grid item xs={3}>
          <Stack spacing={2}>
            Password
            <FormTextField control={control} type="password" name="password" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2}>
            &nbsp;
            <Button variant="contained" color="primary" type="submit">
              Create User
            </Button>
            {Object.keys(errors).length > 0 && (
              <FormHelperText error>The fields cannot be empty</FormHelperText>
            )}
          </Stack>
        </Grid>
        <Grid item xs={8} />
      </Grid>
    </form>
  );
};

export default CreateUserForm;
