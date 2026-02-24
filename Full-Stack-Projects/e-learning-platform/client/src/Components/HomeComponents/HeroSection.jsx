import React from "react";
import { FaPlay } from "react-icons/fa";
import images from "../../assets/assets";

const HeroSection = () => {
  return (
    <div className="h-[90vh] flex flex-col md:flex-row justify-between items-center bg-[#15beb3] p-4 md:p-10 xl:p-20 py-2">
      <div className="md:w-1/2">
        <h3 className="text-white text-2xl md:text-3xl xl:text-5xl font-bold">
          <span className="text-yellow-600">Studying</span> Online is now much
          easier
        </h3>
        <p className="text-white lg:w-2/3 my-8">
          TOTC is an interesting platform that will teach you in more an
          interactive way
        </p>
        <div className="flex gap-3 x:gap-6 items-center">
          <button className="bg-[#ffffff58] px-3 lg:px-5 py-2 rounded-full text-xs lg:text-base font-bold text-white">
            Join for free
          </button>
          <div className="flex gap-3 items-center">
            <span className="bg-white p-2 rounded-full text-blue-400">
              <FaPlay className="lg:text-3xl" />
            </span>
            <span>Watch how it works</span>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2">
        <img
          src={images.heroImg2}
          alt=""
          className="md:absolute w-43 md:w-96 lg:w-lg top-14 -z-10 md:z-0"
        />
        <img
          src={images.heroImg}
          alt=""
          className="absolute w-42 md:w-96 xl:w-lg top-72 -z-10 md:z-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
