import React from "react";
import heroImg from "../assets/heroImg.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-start px-6 md:px-20 py-3 mb-20"
    >
      <div className="lg:w-1/2">
        <h6 className="text-yellow-400 font-semibold uppercase">
          UI/UX Designer
        </h6>
        <h3 className="text-3xl lg:text-5xl font-bold mb-6">
          Hello, my name is Madelyn Torff
        </h3>
        <p className="text-gray-500 font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at
          necessitatibus fugiat maiores doloremque, repudiandae a blanditiis
          facilis iste rem iure commodi consectetur sunt. Ab eligendi debitis
          et. Iure, omnis.
        </p>
        <div className="flex justify-start gap-4">
          <button className="px-4 py-1 rounded-lg border-none outline-none cursor-pointer bg-yellow-400 font-semibold">
            Projects
          </button>
          <button className="px-4 py-1 rounded-lg border-2 outline-none cursor-pointer font-semibold">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={heroImg} alt="hero section" />
      </div>
    </div>
  );
};

export default Hero;
