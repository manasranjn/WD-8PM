import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrememnt = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter : {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrememnt}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
