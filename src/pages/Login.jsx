import React, { useRef, useEffect } from "react";

export const Login = () => {

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-slate-200 p-6 rounded-lg">

      <h1 className="text-xl font-bold mb-4">Login</h1>

      <div className="flex flex-col gap-4">

        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded"
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>

      </div>

    </div>
  );
};