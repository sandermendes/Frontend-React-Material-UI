import axios from 'axios';

import {IUser} from '../pages/Customers/ModalOperation/@types';
import {API_VERSION_V1} from './constants';

const CUSTOMERS_DATA = [
  {
    id: 16,
    firstName: 'Sander',
    lastName: 'Mendes',
    email: 'sandermendes@gmail.com'
  },
  {
    id: 17,
    firstName: 'Sander',
    lastName: 'Mendes',
    email: 'sandermendes@gmail.com'
  },
  {
    id: 15,
    firstName: 'Sander-updated',
    lastName: 'Mendes-updated',
    email: 'sandermendes-updated@gmail.com'
  }
];

export const CustomerServices = {
  getCustomersData: async () => {
    // return CUSTOMERS_DATA;
    const response = await axios.get(`${API_VERSION_V1}/customers`);
    console.log('getCustomersData - response', response);
    return response.data;
  },

  getCustomerData: async (id: number) => {
    // return CUSTOMERS_DATA.filter((customer) => customer.id === id)[0];
    const response = await axios.get(`${API_VERSION_V1}/customers/${id}`);
    console.log('getCustomerData - response', response);
    return response.data;
  },

  updateCustomer: async (id: number, user: IUser) => {
    // console.log('updateCustomer - user', user);
    // return CUSTOMERS_DATA.filter((customer) => {
    //   if (customer.id === id) {
    //     return user;
    //   }
    // })[0];
    const response = await axios.put(`${API_VERSION_V1}/customers/${id}`, user);
    return response.data;
  },

  deleteCustomer: async (id: number) => {
    // return CUSTOMERS_DATA.filter((customer) => customer.id !== id)[0];
    const response = await axios.delete(`${API_VERSION_V1}/customers/${id}`);
    return response.data;
  },
};