import React, { useState, useEffect } from "react";

const SideEffect = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // console.log(data);
    setAllPosts(data);
  };

  //   getData();

  useEffect(() => {
    console.log("This is useEffect  Hook");
    getData();
  }, []);

  // console.log(allPosts);

  return (
    <div>
      {allPosts.map((post, idx) => (
        <div key={idx}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default SideEffect;
