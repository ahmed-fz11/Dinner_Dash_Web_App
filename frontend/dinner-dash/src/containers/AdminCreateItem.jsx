import React, { useState } from 'react';
import UserNavbar from '../components/UserNavbar';
import axios from 'axios';

const AdminCreateItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemPhotoUrl, setItemPhotoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemName || !itemDescription || !itemPrice) {
      setErrorMessage('All fields except Photo URL are required.');
      return;
    }

    const newItem = {
      title: itemName,
      description: itemDescription,
      price: parseFloat(itemPrice),
      photoURL: itemPhotoUrl || 'https://i.ibb.co/8438Xbj/food-items-vector-609544.jpg', 
    };

    axios
      .post('http://localhost:3000/admin/items', newItem)
      .then((response) => {
        console.log('Item created:', response.data);
        // Clear the form after successful submission
        setItemName('');
        setItemDescription('');
        setItemPrice('');
        setItemPhotoUrl('');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error creating item:', error);
        setErrorMessage('An error occurred while creating the item.');
      });
  };

  return (
    <div className='min-vw-100'>
      <UserNavbar />
      <div className='container mt-4'>
        <h1>Create New Item</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='itemName' className='form-label'>
              Name *
            </label>
            <input
              type='text'
              className='form-control'
              id='itemName'
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='itemDescription' className='form-label'>
              Description *
            </label>
            <textarea
              className='form-control'
              id='itemDescription'
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor='itemPrice' className='form-label'>
              Price *
            </label>
            <input
              type='number'
              step='0.01'
              className='form-control'
              id='itemPrice'
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='itemPhotoUrl' className='form-label'>
              Photo URL
            </label>
            <input
              type='text'
              className='form-control'
              id='itemPhotoUrl'
              value={itemPhotoUrl}
              onChange={(e) => setItemPhotoUrl(e.target.value)}
            />
          </div>
          <p className='text-danger'>{errorMessage}</p>
          <button type='submit' className='btn btn-primary'>
            Create Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateItem;
