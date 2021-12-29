import React, { ReactElement } from 'react';
import { Snackbar } from '@mui/material';

const anchorOrigin = { vertical: 'bottom', horizontal: 'right' } as const;

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
};
function SnackbarMsg({ open, onClose, children }: Props) {
  return (
    <Snackbar anchorOrigin={anchorOrigin} open={open} onClose={onClose}>
      {children}
    </Snackbar>
  );
}

export default SnackbarMsg;
