import React from "react";

const EditPost = () => {
  return (
    <div className="p-5 md:p-10 lg:p-20 flex justify-center items-center h-[90vh]">
      <form className="bg-[#11224E] p-5 lg:p-8 rounded-lg shadow-lg flex flex-col gap-4 w-xl">
        <h2 className="text-lg md:text-2xl font-bold mb-5 text-white text-center">
          Update Post
        </h2>
        <input
          type="text"
          placeholder="Enter the Blog title"
          className="bg-white p-2 rounded outline-none border-none"
        />
        <textarea
          placeholder="Enter the Blog description"
          className="bg-white p-2 rounded outline-none border-none"
        ></textarea>
        <button className="px-3 py-1 md:px-4 md:py-2 lg:px-5 bg-green-500 rounded-lg cursor-pointer active:scale-95 transition duration-200 active:bg-green-600 hover:bg-green-400 text-white">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
