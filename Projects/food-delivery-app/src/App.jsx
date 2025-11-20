import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import Help from "./Screens/Help";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
