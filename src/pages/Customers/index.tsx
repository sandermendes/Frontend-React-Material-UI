import React, {useEffect, useState} from 'react';
import { List } from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';
import {useQuery} from 'react-query';

import * as S from './styles';
import {CustomerServices} from '../../services/customer';
import Header from './Header';
import RowItem from './RowItem';
import Loading from '../../components/Loading';
import {ModalOperation as ModalAdd} from './ModalOperation';
import {IUser} from './ModalOperation/@types';

function Customers() {
  const [showScreen, setShowScreen] = useState(false);
  const [marked, setMarked] = useState<number[]>([]);
  const [multiplesSelected, setMultiplesSelected] = useState<boolean>(false);
  const [modalAddOpen, setModalAddOpen] = useState(false);

  const { isLoading: isLoadingCustomers, data } = useQuery('CustomersData', () => CustomerServices.getCustomersData());

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked)
      setMarked([...marked, +event.target.value]);
    else
      setMarked([...marked.filter((mark) => (mark !== +event.target.value))]);
  };

  const handleHeaderDelete = () => {
    console.log('handleHeaderDelete');
  };

  const handleAdd = () => {
    setModalAddOpen(!modalAddOpen);
  };

  const handleClose = () => {
    setModalAddOpen(false);
  };

  const handleFormData = (user: IUser) => {
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
              {data?.map((customer, index) => (
                <RowItem key={index} { ...customer } divider={data?.length - 1 > index} handleChange={handleChange} />
              ))}
            </List> : <Loading />
          }
          <S.FabAdd color="primary" onClick={handleAdd}>
            <AddIcon />
          </S.FabAdd>
        </S.ContainerPaper>
        <ModalAdd open={modalAddOpen} handleClose={handleClose} handleFormData={handleFormData} />
      </S.MainGrid>
    </S.RootDiv>
  );
}

export default Customers;