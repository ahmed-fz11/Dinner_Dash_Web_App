import React, { useState, useEffect } from "react";
import UserNavbar from "../components/UserNavbar";

const Cart = () => {
  const [cart, setCart] = useState({ items: [] });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {
      items: [],
    };
    setCart(storedCart);
    calculateTotal(storedCart);
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
          </div>
        ) : (
          <p>Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
