import React, { useContext } from "react";
import StudentDetails from "./StudentDetails";
import { student } from "../App.jsx";

const AllStudents = () => {
  const data = useContext(student);
  console.log(data);

  return (
    <div>
      <h1>{data.name}</h1>
      <StudentDetails />
    </div>
  );
};

export default AllStudents;
