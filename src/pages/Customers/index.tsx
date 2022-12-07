import React, {useEffect, useState} from 'react';
import { List } from '@mui/material';
import { useQuery } from 'react-query';

import Header from './Header';
import RowItem from './RowItem';
import Loading from '../../components/Loading';
import * as S from './styles';
import { CustomerServices } from '../../services/customer';
import { ModalOperation as ModalAdd } from './ModalOperation';
import { IUser } from './ModalOperation/@types';
import { DialogOperation as DialogDeleteSelected } from './DialogOperation';
import NoData from '../../components/NoData';

function Customers() {
  const [customers, setCustomers] = useState<IUser[] | null>();

  const [showScreen, setShowScreen] = useState(false);

  const [marked, setMarked] = useState<number[]>([]);
  const [multiplesSelected, setMultiplesSelected] = useState<boolean>(false);

  const [modalAddOpen, setModalAddOpen] = useState(false);

  const [modalDialogDeleteSelected, setModalDialogDeleteSelected] = useState(false);

  const { isLoading: isLoadingCustomers, data: dataCustomers, refetch: refetchCustomers } = useQuery(
    'CustomersData',
    () => CustomerServices.getCustomersData(),
    { refetchOnWindowFocus: false });

  useEffect(() => {
    setMultiplesSelected(marked.length > 0);
  }, [marked]);

  useEffect(() => {
    if (!isLoadingCustomers) {
      setShowScreen(false);
      setMarked([]);

      if (dataCustomers) {
        setTimeout(() => {
          setCustomers(dataCustomers);
          setShowScreen(true);
        }, 2000);
      } else {
        setTimeout(() => {
          setCustomers(null);
          setShowScreen(true);
        }, 2000);
      }
    }
  }, [dataCustomers]);

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

  const confirmResponseDeleteAll = async (confirm: boolean) => {
    if (confirm) {
      for (const id of marked) {
        await CustomerServices.deleteCustomer(id);
      }
      await refetchCustomers();
    }
    setModalDialogDeleteSelected(false);
  };

  const handleClose = () => {
    setModalAddOpen(false);
  };

  const handleFormAddData = async (id: number, user: IUser) => {
    await CustomerServices.createCustomer(user);
    await refetchCustomers();
    setModalAddOpen(false);
    setMarked([]);
  };

  const handleFormEditData = async (id: number, user: IUser) => {
    await CustomerServices.updateCustomer(id, user);
    await refetchCustomers();
    setMarked([]);
  };

  const handleRefresh = async () => {
    await refetchCustomers();
    setMarked([]);
  };

  return (
    <S.RootDiv>
      <S.MainGrid container item xs={12}>
        <S.ContainerPaper>
          <Header multiplesSelected={multiplesSelected} handleAdd={handleHeaderAdd} handleDelete={handleHeaderDelete} />
          <S.CustomDivider />
          {showScreen ?
            <List>
              {customers ? customers.map((customer, index) => (
                <RowItem
                  key={index}
                  data={{ user: customer }}
                  divider={customers?.length - 1 > index}
                  handleChange={handleMarkChange}
                  handleFormData={handleFormEditData}
                  handleRefresh={handleRefresh}
                />
              )) :
                <NoData />
              }
            </List> :

            <Loading />
          }
        </S.ContainerPaper>

        <ModalAdd
          operation="add"
          open={modalAddOpen}
          data={{ user: { id: 0, firstName: '', lastName: '', email: '', password: '' } }}
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