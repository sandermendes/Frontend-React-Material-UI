import React, {useState} from 'react';
import {Avatar, Checkbox, Divider, Grid, IconButton, ListItemAvatar, ListItemSecondaryAction, ListItemText} from '@mui/material';
import {Create as CreateIcon, Delete as DeleteIcon} from '@mui/icons-material';

import * as S from '../styles';
import { IRowItemProps } from './@types';
import { DialogOperation as DialogDeleteItem } from '../DialogOperation';
import { ModalOperation as ModalEdit } from '../ModalOperation';
import { CustomerServices } from '../../../services/customer';
import { IUser } from '../ModalOperation/@types';

function RowItem(props: IRowItemProps) {
  const { data } = props;

  const [selectedUser, setSelectedUser] = useState<IUser>(data.user);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDialogDeleteItem, setModalDialogDeleteItem] = useState(false);

  const handleEditItemClick = async (id: number) => {
    const customerData = await CustomerServices.getCustomerData(id);
    setSelectedUser(customerData);
  };

  const handleClose = () => {
    setModalEditOpen(false);
  };

  const dialogDeleteItemResponse = async (confirm: boolean, id: number) => {
    if (confirm) {
      await CustomerServices.deleteCustomer(id);
    }
  };

  return (
    <>
      <S.ListItemRoot disablePadding>
        <Grid container style={{ alignItems: 'center' }}>
          <Grid item xs={1} md={1}>
            <Checkbox value={`${selectedUser.id}`} edge="start" onChange={props.handleChange} />
          </Grid>
          <Grid item xs={8} md={9}>
            <Grid container direction="row" justifyContent="start" alignItems="center">
              <Grid item xs={12} sm={2}>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
              </Grid>
              <Grid item xs={12} sm={10}>
                <ListItemText primary={`${selectedUser.firstName}  ${selectedUser.lastName}`} />
                <ListItemText secondary={selectedUser.email} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} md={1}>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="edit"
                size="large"
                onClick={async () => {
                  await handleEditItemClick(selectedUser.id);
                  setModalEditOpen(true);
                }}>
                <CreateIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => setModalDialogDeleteItem(true)}>
                <DeleteIcon color="secondary" />
              </IconButton>
            </ListItemSecondaryAction>
          </Grid>
        </Grid>
      </S.ListItemRoot>
      {props.divider ? <Divider /> : ''}

      <ModalEdit
        operation="edit"
        open={modalEditOpen}
        data={{ user: selectedUser }}
        handleClose={handleClose}
        handleFormData={(id, formData) => {
          props.handleFormData(id, formData);
          setModalEditOpen(false);
        }} />

      <DialogDeleteItem
        open={modalDialogDeleteItem}
        text={`Are you sure to delete customer id: ${selectedUser.id} - Name: ${selectedUser.firstName}?`}
        dialogResponse={async (confirm) => {
          await dialogDeleteItemResponse(confirm, selectedUser.id ?? 0);
          props.handleRefresh();
          setModalDialogDeleteItem(false);
        }}/>
    </>
  );
}

export default RowItem;
