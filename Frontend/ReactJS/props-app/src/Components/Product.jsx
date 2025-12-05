import React from "react";

const Product = ({ name, price, description }) => {
  //   console.log(prop);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Price: {price}</h2>
      <p>
        <small>{description}</small>
      </p>
    </div>
  );
};

export default Product;
