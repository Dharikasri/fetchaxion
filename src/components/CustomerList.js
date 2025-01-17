import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CustomerList.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/customer/api2/customers/');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            <strong>Name:</strong> {customer.name}<br />
            <strong>Address:</strong> {customer.address}<br />
            <strong>Mobile:</strong> {customer.mobile}<br />
            <strong>Created At:</strong> {new Date(customer.created_at).toLocaleString()}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
