import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    console.log(data);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <form className="flex flex-col gap-4 bg-green-400 p-10 rounded-lg shadow-lg w-xl">
        <h1 className="text-center text-3xl text-white font-semibold underline italic tracking-widest">
          Controlled Form Handling
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 rounded bg-white border-none outline-none text-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded bg-white border-none outline-none text-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter a password"
          className="p-2 rounded bg-white border-none outline-none text-lg"
          value={password}
          onChange={handlePasswordChange}
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

export default Controlled;
