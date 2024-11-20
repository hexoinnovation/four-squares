import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Founded on the principles of excellence and dependability, Four Squares FM Limited has become a trusted name in facilities management. Our mission is to enhance your property’s value by providing meticulous and reliable services.
            </p>
            <p className="text-lg text-gray-600">
              We specialize in offering comprehensive solutions for building maintenance, cleaning, security, and more, ensuring that your environment is safe, clean, and efficient.
            </p>
          </div>
          <div>
            <img
              src="/path-to-your-image.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
