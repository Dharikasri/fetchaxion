import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CategoryList.css';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/category/api1/categories/');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <strong>Name:</strong> {category.name}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
