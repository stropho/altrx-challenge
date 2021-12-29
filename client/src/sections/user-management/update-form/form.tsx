import React, { forwardRef, useMemo } from 'react';
import { Button, Stack, Box, AppBar, FormHelperText } from '@mui/material';
import { UserFullBody } from '../../../generated/api';
import { useForm } from 'react-hook-form';
import { useUpdateUser } from '../../../hooks/user-endpoints';
import FormTextField from '../../../components/form-text-field';

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

type Props = UserFullBody & { onClose: () => void };
const UpdateUserForm = ({
  firstName,
  lastName,
  email,
  password,
  id,
  onClose,
}: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserFullBody>();
  const { mutate } = useUpdateUser();
  const onSubmit = useMemo(() => {
    return handleSubmit((data) => {
      mutate({ ...data, id });
      onClose();
    });
  }, [mutate, onClose, handleSubmit]);

  return (
    <form onSubmit={onSubmit}>
      <Box sx={style}>
        <AppBar sx={{ textAlign: 'center' }}>
          {firstName} {lastName}
        </AppBar>
        <Stack spacing={2}>
          <span>First Name</span>
          <FormTextField
            control={control}
            name="firstName"
            defaultValue={firstName}
          />
          <span>Last Name</span>
          <FormTextField
            control={control}
            type="text"
            name="lastName"
            defaultValue={lastName}
          />
          <span>Email</span>
          <FormTextField
            control={control}
            type="text"
            name="email"
            defaultValue={email}
          />
          <span>Password</span>
          <FormTextField
            control={control}
            type="password"
            name="password"
            defaultValue={password}
          />
          <Stack spacing={2} justifyContent="space-between" direction="row">
            <Button onClick={onClose}>Cancel</Button>
            <Button color="primary" variant="contained" type="submit">
              Update
            </Button>
          </Stack>
          {Object.keys(errors).length > 0 && (
            <FormHelperText error>The fields cannot be empty</FormHelperText>
          )}
        </Stack>
      </Box>
    </form>
  );
};

const WithRef = forwardRef((props: Props, _ref) => (
  <UpdateUserForm {...props} />
));
WithRef.displayName = 'UpdateUserFormWithRef';
export default WithRef;
