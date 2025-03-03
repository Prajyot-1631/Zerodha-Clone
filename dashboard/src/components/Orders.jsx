import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allOrders").then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      <div className="no-orders">
        {orders.length === 0 ? (
          <div>
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        ) : (
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price}</td>
                    <td
                      style={{ color: order.mode === "BUY" ? "green" : "red" }}
                    >
                      {order.mode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
