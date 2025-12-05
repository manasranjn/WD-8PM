import React from "react";
import InlineCSS from "./Components/InlineCSS";
import StyleObject from "./Components/StyleObject";
import GlobalCSS from "./Components/GlobalCSS";
import "./style.css";
import Products from "./Components/Products";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      {/* <InlineCSS />
      <StyleObject />
      <GlobalCSS /> */}
      <Products />
    </div>
  );
};

export default App;
