import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getBlog = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/article/getById/${id}`,
      );

      setBlog(res.data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load blog");
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  if (loading) {
    return (
      <div className="px-6 md:px-12 xl:px-20 py-10">
        <div className="h-[60vh] bg-gray-200 rounded-xl animate-pulse"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl py-20">{error}</div>
    );
  }

  return (
    <div className="px-6 md:px-12 xl:px-20 py-10">
      {/* Blog Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6">
          {blog.title}
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={blog.author.profilePic}
            alt={blog.author.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold">{blog.author.name}</p>
            <p className="text-gray-500 text-sm">Blog Author</p>
          </div>

          <span className="ml-auto bg-[#15beb3] text-white px-4 py-1 rounded-full text-sm">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Blog Image */}
      <div className="max-w-4xl mx-auto mb-10">
        <img
          src={blog.images}
          alt={blog.title}
          className="w-full h-100 object-cover rounded-xl shadow"
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
        <p className="whitespace-pre-line">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
