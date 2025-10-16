import React from "react";
import AllProducts from "./Components/AllProducts";

const App = () => {
  return (
    <div>
      <AllProducts name="Laptop" price={60000} description="This is a Laptop" />
      <AllProducts name="Mobile" price="30000" description="This is a Mobile" />
      <AllProducts name="Tablet" price="20000" description="This is a Tablet" />
      <AllProducts name="Camera" price="50000" description="This is a Camera" />
    </div>
  );
};

export default App;
