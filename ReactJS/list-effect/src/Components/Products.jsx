import React from "react";

const Products = () => {
  const allProducts = [
    {
      name: "Laptop",
      price: 60000,
      description: "This is a Laptop",
    },
    {
      name: "Mobile",
      price: 30000,
      description: "This is a Mobile",
    },
    {
      name: "Tablet",
      price: 20000,
      description: "This is a Tablet",
    },
    {
      name: "Camera",
      price: 50000,
      description: "This is a Camera",
    },
  ];

  //   const allProducts = ["Laptop", "Mobile", "Tablet", "Camera"];
  return (
    <div>
      {/* {allProducts.map((product) => {
        return (
          <div>
            <h1>{product.name}</h1>
          </div>
        );
      })} */}

      {allProducts.map((product) => (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
