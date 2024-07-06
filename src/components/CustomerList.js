import React, { useState, useEffect } from 'react';
import { getAllCustomers } from '../services/api'; 
import '../styles/CustomerList.css';


const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllCustomers();
        setCustomers(data); 
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
            <hr /> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
