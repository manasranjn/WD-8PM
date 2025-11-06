import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [message, setMessage] = useState("");

  const getData = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        setAllPosts(res.data);
        console.log(res.data);
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Error retrieving data");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 p-5 md:p-10 lg:p-20">
      {message && <p className="text-red-500">{message}</p>}
      {/* Blog post cards will go here */}
      {allPosts.map((post) => (
        <div
          className="relative bg-[#D6F4ED] p-4 lg:p-6 rounded-lg shadow-md"
          key={post.id}
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            {post.title}
          </h2>
          <p className="text-gray-700 mb-2 text-sm md:text-base">
            {post.description}
          </p>

          <div className="flex justify-between absolute bottom-3 w-[90%] mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
