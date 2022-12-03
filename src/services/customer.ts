import axios from 'axios';

import {IUser} from '../pages/Customers/ModalOperation/@types';
import {API_VERSION_V1} from './constants';

export const CustomerServices = {
  getCustomersData: async () => {
    const response = await axios.get(`${API_VERSION_V1}/customers`);
    return response.data;
  },

  getCustomerData: async (id: number) => {
    const response = await axios.get(`${API_VERSION_V1}/customers/${id}`);
    return response.data;
  },

  createCustomer: async (user: IUser) => {
    const response = await axios.post(`${API_VERSION_V1}/customers`, user);
    return response.data;
  },

  updateCustomer: async (id: number, user: IUser) => {
    const response = await axios.put(`${API_VERSION_V1}/customers/${id}`, user);
    return response.data;
  },

  deleteCustomer: async (id: number) => {
    const response = await axios.delete(`${API_VERSION_V1}/customers/${id}`);
    return response.data;
  },
};