import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Courses from "./Screens/Courses";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Blogs from "./Screens/Blogs";
import BlogDetails from "./Screens/BlogDetails";
import CourseDetails from "./Screens/CourseDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
