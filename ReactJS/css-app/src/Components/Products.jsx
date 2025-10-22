import React from "react";
import style from "./product.module.css";

const Products = () => {
  return (
    <div>
      <h1 id={style.head}>Mobile</h1>
      <p className={style.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p id={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptate
        ipsam hic repellat eum ullam, harum explicabo id consectetur blanditiis
        in quo maiores culpa modi dolores obcaecati delectus nesciunt incidunt!
      </p>
    </div>
  );
};

export default Products;
