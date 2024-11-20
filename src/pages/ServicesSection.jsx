// ServicesSection.jsx
import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-100 via-blue-200 to-blue-600 min-h-screen py-12 px-6">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-yellow-400">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg rounded-lg bg-white p-6">
            <img
              src="/path/to/service-image-1.jpg"
              alt="Facility Management"
              className="w-full h-48 object-cover rounded-lg mb-6 border-4 border-indigo-600 shadow-lg"
            />
            <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
              Facility Management
            </h3>
            <p className="text-gray-700 mb-4">
              We provide comprehensive facility management services ensuring
              your space is well-maintained and efficient.
            </p>
            <a
              href="/facility-management"
              className="text-indigo-600 font-semibold hover:underline transition duration-300"
            >
              Learn More
            </a>
          </div>
          {/* Service 2 */}
          <div className="transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg rounded-lg bg-white p-6">
            <img
              src="/path/to/service-image-2.jpg"
              alt="Cleaning Services"
              className="w-full h-48 object-cover rounded-lg mb-6 border-4 border-indigo-600 shadow-lg"
            />
            <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
              Cleaning Services
            </h3>
            <p className="text-gray-700 mb-4">
              Our expert cleaning team ensures that your environment remains
              spotless and healthy.
            </p>
            <a
              href="/cleaning-services"
              className="text-indigo-600 font-semibold hover:underline transition duration-300"
            >
              Learn More
            </a>
          </div>
          {/* Service 3 */}
          <div className="transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg rounded-lg bg-white p-6">
            <img
              src="/path/to/service-image-3.jpg"
              alt="Maintenance Solutions"
              className="w-full h-48 object-cover rounded-lg mb-6 border-4 border-indigo-600 shadow-lg"
            />
            <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
              Maintenance Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              We offer tailored maintenance solutions to prevent breakdowns and
              ensure smooth operations.
            </p>
            <a
              href="/maintenance-solutions"
              className="text-indigo-600 font-semibold hover:underline transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">
          Ready to Optimize Your Space?
        </h3>
        <p className="text-lg text-gray-300 mb-8">
          Contact us today to find out how we can help improve your environment
          and boost efficiency.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-500 text-black py-3 px-8 rounded-full text-xl font-semibold transition duration-300 hover:bg-yellow-600 transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
