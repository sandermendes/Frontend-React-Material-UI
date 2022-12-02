import React from 'react';
import {Avatar, Checkbox, Divider, Grid, IconButton, ListItemAvatar, ListItemSecondaryAction, ListItemText} from '@mui/material';
import {Create as CreateIcon, Delete as DeleteIcon} from '@mui/icons-material';

import * as S from '../styles';
import {IRowItemProps} from './@types';

function RowItem(props: IRowItemProps) {
  return (
    <>
      <S.ListItemRoot disablePadding>
        <Grid container style={{ alignItems: 'center' }}>
          <Grid item xs={1} md={1}>
            <Checkbox value={`${props.id}`} edge="start" onChange={props.handleChange} />
          </Grid>
          <Grid item xs={8} md={9}>
            <Grid container direction="row" justifyContent="start" alignItems="center">
              <Grid item xs={12} sm={2}>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
              </Grid>
              <Grid item xs={12} sm={10}>
                <ListItemText primary={`${props.firstName}  ${props.lastName}`} />
                <ListItemText secondary={props.email} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} md={1}>
            <ListItemSecondaryAction>
              <IconButton aria-label="edit" size="large" onClick={() => props.handleEditClick(props.id)}>
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete" size="large" onClick={() => props.handleDeleteClick(props.id)}>
                <DeleteIcon color="secondary" />
              </IconButton>
            </ListItemSecondaryAction>
          </Grid>
        </Grid>
      </S.ListItemRoot>
      {props.divider ? <Divider /> : ''}
    </>
  );
}

export default RowItem;
