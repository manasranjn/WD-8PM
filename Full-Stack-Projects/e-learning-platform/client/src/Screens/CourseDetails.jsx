import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCourse = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/course/getById/${id}`,
      );

      setCourse(res.data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load course");
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourse();
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
      <div className="grid md:grid-cols-2 gap-10">
        {/* Course Image */}
        <div>
          <img
            src={course.images}
            alt={course.title}
            className="w-full h-87 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Course Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>

          <p className="text-gray-600">{course.description}</p>

          <div className="flex flex-wrap gap-4 mt-2">
            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
              Category: {course.category}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-10 ">
            <p className="text-2xl font-bold text-[#15beb3]">
              {course.price === 0 ? "Free Course" : `₹${course.price}`}
            </p>
            <button className="cursor-pointer w-fit px-6 py-3 bg-[#15beb3] text-white rounded-lg font-semibold hover:bg-[#129e96] transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Instructor Section */}
      {course.author && (
        <div className="mt-16 bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold mb-4">Instructor</h3>

          <div className="flex items-center gap-4">
            <img
              src={course.author.profilePic}
              alt={course.author.name}
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold">{course.author.name}</p>
              <p className="text-gray-500 text-sm">Course Instructor</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
