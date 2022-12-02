import React, {useEffect, useState} from 'react';
import {Button, Grid, TextField, Typography} from '@mui/material';

import {IModalOperationProps, IUser} from './@types';
import * as S from './styles';
import Modal from '../../../components/Modal';

function ModalOperation ({ operation, open, handleClose, handleFormData, data }: IModalOperationProps) {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (operation === 'edit' && data?.user) {
      setUser(data?.user);
    }
  }, [data]);

  const handleSubmit = (element: React.FormEvent<HTMLFormElement>) => {
    element.preventDefault();
    const target = element.target as typeof element.target & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const email = target.email.value;
    const password = target.password.value;

    const formUse = {
      firstName,
      lastName,
      email,
      password,
    };
    handleFormData(formUse);
  };
  return (
    <Modal open={open} name="Add">
      <S.Root>
        <Typography variant="h5" style={{ marginBottom: 10 }}>
          { operation === 'add' ? 'Add' : 'Edit'} Customer
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" justifyContent="space-between">
            <Grid item>
              <Grid container direction="row" style={{ marginBottom: 10 }}>
                <Grid item md={6} style={{ paddingRight: 10 }}>
                  <TextField type="text" name="firstName" value={user?.firstName} label="First Name" variant="outlined" style={{ width: '100%' }} />
                </Grid>
                <Grid item md={6} style={{ paddingLeft: 10 }}>
                  <TextField type="text" name="lastName" value={user?.lastName} label="Last Name" variant="outlined" style={{ width: '100%' }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} style={{ marginBottom: 10 }}>
              <TextField type="text" name="email" value={user?.email} label="Email" variant="outlined" style={{ width: '100%' }} />
            </Grid>
            <Grid item md={12} style={{ marginBottom: 10 }}>
              <TextField type="password" name="password" value={user?.password} label="Password" variant="outlined" style={{ width: '100%' }} />
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="right">
            <Grid item style={{ marginRight: 10 }}>
              <Button variant="contained" type="submit">Confirmar</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            </Grid>
          </Grid>
        </form>
      </S.Root>
    </Modal>
  );
}

export {ModalOperation};