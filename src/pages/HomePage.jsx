import React from "react";
import { FaArrowUp } from "react-icons/fa"; // For back-to-top button
import AboutUs from "../components/AboutUs";
import Features from "../components/Features"; // Updated Features Section
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation"; // New navigation bar component
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUs />

      {/* Features Section */}
      <Features />

      {/* Services Preview Section */}
      <ServicesPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
};

// Back to Top Button component
const BackToTopButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="#top"
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <FaArrowUp size={26} />
      </a>
    </div>
  );
};

export default HomePage;
