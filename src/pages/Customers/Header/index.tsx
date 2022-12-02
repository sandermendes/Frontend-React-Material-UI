import React from 'react';
import {Grid, IconButton, Typography} from '@mui/material';
import {Delete as DeleteIcon} from '@mui/icons-material';

import {IHeaderProps} from './@types';

function Header(props: IHeaderProps) {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h4" style={{ padding: '40px 10px' }}>
          Customers
        </Typography>
      </Grid>
      <Grid item>
        <IconButton aria-label="edit" size="large" disabled={!props.multiplesSelected} onClick={props.handleChange}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Header;