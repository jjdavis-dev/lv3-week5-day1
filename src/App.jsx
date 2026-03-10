import "./App.css";
import { Navbar } from "./components/Navbar";
import { ProductLanding } from "./components/ProductLanding";
import { Login } from "./pages/Login";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<ProductCard />} />
      </Routes>
    </div>
  );
}
