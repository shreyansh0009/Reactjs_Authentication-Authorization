import React from "react";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  function handleSubmit() {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    
  }

  return (
    <div className="bg-sky-300 space-y-3 p-5 w-80 m-5 flex-col flex ">
      <h1 className="text-4xl font-semibold">Login</h1>
      <p className="text-2xl">Email</p>
      <input
        onChange={(e) => setemail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        className="border-2 rounded-md shadow-md"
      />

      <p className="text-2xl">Password</p>
      <input
        onChange={(e) => setpassword(e.target.value)}
        type="password"
        placeholder="Enter your password"
        className="border-2 rounded-md shadow-md"
      />

      <button
        onClick={handleSubmit}
        className="bg-emerald-500 px-3 py-1 rounded-sm cursor-pointer"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
