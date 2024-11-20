// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer"; // Import Footer
import Header from "./components/Header"; // Ensure the path is correct

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <Header /> {/* Place Header here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer /> {/* Footer at the bottom */}
    </Router>
  );
}

export default App;
