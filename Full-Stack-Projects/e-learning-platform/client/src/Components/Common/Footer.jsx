import React from "react";
import assets from "../../assets/assets";

const Footer = () => {
  const date = new Date().getFullYear();
  // console.log(date);

  return (
    <div className="bg-[#252641] flex flex-col gap-6 md:gap-10 items-center p-4 md:p-8 xl:p-12">
      <div className="flex gap-4 md:gap-6 justify-center ">
        <img src={assets.logo} alt="logo" className="h-14" />
        <div className="border-l-2 border-gray-500 pl-6 text-white">
          <p>
            Virtual Class <br /> for Zoom
          </p>
        </div>
      </div>

      <div>
        <p className="text-gray-400 text-center font-semibold">
          Subscribe to get our Newsletter
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mt-4">
          <input
            type="text"
            placeholder="Your Email"
            className="rounded-full px-10 py-2 bg-transparent border-2 text-gray-400 border-gray-500"
          />
          <button className="rounded-full px-10 py-2 bg-[#15beb3] text-white cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <ul className="flex gap-4 text-gray-400 mb-2">
          <li className="border-r-2 px-4">Home</li>
          <li className="border-r-2 px-4">Careers</li>
          <li>Terms & Conditions</li>
        </ul>
        <p className="text-gray-400 text-center font-semibold">
          © {date} Class Technologies Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
