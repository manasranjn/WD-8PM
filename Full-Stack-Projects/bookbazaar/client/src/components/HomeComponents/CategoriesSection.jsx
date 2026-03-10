import React from "react";

const categories = [
  "Programming",
  "Fiction",
  "Science",
  "History",
  "Biography",
  "Self Development",
];

const CategoriesSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-6">
          Browse Categories
        </h2>

        <div className="grid md:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
