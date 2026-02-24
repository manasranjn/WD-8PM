import React from "react";

const SuccessSection = () => {
  return (
    <div className="text-center p-4 md:p-10 xl:p-20 py-2">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Our Success</h2>
      <p className="md:w-1/2 mx-auto mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        veritatis impedit temporibus quaerat hic dignissimos.
      </p>

      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-15">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-[#136CB5]">
            15K+
          </h1>
          <p className="lg:text-xl font-semibold">Students</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-[#136CB5]">
            75%
          </h1>
          <p className="lg:text-xl font-semibold">Total Success</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-[#136CB5]">
            35
          </h1>
          <p className="lg:text-xl font-semibold">Main Questions</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-[#136CB5]">
            25{" "}
          </h1>
          <p className="lg:text-xl font-semibold">Cheif Experts</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-[#136CB5]">
            15+
          </h1>
          <p className="lg:text-xl font-semibold">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
