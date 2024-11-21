import React, { useState } from "react";
import { FaBars, FaFacebook, FaGlobe, FaLinkedin, FaSearch, FaTimes, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu
  const [searchOpen, setSearchOpen] = useState(false); // State to toggle the search bar

  return (
   
    <header className="bg-gradient-to-r from-blue-50 to-blue-100 text-black shadow-lg sticky top-0 z-50 h-21">
    
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
       
        <div className="flex items-center space-x-3">
  <img
    src="logo1.png"
    alt="Four Squares FM"
    className="h-20 md:h-20 object-contain ml-10 "  // Increased size for both mobile and desktop
  />
</div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center mr-10 gap-5">
        <Link
    to="/"
    className="relative text-lg text-gray-700 hover:text-red-400 transition duration-300 text-xl group"
  >
    Home
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="/about"
    className="relative text-lg text-gray-700 hover:text-blue-400 transition duration-300 text-xl group"
  >
    About Us
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="/services"
    className="relative text-lg text-gray-700 hover:text-yellow-400 transition duration-300 text-xl group"
  >
    Services
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="/contact"
    className="relative text-lg text-gray-700 hover:text-pink-400 transition duration-300 text-xl group"
  >
    Contact
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="/quote"
    className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-yellow-600"
  >
    Get a Quote
  </Link>

          {/* Search Button */}
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-black hover:text-yellow-400 transition duration-300">
            <FaSearch size={20} />
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button className="text-black hover:text-yellow-400 transition duration-300">
              <FaGlobe size={20} />
            </button>
            {/* Dropdown Menu for Language */}
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg hidden group-hover:block">
              <ul className="py-2">
                <li>
                  <Link to="#" className="block px-4 py-2 text-sm">
                    English
                  </Link>
                </li>
                <li>
                  <Link to="#" className="block px-4 py-2 text-sm">
                    Spanish
                  </Link>
                </li>
                <li>
                  <Link to="#" className="block px-4 py-2 text-sm">
                    French
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 gap-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Conditional Rendering) */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute w-full top-19 left-0 z-50">
          <div className="flex flex-col items-center space-y-6 py-6">
            <Link to="/" className="text-xl text-gray-700 hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-xl text-gray-700 hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/services" className="text-xl text-gray-700 hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/contact" className="text-xl text-gray-700 hover:text-yellow-400 transition duration-300" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/quote" className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-yellow-600" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </nav>
      )}

      {/* Search Bar */}
      {searchOpen && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-md shadow-lg w-full sm:w-1/3">
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md border border-gray-300" />
        </div>
      )}
    </header>
  );
};

export default Header;
