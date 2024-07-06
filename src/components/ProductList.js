import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ProductList.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/product/api4/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>Product ID:</strong> {product.product_id}<br />
            <strong>Name:</strong> {product.name}<br />
            <strong>Description:</strong> {product.description}<br />
            <strong>Price:</strong> {product.price}<br />
            <strong>Expiry Date:</strong> {product.expiry_date}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
