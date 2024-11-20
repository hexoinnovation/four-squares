import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-700 text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">Four Squares FM</div>
        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <a
              href="#hero"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="hover:text-yellow-300 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-yellow-300 transition duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-yellow-300 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-yellow-300 transition duration-300"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-blue-700 text-white py-4 px-6">
          <li className="py-2">
            <a
              href="#hero"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li className="py-2">
            <a
              href="#about-us"
              className="hover:text-yellow-300 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li className="py-2">
            <a
              href="#features"
              className="hover:text-yellow-300 transition duration-300"
            >
              Features
            </a>
          </li>
          <li className="py-2">
            <a
              href="#services"
              className="hover:text-yellow-300 transition duration-300"
            >
              Services
            </a>
          </li>
          <li className="py-2">
            <a
              href="#testimonials"
              className="hover:text-yellow-300 transition duration-300"
            >
              Testimonials
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
