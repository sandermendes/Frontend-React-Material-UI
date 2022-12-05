import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

import * as S from './styles';
import { IHeaderProps } from './@types';
import { downBreakpoint } from '../../../utils/screen';

function Header(props: IHeaderProps) {
  const downSm = downBreakpoint('sm');

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h4" style={{ padding: '40px 10px' }}>
          Customers
        </Typography>
      </Grid>
      <Grid item>
        <S.FabAdd variant={downSm ? undefined : 'extended'} color="primary" onClick={props.handleAdd}>
          <AddIcon />
          {!downSm && 'New Customer'}
        </S.FabAdd>
        <IconButton aria-label="edit" size="large" disabled={!props.multiplesSelected} onClick={props.handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Header;