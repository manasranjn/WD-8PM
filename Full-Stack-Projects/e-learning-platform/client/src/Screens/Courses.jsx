import React from "react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      category: "Frontend",
      level: "Beginner",
      duration: "10 hours",
      price: 0,
    },
    {
      id: 2,
      title: "JavaScript Basics to Advanced",
      category: "Frontend",
      level: "Beginner to Intermediate",
      duration: "20 hours",
      price: 999,
    },
    {
      id: 3,
      title: "React.js Complete Guide",
      category: "Frontend",
      level: "Intermediate",
      duration: "18 hours",
      price: 1499,
    },
    {
      id: 4,
      title: "Node.js & Express",
      category: "Backend",
      level: "Intermediate",
      duration: "15 hours",
      price: 1299,
    },
    {
      id: 5,
      title: "MERN Stack Development",
      category: "Full Stack",
      level: "Advanced",
      duration: "40 hours",
      price: 2999,
    },
  ];

  return (
    <div className="p-4 md:p-8 xl:p-12">
      <div>
        <h3 className="text-2xl md:text-3xl xl:text-5xl font-semibold">
          All Courses
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#c1dfff] rounded shadow p-4 flex flex-col gap-2"
            >
              <h4 className="text-lg md:textxl xl:text-2xl font-bold">
                {course.title}
              </h4>
              <p>Category: {course.category}</p>
              <p>Level: {course.level}</p>
              <p>Duration: {course.duration}</p>
              <p>Price: {course.price}</p>
              <button className="px-6 py-2 rounded-lg bg-[#15beb3] text-white font-semibold cursor-pointer">
                Check Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
