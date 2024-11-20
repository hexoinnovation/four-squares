import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing the scroll-up icon

const AboutUs = () => {
  const [showScrollTop, setShowScrollTop] = useState(false); // State to toggle button visibility

  // Track scroll position and show/hide button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true); // Show button when scroll position is more than 300px
    } else {
      setShowScrollTop(false); // Hide button when scroll position is less than 300px
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-indigo-200 via-blue-300 to-blue-600 min-h-screen py-12 px-6">
      {/* Main Section: About Us */}
      <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Image Section */}
        <div className="md:w-full bg-white shadow-xl rounded-3xl p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="/src/images/3.jpg" // Replace with correct relative path to your image
            alt="About Us"
            className="w-full h-auto object-cover rounded-xl shadow-xl mb-6"
          />
        </div>

        {/* Right Column: Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-6 transition-all duration-500 hover:text-yellow-500">
            Our Story:
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
            At Four Squares FM Limited, we specialize in delivering top-tier
            facilities management services that keep your environment pristine,
            safe, and efficient. With a dedicated team and customized solutions,
            we’re here to make your operations seamless and stress-free.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
            "At Four Squares FM Limited, we are driven by a commitment to
            excellence and reliability. With years of experience in the
            facilities management industry, we strive to provide exceptional
            services that ensure the safety, functionality, and value of your
            property. Our goal is to create lasting partnerships by delivering
            consistent, high-quality service tailored to meet the unique needs
            of every client."
          </p>

          <a
            href="/about"
            className="inline-block bg-yellow-500 text-black py-3 px-8 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-110 hover:bg-yellow-600"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <div
          className="fixed bottom-8 right-8 bg-yellow-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:scale-110 hover:shadow-xl z-50"
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} />
        </div>
      )}
    </section>
  );
};

export default AboutUs;
