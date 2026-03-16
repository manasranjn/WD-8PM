import React, { useState } from "react";
import axios from "axios";

const Order = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const placeOrder = () => {
    axios
      .post("http://localhost:5000/api/orders", {
        address,
        phone,
      })
      .then(() => alert("Order placed successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Shipping Address"
            className="border w-full px-4 py-3 rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border w-full px-4 py-3 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            onClick={placeOrder}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition w-full"
          >
            Place Order
          </button>
        </div>
      </section>
    </>
  );
};

export default Order;
