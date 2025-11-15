import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="p-6 flex justify-center items-center flex-col gap-4">
      <div className="flex gap-4">
        <RiInstagramFill size={30} />
        <FaLinkedin size={30} />
        <IoMdMail size={30} />
      </div>
      <p>© 2023 Madelyn Torff</p>
    </div>
  );
};

export default Footer;
