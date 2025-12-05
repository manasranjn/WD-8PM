import React from "react";
import contentImg1 from "../assets/content1.jpg";
import contentImg2 from "../assets/content2.jpg";
import contentImg3 from "../assets/content3.jpg";

const Projects = () => {
  return (
    <div id="project">
      <h2 className="text-center font-semibold text-2xl lg:text-4xl ">
        Projects
      </h2>
      <div className="flex justify-center mt-2">
        <span className="border-2 border-amber-400 w-20 inline-block rounded-2xl"></span>
      </div>
      <div className="px-10 md:px-20 xl:px-30 mt-10 flex flex-col items-center justify-center">
        <Content1 img={contentImg1} />
        <Content2 img={contentImg2} />
        <Content1 img={contentImg3} />
      </div>
    </div>
  );
};

export default Projects;

const Content1 = ({ img }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-start mb-10 bg-white rounded-2xl shadow-lg lg:h-[450px] w-full lg:w-3xl xl:w-5xl">
      <div className="lg:w-1/2 flex flex-col justify-center h-[300px] md:h-[450px] px-6 py-8">
        <h3 className="text-3xl lg:text-5xl font-bold mb-6">
          Hello, my name is Madelyn Torff
        </h3>
        <p className="text-gray-500 font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at
          necessitatibus fugiat maiores doloremque, repudiandae a blanditiis
          facilis iste rem iure commodi consectetur sunt. Ab eligendi debitis
          et. Iure, omnis.
        </p>

        <div>
          <button className="px-4 py-1 rounded-full border-2 outline-none cursor-pointer font-semibold">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={img}
          alt="hero section"
          className="h-80 md:h-[450px] w-full object-cover object-top rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl"
        />
      </div>
    </div>
  );
};

const Content2 = ({ img }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-start mb-10 bg-white rounded-2xl shadow-lg lg:h-[450px] w-full lg:w-3xl xl:w-5xl">
      <div className="w-full lg:w-1/2">
        <img
          src={img}
          alt="hero section"
          className=" h-[450px] w-full object-cover object-top rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center h-[450px] px-6 py-8">
        <h3 className="text-3xl lg:text-5xl font-bold mb-6">
          Hello, my name is Madelyn Torff
        </h3>
        <p className="text-gray-500 font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at
          necessitatibus fugiat maiores doloremque, repudiandae a blanditiis
          facilis iste rem iure commodi consectetur sunt. Ab eligendi debitis
          et. Iure, omnis.
        </p>

        <div>
          <button className="px-4 py-1 rounded-full border-2 outline-none cursor-pointer font-semibold">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};
