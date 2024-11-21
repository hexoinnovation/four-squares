import React from "react";
import { FaBuilding, FaLock, FaShieldAlt, FaWrench } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-12">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Building Maintenance Feature */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaBuilding className="text-4xl text-yellow-600 mb-4 hover:text-blue-700 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
              Building Maintenance
            </h3>
            <p className="text-gray-700">
              Ensure your buildings are in top condition with our comprehensive
              maintenance services.
            </p>
          </div>

          {/* Security Services Feature */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaLock className="text-4xl text-violet-600 mb-4 hover:text-blue-700 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-violet-900 mb-4">Security Services</h3>
            <p className="text-gray-700">
              Protect your property with our reliable and professional security
              solutions.
            </p>
          </div>

          {/* Maintenance & Repairs Feature */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaWrench className="text-4xl text-green-600 mb-4 hover:text-blue-700 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Maintenance & Repairs
            </h3>
            <p className="text-gray-700">
              We provide fast and effective repairs to keep your facilities
              running smoothly.
            </p>
          </div>

          {/* Safety & Compliance Feature */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out">
            <FaShieldAlt className="text-4xl text-red-600 mb-4 hover:text-blue-700 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Safety & Compliance</h3>
            <p className="text-gray-700">
              Our services ensure that your facilities meet safety regulations
              and compliance standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
