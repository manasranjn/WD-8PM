import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders/user")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {orders.map((order) => (
        <div key={order._id} className="border rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex justify-between mb-4">
            <p>
              <strong>Order Date:</strong>
              {new Date(order.orderDate).toLocaleDateString()}
            </p>

            <p className="font-medium text-indigo-600">{order.status}</p>
          </div>

          <div className="space-y-2">
            {order.items.map((item) => (
              <p key={item._id}>
                {item.bookId.title} × {item.quantity}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OrderHistory;
