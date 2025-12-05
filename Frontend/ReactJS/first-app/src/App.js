import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx"
import Contents from "./Components/Contents.jsx"
import ClassBase from "./Components/ClassBase.jsx";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>First React App</h1>
      <h1>First React App</h1>
      <Contents />
      <ClassBase />
      <Footer />
    </div>
  )
}

export default App