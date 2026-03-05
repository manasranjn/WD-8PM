import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const getCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/course/get");

      const courses = res.data.data;

      setAllCourses(courses);
      setFilteredCourses(courses);

      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(courses.map((course) => course.category)),
      ];

      setCategories(uniqueCategories);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch courses");
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredCourses(allCourses);
    } else {
      const filtered = allCourses.filter(
        (course) => course.category === category,
      );
      setFilteredCourses(filtered);
    }
  };

  return (
    <div className="px-4 md:px-10 xl:px-20 py-10">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        {error ? <span className="text-red-500">{error}</span> : "All Courses"}
      </h2>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-all cursor-pointer duration-300
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

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-64 bg-gray-200 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      )}

      {/* Course Cards */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image (if backend has images field) */}
              {course.images && (
                <div className="overflow-hidden">
                  <img
                    src={course.images}
                    alt={course.title}
                    className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold group-hover:text-[#15beb3] transition">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500">
                  Category: {course.category}
                </p>

                <p className="text-sm text-gray-500">Level: {course.level}</p>

                <p className="text-sm text-gray-500">
                  Duration: {course.duration}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-bold text-[#15beb3]">
                    {course.price === 0 ? "Free" : `₹${course.price}`}
                  </span>

                  <button
                    onClick={() => navigate(`/course/${course._id}`)}
                    className="cursor-pointer px-4 py-2 rounded-lg bg-[#15beb3] text-white font-semibold hover:bg-[#129e96]"
                  >
                    Check Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
