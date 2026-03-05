import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/article/get");

      const articles = res.data.data;

      setAllArticles(articles);
      setFilteredArticles(articles);

      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(articles.map((item) => item.category)),
      ];

      setCategories(uniqueCategories);
      setLoading(false);
    } catch (err) {
      setError("Failed to get articles");
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredArticles(allArticles);
    } else {
      const filtered = allArticles.filter(
        (article) => article.category === category,
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="px-4 md:px-10 xl:px-20 py-10">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        {error ? <span className="text-red-500">{error}</span> : "Latest Blogs"}
      </h2>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`cursor-pointer px-4 py-2 rounded-full border transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-[#15beb3] text-white border-[#15beb3]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#15beb3] hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[55vh] bg-gray-200 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      )}

      {/* Blog Cards */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={article.images}
                  alt={article.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-xl font-bold group-hover:text-[#15beb3] transition">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-500">
                  Category: {article.category}
                </p>

                <p className="text-gray-600 text-sm">
                  {article.description.slice(0, 120)}
                  {article.description.length > 120 && "..."}
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={article.author.profilePic}
                    alt={article.author.name}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">
                    {article.author.name}
                  </span>
                </div>

                <button
                  className="cursor-pointer mt-4 py-2 rounded-lg bg-[#15beb3] text-white font-semibold hover:bg-[#129e96] transition"
                  onClick={() => navigate(`/blog/${article._id}`)}
                >
                  Read Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
