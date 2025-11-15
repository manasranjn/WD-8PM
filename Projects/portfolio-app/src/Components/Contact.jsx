import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-center font-semibold text-2xl lg:text-4xl ">
        Contact Me
      </h2>
      <div className="flex justify-center mt-2">
        <span className="border-2 border-amber-400 w-20 inline-block rounded-2xl"></span>
      </div>

      <div className="flex justify-center mt-10">
        <form
          action=""
          className="flex flex-col justify-center items-start w-sm md:w-lg gap-2"
        >
          <label>Name</label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-200 outline-none p-2 w-full"
          />
          <label>Email</label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-200 outline-none p-2 w-full"
          />
          <label>Message</label>
          <textarea
            className="bg-white rounded-lg border-2 border-gray-200 outline-none p-2 w-full"
            rows={5}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
