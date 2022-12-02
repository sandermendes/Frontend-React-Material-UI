import React, {useEffect, useState} from 'react';
import { List } from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';
import {useQuery} from 'react-query';

import * as S from './styles';
import {CustomerServices} from '../../services/customer';
import Header from './Header';
import RowItem from './RowItem';
import Loading from '../../components/Loading';
import {ModalOperation as ModalAdd, ModalOperation as ModalEdit} from './ModalOperation';
import {IUser} from './ModalOperation/@types';
import Dialog from '../../components/Dialog';

function Customers() {
  const [showScreen, setShowScreen] = useState(false);

  const [marked, setMarked] = useState<number[]>([]);
  const [multiplesSelected, setMultiplesSelected] = useState<boolean>(false);

  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState<IUser>();

  const { isLoading: isLoadingCustomers, data: dataCustomers } = useQuery('CustomersData', () => CustomerServices.getCustomersData());

  useEffect(() => {
    setMultiplesSelected(marked.length > 0);
  }, [marked]);

  useEffect(() => {
    if (!isLoadingCustomers) {
      setTimeout(() => {
        setShowScreen(true);
      }, 2000);
    }
  }, [isLoadingCustomers]);

  const handleMarkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked)
      setMarked([...marked, +event.target.value]);
    else
      setMarked([...marked.filter((mark) => (mark !== +event.target.value))]);
  };

  useEffect(() => {
    if (selectedUser) {
      setModalEditOpen(true);
    }
  }, [selectedUser]);

  const handleEditItemClick = async (id: number) => {
    const customer = await CustomerServices.getCustomerData(id);
    setSelectedUser(customer);
  };

  const handleDeleteItemClick = (id: number) => {
    console.log('handleDeleteItemClick - id', id);
  };

  const handleHeaderDelete = () => {
    console.log('handleHeaderDelete');
  };

  const handleAdd = () => {
    setModalAddOpen(!modalAddOpen);
  };

  const handleClose = () => {
    setModalAddOpen(false);
    setModalEditOpen(false);
  };

  const handleFormAddData = (user: IUser) => {
    console.log('user', user);
  };

  const handleFormEditData = (user: IUser) => {
    console.log('user', user);
  };

  return (
    <S.RootDiv>
      <S.MainGrid container item xs={12}>
        <S.ContainerPaper>
          <Header multiplesSelected={multiplesSelected} handleChange={handleHeaderDelete} />
          <S.CustomDivider />
          {showScreen ?
            <List>
              {dataCustomers?.map((customer, index) => (
                <RowItem
                  key={index}
                  { ...customer }
                  divider={dataCustomers?.length - 1 > index}
                  handleChange={handleMarkChange}
                  handleEditClick={handleEditItemClick}
                  handleDeleteClick={handleDeleteItemClick}
                />
              ))}
            </List> : <Loading />
          }
          <S.FabAdd color="primary" onClick={handleAdd}>
            <AddIcon />
          </S.FabAdd>
        </S.ContainerPaper>
        <ModalAdd operation="add" open={modalAddOpen} handleClose={handleClose} handleFormData={handleFormAddData} />
        <ModalEdit operation="edit" open={modalEditOpen} data={{ user: selectedUser }} handleClose={handleClose} handleFormData={handleFormEditData} />
        <Dialog text={`Do you want delete customer: ID ${0} - Name: ${'Name'}`} />
      </S.MainGrid>
    </S.RootDiv>
  );
}

export default Customers;