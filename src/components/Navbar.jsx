import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-slate-800 text-white p-4 flex gap-4">

      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

    </div>
  );
};