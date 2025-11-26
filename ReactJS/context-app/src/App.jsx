import React, { createContext } from "react";
import AllStudents from "./Components/AllStudents.jsx";
import Example from "./Components/Example.jsx";

export const student = createContext();

const App = () => {
  return (
    <div>
      <h1>Hello, welcome to the Context App!</h1>
      {/* {App -> AllStudents -> StudentDetails -> StudentCourses} */}
      <student.Provider
        value={{ name: "John Doe", age: 21, course: "Computer Science" }}
      >
        <AllStudents />
      </student.Provider>

      <Example />
    </div>
  );
};

export default App;
