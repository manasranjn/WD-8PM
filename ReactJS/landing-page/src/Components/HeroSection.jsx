import React from "react";
import img from "../assets/heroImg.png";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="left-content">
        <h2>
          Lessons and insights <span>from 8 years</span>
        </h2>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button>Register</button>
      </div>
      <div className="right-content">
        <img src={img} alt="Hero " />
      </div>
    </div>
  );
};

export default HeroSection;
