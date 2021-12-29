import React, { forwardRef } from 'react';
import { Button, Stack, TextField, Box, AppBar } from '@mui/material';
import { UserFullBody } from '../../../generated/api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
} as const;

const textFieldCommonProps = {
  variant: 'filled',
  size: 'small',
} as const;

const UpdateUserForm = ({
  firstName,
  lastName,
  email,
  password,
  id,
}: UserFullBody) => {
  return (
    <Box sx={style}>
      <AppBar sx={{ textAlign: 'center' }}>
        {firstName} {lastName}
      </AppBar>
      <Stack spacing={2}>
        <input type="hidden" value={id} name="id" />
        <span>First Name</span>
        <TextField
          {...textFieldCommonProps}
          type="text"
          name="firstName"
          defaultValue={firstName}
        />
        <span>Last Name</span>
        <TextField
          {...textFieldCommonProps}
          type="text"
          name="lastName"
          defaultValue={lastName}
        />
        <span>Email</span>
        <TextField
          {...textFieldCommonProps}
          type="text"
          name="email"
          defaultValue={email}
        />
        <span>Password</span>
        <TextField
          {...textFieldCommonProps}
          type="password"
          name="password"
          defaultValue={password}
        />
        <Stack spacing={2} justifyContent="space-between" direction="row">
          <Button>Cancel</Button>
          <Button color="primary" variant="contained">
            Update
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const WithRef = forwardRef((props: UserFullBody, _ref) => (
  <UpdateUserForm {...props} />
));
WithRef.displayName = 'UpdateUserFormWithRef';
export default WithRef;
