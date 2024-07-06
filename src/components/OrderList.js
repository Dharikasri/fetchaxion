import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/order/api3/orders/');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order.order_no}>
            <strong>Order No:</strong> {order.order_no}<br />
            <strong>Order Date:</strong> {new Date(order.order_date).toLocaleString()}<br />
            <strong>Customer:</strong> {order.customer.name}<br />
            <strong>Products:</strong>
            <ul>
              {order.products.map(product => (
                <li key={product.product_name}>
                  {product.product_name} (x{product.quantity})
                </li>
              ))}
            </ul>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
