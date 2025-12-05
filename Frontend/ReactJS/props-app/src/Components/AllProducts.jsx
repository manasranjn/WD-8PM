import React from "react";
import Product from "./Product";

const AllProducts = ({ name, price, description }) => {
  const arr = [1, 2, 3, 4, 5];
  const [a, b, c, d, e] = arr;
  //   console.log(a, b);

  //   const obj = {
  //     name: "Laptop",
  //     price: 60000,
  //     description: "This is a Laptop",
  //   };
  //   const { name, price, description } = obj;
  //   console.log(name, price, description);

  return (
    <div>
      <Product name={name} price={price} description={description} />
    </div>
  );
};

export default AllProducts;
