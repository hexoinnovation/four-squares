
import React, { useEffect, useState } from "react";
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if element is in view
  const handleScroll = () => {
    const section = document.getElementById("about-us");
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      id="about-us"
      className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 relative"
    >
      <div className="container mx-auto px-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-12">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Founded on the principles of excellence and dependability, Four
              Squares FM Limited has established itself as a trusted name in
              facilities management. With a commitment to delivering unparalleled
              quality, we strive to enhance your property's value by providing
              meticulous and reliable services tailored to your unique needs.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At the heart of our mission lies the goal of creating environments
              that inspire confidence and productivity. Whether it's through
              seamless maintenance or top-tier cleaning services, we ensure that
              every space we manage reflects our dedication to safety, cleanliness,
              and efficiency.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We excel in delivering all-encompassing services for building upkeep,
              sanitation, security, and beyond, guaranteeing that your surroundings
              remain secure, spotless, and highly functional.
            </p>
          </div>

         {/* Image Section with Slide-in Animation */}
         <div
            className={`relative ${isVisible ? 'transform translate-x-0' : 'transform translate-x-full'} transition-transform duration-1000 ease-in-out`}
          >
            <img
              src="aboutus.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
