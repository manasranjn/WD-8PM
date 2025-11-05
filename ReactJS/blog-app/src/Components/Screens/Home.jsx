import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 p-5 md:p-10 lg:p-20">
      {/* Blog post cards will go here */}
      <div className="bg-[#D6F4ED] p-4 lg:p-6 rounded-lg shadow-md">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Blog Post Title
        </h2>
        <p className="text-gray-700 mb-2 text-sm md:text-base">
          This is a brief summary of the blog post content. It provides an
          overview of what the post is about.
        </p>

        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
      <div className="bg-[#D6F4ED] p-4 lg:p-6 rounded-lg shadow-md">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Blog Post Title
        </h2>
        <p className="text-gray-700 mb-2 text-sm md:text-base">
          This is a brief summary of the blog post content. It provides an
          overview of what the post is about.
        </p>

        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
