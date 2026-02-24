import React from "react";

const Blogs = () => {
  const articles = [
    {
      id: 1,
      title: "Introduction to Web Development",
      category: "Web Development",
      author: "Admin",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "HTML Semantic Tags Explained",
      category: "HTML",
      author: "Admin",
      readTime: "6 min",
    },
    {
      id: 3,
      title: "CSS Box Model Made Easy",
      category: "CSS",
      author: "Admin",
      readTime: "7 min",
    },
    {
      id: 4,
      title: "Flexbox vs Grid: When to Use What",
      category: "CSS",
      author: "Admin",
      readTime: "8 min",
    },
    {
      id: 5,
      title: "JavaScript Variables and Data Types",
      category: "JavaScript",
      author: "Admin",
      readTime: "6 min",
    },
    {
      id: 6,
      title: "Understanding JavaScript Functions",
      category: "JavaScript",
      author: "Admin",
      readTime: "7 min",
    },
    {
      id: 7,
      title: "Arrow Functions vs Normal Functions",
      category: "JavaScript",
      author: "Admin",
      readTime: "5 min",
    },
    {
      id: 8,
      title: "DOM Manipulation for Beginners",
      category: "JavaScript",
      author: "Admin",
      readTime: "9 min",
    },
    {
      id: 9,
      title: "What is React and Why Use It?",
      category: "React",
      author: "Admin",
      readTime: "6 min",
    },
    {
      id: 10,
      title: "React Components and Props Explained",
      category: "React",
      author: "Admin",
      readTime: "8 min",
    },
    {
      id: 11,
      title: "State and Lifecycle in React",
      category: "React",
      author: "Admin",
      readTime: "9 min",
    },
    {
      id: 12,
      title: "Handling Events in React",
      category: "React",
      author: "Admin",
      readTime: "6 min",
    },
    {
      id: 13,
      title: "Introduction to Node.js",
      category: "Backend",
      author: "Admin",
      readTime: "7 min",
    },
    {
      id: 14,
      title: "Building APIs with Express.js",
      category: "Backend",
      author: "Admin",
      readTime: "10 min",
    },
    {
      id: 15,
      title: "REST API Concepts Explained",
      category: "Backend",
      author: "Admin",
      readTime: "8 min",
    },
    {
      id: 16,
      title: "Getting Started with MongoDB",
      category: "Database",
      author: "Admin",
      readTime: "7 min",
    },
    {
      id: 17,
      title: "Mongoose Schema and Models",
      category: "Database",
      author: "Admin",
      readTime: "9 min",
    },
    {
      id: 18,
      title: "Authentication vs Authorization",
      category: "Security",
      author: "Admin",
      readTime: "6 min",
    },
    {
      id: 19,
      title: "JWT Authentication Explained",
      category: "Security",
      author: "Admin",
      readTime: "8 min",
    },
    {
      id: 20,
      title: "Deploying MERN Applications",
      category: "DevOps",
      author: "Admin",
      readTime: "10 min",
    },
  ];

  return (
    <div className="p-4 md:p-8 xl:p-12">
      <div>
        <h3 className="text-2xl md:text-3xl xl:text-5xl font-semibold">
          Latest Blogs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#c1dfff] rounded shadow p-4 flex flex-col gap-2"
            >
              <h4 className="text-lg md:textxl xl:text-2xl font-bold">
                {article.title}
              </h4>
              <p>Category: {article.category}</p>
              <p>Level: {article.author}</p>
              <p>Duration: {article.readTime}</p>
              <button className="px-6 py-2 rounded-lg bg-[#15beb3] text-white font-semibold cursor-pointer">
                Read Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
