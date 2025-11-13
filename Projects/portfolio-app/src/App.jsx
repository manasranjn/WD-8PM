import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default App;
