import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";

const AdminOrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("all");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("http://localhost:3000/admin/orders")
      .then((response) => {
        const ordersWithUserInfo = response.data.map((order) => ({
          ...order,
          username: null,
          email: null,
        }));
        setOrders(ordersWithUserInfo);
        addUserInfo(ordersWithUserInfo);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  };

  const addUserInfo = (ordersWithUserInfo) => {
    const requests = ordersWithUserInfo.map((order) =>
      axios.get(`http://localhost:3000/admin/userinfo/${order.user}`)
    );

    axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          responses.forEach((response, index) => {
            const { user } = ordersWithUserInfo[index];
            const userInfo = response.data;
            const updatedOrder = {
              ...ordersWithUserInfo[index],
              username: userInfo.fullname,
              email: userInfo.email,
            };
            setOrders((prevOrders) =>
              prevOrders.map((order) =>
                order._id === updatedOrder._id ? updatedOrder : order
              )
            );
          });
        })
      )
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  };
  const handleStatusChange = (orderId, newStatus) => {
    axios
      .put(`http://localhost:3000/admin/orders/${orderId}/${newStatus}`)
      .then((response) => {
        // Update the order status locally
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      })
      .catch((error) => {
        console.error("Error changing order status:", error);
      });
  };

  const handleCancelOrder = (orderId) => {
    handleStatusChange(orderId, "cancelled");
  };

  const handleMarkAsPaid = (orderId) => {
    handleStatusChange(orderId, "paid");
  };

  const handleMarkAsCompleted = (orderId) => {
    handleStatusChange(orderId, "completed");
  };
  const handleFilterChange = (event) => {
    setFilteredStatus(event.target.value);
  };

  const filteredOrders =
    filteredStatus === "all"
      ? orders
      : orders.filter((order) => order.status === filteredStatus); 
  return (
    <div className="min-vw-100 min-vh-100">
      <UserNavbar />
      <div className="container mt-4">
        <h1 className="mb-4">Order Dashboard</h1>
        <div className="mb-3">
          <label htmlFor="filterStatus" className="form-label">
            Filter by Status:
          </label>
          <select
            id="filterStatus"
            className="form-select"
            value={filteredStatus}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="ordered">Ordered</option>
            <option value="paid">Paid</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order._id} className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Order ID: {order._id}</h5>
                <p className="mb-0">Username: {order.username}</p>
                <p className="mb-0">Email: {order.email}</p>
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
                      <p className="mb-0">Price: ${item.price}</p>
                      <p className="mb-0">Subtotal: ${item.subtotal}</p>
                    </div>
                  </div>
                ))}
                {order.status === "ordered" && (
                  <button
                    className="btn btn-danger mt-3 m-2"
                    onClick={() => handleCancelOrder(order._id)}
                  >
                    Cancel Order
                  </button>
                )}
                {order.status === "ordered" && (
                  <button
                    className="btn btn-success mt-3 m-2"
                    onClick={() => handleMarkAsPaid(order._id)}
                  >
                    Mark as Paid
                  </button>
                )}
                {order.status === "paid" && (
                  <button
                    className="btn btn-success mt-3 m-2"
                    onClick={() => handleMarkAsCompleted(order._id)}
                  >
                    Mark as Completed
                  </button>
                )}
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

export default AdminOrderDashboard;
