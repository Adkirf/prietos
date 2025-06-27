import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import VisionPage from "./pages/vision/page";
import HomePage from "./pages/home/page";
import ExclussiveSuccessPage from "./pages/exclussive-success/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/exclussive-success" element={<ExclussiveSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
