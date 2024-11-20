import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/src/images/1.jpg')" }}
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
          className="bg-yellow-400 text-black py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
