import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div>
      <nav style={{display:"flex", gap:"10px"}}>
        <Link to="/Home">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
