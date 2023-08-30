import { React, useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";

const UserOrders = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    if (currentUser) {
      setUser(currentUser);
      fetchUserOrders(currentUser.userid);
    }
  }, []);

  const fetchUserOrders = (userid) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
      Authorization: `${token}`,
    };
    const postData = { 
        headers: {
            // Add Auth Here! 
            Authorization: `${token}`
        },
        params: {
        userid: userid
    } };
    console.log("postData: ",postData)

    axios
      .get("http://localhost:3000/user/orders", postData)
      .then((response) => {
        setOrders(response.data);
        // console.log("success fetching",response)
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  };

  return (
    <div className="min-vw-100 min-vh-100">
    <UserNavbar/>
    <div className="container mt-5">
      <h1 className="mb-4">Order History</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id} className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Order ID: {order._id}</h5>
              <p className="mb-0">Total Price: ${order.totalPrice}</p>
              <p className="mb-0">Status: {order.status}</p>
              <p className="mb-0">
                Date: {new Date(order.timestamp).toLocaleString()}
              </p>
            </div>
            <div className="card-body">
              <h6 className="mb-3">Items:</h6>
              {order.items.map((item) => (
                <div key={item._id} className="card mb-2">
                  <div className="card-body">
                    <h6 className="mb-0">{item.title}</h6>
                    <p className="mb-0">Quantity: {item.quantity}</p>
                    <p className="mb-0">Subtotal: ${item.subtotal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
    </div>
  );
};

export default UserOrders;