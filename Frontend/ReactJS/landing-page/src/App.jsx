import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Clients from "./Components/Clients";
import Community from "./Components/Community";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Clients />
      <Community />
    </div>
  );
};

export default App;
