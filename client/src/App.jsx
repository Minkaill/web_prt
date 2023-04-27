import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
