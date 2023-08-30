import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemsGrid.css'

const ItemsGrid = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/items/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch all items initially
    axios.get('http://localhost:3000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleCategoryClick = categoryId => {
    // Fetch items by category when a category button is clicked
    if(categoryId===null){
      axios.get('http://localhost:3000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
      setSelectedCategory(null);
      return;
    }
    axios.get(`http://localhost:3000/items/category/${categoryId}`)
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items by category:', error));
    
    setSelectedCategory(categoryId);
  };

  const handleAddToCartClick = (itemId, price,title) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };
  
    // Check if the item already exists in the cart
    const existingItem = cart.items.find(item => item.item === itemId);
  
    if (existingItem) {
      // Item already exists, increase quantity and update subtotal
      existingItem.quantity += 1;
      existingItem.subtotal += price;
    } else {
      // Item doesn't exist, add it to the cart
      cart.items.push({
        item: itemId,
        quantity: 1,
        subtotal: price,
        title:title,
        price:price,
      });
    }
  
    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  

  return (
    <div className='d-flex flex-column border con1'>
      <div className="categories-button-container d-flex">
        <button className={`btn btn-primary m-1 ${selectedCategory === null ? 'active' : ''}`} onClick={() => handleCategoryClick(null)}>All</button>
        {categories.map(category => (
          <button
            key={category._id}
            className={`btn btn-primary m-1 ${selectedCategory === category._id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category._id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="items-container">
        <div className="card-grid">
          {items.map(item => (
            <div key={item._id} className="card">
              <img src={item.photoURL} alt={item.title} className='img'/>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button className="btn btn-success" onClick={()=>handleAddToCartClick(item._id,item.price,item.title)}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsGrid;
