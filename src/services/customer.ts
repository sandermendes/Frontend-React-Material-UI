// import axios from 'axios';

// const API_VERSION_V1 = 'v1';

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
    return CUSTOMERS_DATA;
    // const response = await axios.get(`${API_VERSION_V1}/customers`);
    // return response.data;
  },
};