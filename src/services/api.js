import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/customer/api2/customers/',  
  timeout: 10000,  // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
    // Add any headers here if needed
  }
});

export const getAllCustomers = async () => {
  try {
    const response = await api.get('');
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

export const createCustomer = async (customerData) => {
  try {
    const response = await api.post('', customerData);
    return response.data;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

export const updateCustomer = async (customerId, customerData) => {
  try {
    const response = await api.put(`${customerId}/`, customerData);
    return response.data;
  } catch (error) {
    console.error(`Error updating customer ${customerId}:`, error);
    throw error;
  }
};

export const deleteCustomer = async (customerId) => {
  try {
    const response = await api.delete(`${customerId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting customer ${customerId}:`, error);
    throw error;
  }
};
