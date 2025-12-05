import React, { useRef } from "react";

const Uncontrolled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    console.log(data);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <form className="flex flex-col gap-4 bg-green-400 p-10 rounded-lg shadow-lg w-xl">
        <h1 className="text-center text-3xl text-white font-semibold underline italic tracking-widest">
          Uncontrolled
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 rounded bg-white border-none outline-none text-lg"
          ref={nameRef}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded bg-white border-none outline-none text-lg"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Enter a password"
          className="p-2 rounded bg-white border-none outline-none text-lg"
          ref={passRef}
        />
        <button
          className="bg-blue-600 p-2 rounded border-none outline-none text-lg text-white cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Uncontrolled;
