import React, {useEffect, useState} from 'react';
import {Button, Grid, TextField, Typography} from '@mui/material';

import {IModalOperationProps, IUser} from './@types';
import * as S from './styles';
import Modal from '../../../components/Modal';

const userInitial = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function ModalOperation ({ operation, open, handleClose, handleFormData, data }: IModalOperationProps) {
  const [user, setUser] = useState<IUser>({ ...data.user, password: '' });

  useEffect(() => {
    if (operation === 'edit' && data.user) {
      setUser(data.user);
    }
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

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

    const formUser = {
      id: operation === 'add' ? 0 : user.id,
      firstName,
      lastName,
      email,
      password,
    };

    handleFormData(formUser.id, formUser);
    setUser(userInitial);
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
                  <TextField
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    variant="outlined"
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item md={6} style={{ paddingLeft: 10 }}>
                  <TextField
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    variant="outlined"
                    style={{ width: '100%' }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} style={{ marginBottom: 10 }}>
              <TextField
                type="text"
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
                variant="outlined"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item md={12} style={{ marginBottom: 10 }}>
              <TextField
                type="password"
                label="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
                variant="outlined"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="right">
            <Grid item style={{ marginRight: 10 }}>
              <Button variant="contained" type="submit">Confirmar</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={(event) => {
                setUser(userInitial);
                handleClose(event);
              }}>Cancelar</Button>
            </Grid>
          </Grid>
        </form>
      </S.Root>
    </Modal>
  );
}

export {ModalOperation};