import "./App.css";
import { Navbar } from "./components/Navbar";
import { ProductLanding } from "./components/ProductLanding";
import { Login } from "./pages/Login";
import { LearningGrid } from "./components/LearningGrid";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/grid" element={<LearningGrid />} />
      </Routes>
    </div>
  );
}