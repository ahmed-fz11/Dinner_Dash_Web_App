import React, { useState, useEffect } from "react";
import UserNavbar from "../components/UserNavbar";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Cart = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({ items: [] });
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

    function addAuth(){
        const token = JSON.parse(localStorage.getItem("token"));
        const headers = {
            authorization:token
        }
        return headers;
    }

  const handleCheckout = ()=>{

    const order = {
        user:user.userid,
        totalPrice:total,
        items:cart.items
    }
    // const token = JSON.parse(localSt
    
    const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    Authorization: `${token}`
  };


    axios.post('http://localhost:3000/user/orders',order,{headers})
    .then(response=>{
        localStorage.removeItem('cart')
        navigate('/')
    })
    .catch(error=>{
        console.log(error)
    })
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {
      items: [],
    };
    setCart(storedCart);
    calculateTotal(storedCart);
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleQuantityIncrease = (itemId) => {
    const updatedCart = { ...cart };
    const itemToUpdate = updatedCart.items.find((item) => item.item === itemId);
    if (itemToUpdate) {
      itemToUpdate.quantity += 1;
      itemToUpdate.subtotal += parseInt(itemToUpdate.price);
      setCart(updatedCart);
      calculateTotal(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleRemoveItemClick = (itemId) => {
    const updatedCart = { ...cart };
    updatedCart.items = updatedCart.items.filter(
      (item) => item.item !== itemId
    );
    setCart(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = (cartData) => {
    const newTotal = cartData.items.reduce(
      (total, item) => total + parseInt(item.subtotal),
      0
    );
    // console.log("newtotal: ",newTotal)
    setTotal(newTotal);
    // console.log("total: ",total)
  };

  return (
    <div className="vh-100 vw-100">
      <UserNavbar />
      <div className="cart-container container">
        <h2>Your Cart</h2>
        {cart.items.length > 0 ? (
          <div>
            {cart.items.map((item) => (
              <div key={item.item} className="card cart-item">
                <div className="row no-gutters">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text">Quantity: {item.quantity}</p>
                      <p className="card-text">Subtotal: ${item.subtotal}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleQuantityIncrease(item.item)}
                      >
                        Increase Quantity
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemoveItemClick(item.item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="card card-item">
              <h3>Total: ${total}</h3>
            </div>
            {user && (cart.items.length > 0) && (
                <button className="btn btn-danger" onClick={handleCheckout}>Checkout</button>
            )}
          </div>
        ) : (
          <p>Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
