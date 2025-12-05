import React from "react";

const StyleObject = () => {
  const headingCSS = {
    color: "white",
    fontSize: "30px",
    backgroundColor: "green",
    padding: "10px",
  };

  return (
    <div>
      <h1 style={headingCSS}>Style Object</h1>
      <p style={headingCSS}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eligendi
        architecto expedita corrupti saepe possimus delectus, numquam sit,
        voluptatum obcaecati quaerat, libero facilis voluptates repellat. Beatae
        libero odit numquam adipisci.
      </p>
      <p id="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, et
        facere. Laboriosam maiores ratione sequi neque provident, vero deleniti
        ea odio minima autem repellendus illum perspiciatis, necessitatibus sed
        accusantium unde!{" "}
      </p>
    </div>
  );
};

export default StyleObject;
