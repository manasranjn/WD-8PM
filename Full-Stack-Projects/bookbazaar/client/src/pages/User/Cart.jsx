import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios
      .get("http://localhost:5000/api/cart")
      .then((res) => setCart(res.data.items))
      .catch((err) => console.log(err));
  };

  const removeItem = (id) => {
    axios
      .delete(`http://localhost:5000/api/cart/remove/${id}`)
      .then(() => fetchCart());
  };

  const updateQuantity = (id, qty) => {
    axios
      .put(`http://localhost:5000/api/cart/update/${id}`, { quantity: qty })
      .then(() => fetchCart());
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.bookId.price * item.quantity,
    0,
  );

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center justify-between border rounded-lg p-4 shadow-sm"
              >
                {/* Book Info */}

                <div className="flex items-center gap-6">
                  <img
                    src={item.bookId.image}
                    alt=""
                    className="w-20 h-28 object-cover rounded"
                  />

                  <div>
                    <h3 className="font-semibold">{item.bookId.title}</h3>

                    <p className="text-gray-500">₹ {item.bookId.price}</p>
                  </div>
                </div>

                {/* Quantity */}

                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item._id, e.target.value)}
                  className="border px-3 py-2 w-20 rounded"
                />

                {/* Remove */}

                <button
                  onClick={() => removeItem(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}

            <div className="text-right mt-10">
              <h2 className="text-2xl font-bold mb-4">Total: ₹ {totalPrice}</h2>

              <a
                href="/order"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
