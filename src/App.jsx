import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomePage from "./pages/home/page";
import ExclusiveAccessPage from "./pages/exclussive-access/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exclusive-access" element={<ExclusiveAccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
