import React from "react";
import images from "../../assets/assets";

const AboutSection = () => {
  const { instructor, students } = images;
  return (
    <div className="p-4 md:p-6 xl:p-10 max-w-6xl mx-auto">
      <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-center mb-6">
        What is <span className="text-[#15beb3]">TOTC ?</span>
      </h3>
      <p className="md:w-[70%] xl:w-3/5 text-center text-gray-500 mb-4 mx-auto">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>
      <div className="flex gap-20">
        <div
          style={{ backgroundImage: `url(${instructor})` }}
          className="w-1/2 h-72 rounded-xl flex flex-col justify-center items-center gap-4 bg-cover bg-no-repeat bg-center relative"
        >
          <h3 className="text-white text-lg md:text-xl lg:text-2xl uppercase font-semibold z-10">
            For Instructor
          </h3>
          <button className="w-1/2 h-14 rounded-full bg-[#23BDEE] hover:bg-transparent text-white cursor-pointer hover:border-2 border-white z-10">
            Start a Class Today
          </button>
          <div className="w-full h-full bg-black rounded-xl opacity-40 absolute top-0 left-0"></div>
        </div>
        <div
          style={{ backgroundImage: `url(${students})` }}
          className="w-1/2 h-72 rounded-xl flex flex-col justify-center items-center gap-4 bg-cover bg-no-repeat bg-center relative"
        >
          <h3 className="text-white text-lg md:text-xl lg:text-2xl uppercase font-semibold z-10">
            For Students
          </h3>
          <button className="w-1/2 h-14 rounded-full bg-[#23BDEE] hover:bg-transparent text-white cursor-pointer hover:border-2 border-white z-10">
            Enter Class Code
          </button>
          <div className="w-full h-full bg-black rounded-xl opacity-40 absolute top-0 lef-0"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
