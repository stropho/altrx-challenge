import { Alert } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import SnackbarMsg from '../components/snack-bar';

export function useSubmit<FValues>(
  mutateAsync: (FValues) => Promise<any>,
  handleSubmit: UseFormHandleSubmit<FValues>,
  successMsg,
  errorMsg = 'Something went wrong'
) {
  const [msg, setMsg] = useState('');
  const clearMsg = useCallback(() => setMsg(''), [setMsg]);
  const onSubmit = useMemo(() => {
    return handleSubmit(async (data) => {
      try {
        await mutateAsync(data);
      } catch {
        setMsg(errorMsg);
      }
      setMsg(successMsg);
    });
  }, [handleSubmit, setMsg, mutateAsync]);

  const Snackbar = (
    <SnackbarMsg open={!!msg} onClose={clearMsg}>
      <Alert severity="success">{msg}</Alert>
    </SnackbarMsg>
  );

  return { onSubmit, Snackbar };
}
