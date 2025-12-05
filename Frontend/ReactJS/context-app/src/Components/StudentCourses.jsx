import React, { useContext } from "react";
import { student } from "../App.jsx";

const StudentCourses = () => {
  // console.log(student);
  const data = useContext(student);
  // console.log(data);

  return (
    <div>
      StudentCourses
      {/* <p>Name: {data}</p> */}
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Course: {data.course}</p>
    </div>
  );
};

export default StudentCourses;
