import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About";

export default function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
