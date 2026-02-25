import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getArticles = () => {
    axios
      .get("http://localhost:5000/api/article/get")
      .then((res) => {
        // console.log(res.data.data);
        setAllArticles(res.data.data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setError("Fail to get articles");
        setAllArticles([]);
        // setLoading(false);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="p-4 md:p-8 xl:p-12">
      <div>
        <h3
          className={`text-2xl md:text-3xl xl:text-5xl font-semibold ${error ? "text-red-500" : "text-black"}`}
        >
          {error ? error : "Latest Blogs"}
        </h3>
        {loading && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="h-[55vh] bg-gray-200 rounded flex flex-col gap-2 animate-pulse">
              <div className="h-1/2 w-full bg-gray-300 rounded-t"></div>
              <div className="h-12 bg-gray-300 mx-2"></div>
              <div className="h-7 bg-gray-300 mx-2"></div>
              <div className="h-24 bg-gray-300 mx-2"></div>
            </div>
            <div className="h-[55vh] bg-gray-200 rounded flex flex-col gap-2 animate-pulse">
              <div className="h-1/2 w-full bg-gray-300 rounded-t"></div>
              <div className="h-12 bg-gray-300 mx-2"></div>
              <div className="h-7 bg-gray-300 mx-2"></div>
              <div className="h-24 bg-gray-300 mx-2"></div>
            </div>
            <div className="h-[55vh] bg-gray-200 rounded flex flex-col gap-2 animate-pulse">
              <div className="h-1/2 w-full bg-gray-300 rounded-t"></div>
              <div className="h-12 bg-gray-300 mx-2"></div>
              <div className="h-7 bg-gray-300 mx-2"></div>
              <div className="h-24 bg-gray-300 mx-2"></div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-6">
          {allArticles.map((article) => (
            <div
              key={article._id}
              className="bg-[#dce0e4] rounded shadow flex flex-col gap-2"
            >
              <img
                src={article.images}
                alt={article.title}
                className="rounded-t h-52 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h4 className="text-lg md:textxl xl:text-2xl font-bold">
                  {article.title}
                </h4>
                <p>
                  <span className="font-semibold">Category: </span>
                  {article.category}
                </p>
                <p>
                  <span className="font-semibold">Description: </span>
                  {article.description.slice(0, 140)}
                  {article.description.length > 140 ? "..." : ""}
                </p>
                <div className="flex gap-2 items-center">
                  <img
                    src={article.author.profilePic}
                    alt={article.author.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  {article.author.name}
                </div>
                <button className="px-6 py-2 rounded-lg bg-[#15beb3] text-white font-semibold cursor-pointer">
                  Read Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
