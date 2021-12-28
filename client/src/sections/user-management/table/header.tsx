import React from 'react';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';

const UserTableHeader = () => {
  const theme = useTheme();
  const colors = { bgcolor: theme.palette.primary.main, color: 'white' };
  return (
    <Grid container spacing={2} columns={19}>
      <Grid item xs={5} />
      <Grid item xs={3} {...colors}>
        Name
      </Grid>
      <Grid item xs={5} {...colors}>
        Email
      </Grid>
      <Grid item xs={1} {...colors} />
      <Grid item xs={5} />
    </Grid>
  );
};

export default UserTableHeader;
