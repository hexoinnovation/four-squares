import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    
    "bli2.jpg",
    "bli3.jpg",
    "bli1.avif",
    "image.png",
  ];

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center text-white relative z-10 py-40 px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to Four Squares FM
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Your trusted partner for top-tier facilities management services.
        </p>
        <a
          href="#services"
          className="bg-yellow-400 text-black py-3 px-8 rounded-full hover:bg-pink-500 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
