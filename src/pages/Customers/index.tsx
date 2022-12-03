import React, {useEffect, useState} from 'react';
import { List } from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';
import {useQuery} from 'react-query';

import * as S from './styles';
import { CustomerServices } from '../../services/customer';
import Header from './Header';
import RowItem from './RowItem';
import Loading from '../../components/Loading';
import { ModalOperation as ModalAdd } from './ModalOperation';
import { IUser } from './ModalOperation/@types';
import { DialogOperation as DialogDeleteSelected } from './DialogOperation';

function Customers() {
  const [customers, setCustomers] = useState<IUser[] | null>();

  const [showScreen, setShowScreen] = useState(false);

  const [marked, setMarked] = useState<number[]>([]);
  const [multiplesSelected, setMultiplesSelected] = useState<boolean>(false);

  const [modalAddOpen, setModalAddOpen] = useState(false);

  const [modalDialogDeleteSelected, setModalDialogDeleteSelected] = useState(false);

  const { isLoading: isLoadingCustomers, data: dataCustomers } = useQuery('CustomersData', () => CustomerServices.getCustomersData());

  useEffect(() => {
    setMultiplesSelected(marked.length > 0);
  }, [marked]);

  useEffect(() => {
    if (!isLoadingCustomers) {
      setTimeout(() => {
        setCustomers(dataCustomers);
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

  const handleHeaderAdd = () => {
    setModalAddOpen(true);
  };

  const handleHeaderDelete = () => {
    setModalDialogDeleteSelected(true);
  };

  const confirmResponseDeleteAll = (confirm: boolean) => {
    console.log('confirmResponseDeleteAll - confirm', confirm);
    setModalDialogDeleteSelected(false);
    // if (confirm) {
    // }
  };

  const handleClose = () => {
    setModalAddOpen(false);
    // setSelectedUser(null);
    // setModalEditOpen(false);
  };

  const handleFormAddData = (id: number, user: IUser) => {
    console.log('handleFormAddData - user', user);
  };

  const handleFormEditData = async (id: number, user: IUser) => {
    const customerUpdate = await CustomerServices.updateCustomer(id, user);
    console.log('Customers - handleFormEditData - customerUpdate', customerUpdate);
    console.log('Customers - handleFormEditData - id', id);
    console.log('Customers - handleFormEditData - user', user);
  };

  return (
    <S.RootDiv>
      <S.MainGrid container item xs={12}>
        <S.ContainerPaper>
          <Header multiplesSelected={multiplesSelected} handleChange={handleHeaderDelete} />
          <S.CustomDivider />
          {showScreen ?
            <List>
              {customers?.map((customer, index) => (
                <RowItem
                  key={index}
                  data={{ user: customer }}
                  divider={customers?.length - 1 > index}
                  handleChange={handleMarkChange}
                  handleFormData={handleFormEditData}
                />
              ))}
            </List> : <Loading />
          }
          <S.FabAdd color="primary" onClick={handleHeaderAdd}>
            <AddIcon />
          </S.FabAdd>
        </S.ContainerPaper>
        <ModalAdd
          operation="add"
          open={modalAddOpen}
          data={{ user: { id: 0, firstName: '', lastName: '', email: '' } }}
          handleClose={handleClose}
          handleFormData={handleFormAddData}
        />
        <DialogDeleteSelected
          open={modalDialogDeleteSelected}
          text="Do you want delete all selected customer?"
          dialogResponse={confirmResponseDeleteAll} />
      </S.MainGrid>
    </S.RootDiv>
  );
}

export default Customers;