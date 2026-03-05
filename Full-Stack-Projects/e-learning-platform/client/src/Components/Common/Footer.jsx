import React from "react";
import assets from "../../assets/assets";

const Footer = () => {
  const date = new Date().getFullYear();
  // console.log(date);

  return (
    <div className="bg-[#252641] flex flex-col gap-6 items-center p-4 md:p-8 xl:p-12">
      <div className="flex gap-4 md:gap-6 justify-center ">
        <img src={assets.logo} alt="logo" className="h-14" />
        <div className="border-l-2 border-gray-500 pl-6 text-white">
          <p>
            Virtual Class <br /> for Zoom
          </p>
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
