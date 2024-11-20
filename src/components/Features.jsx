import React from "react";
import { FaBuilding, FaLock, FaShieldAlt, FaWrench } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaBuilding className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              Building Maintenance
            </h3>
            <p className="text-gray-600">
              Ensure your buildings are in top condition with our comprehensive
              maintenance services.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaLock className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Security Services</h3>
            <p className="text-gray-600">
              Protect your property with our reliable and professional security
              solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaWrench className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              Maintenance & Repairs
            </h3>
            <p className="text-gray-600">
              We provide fast and effective repairs to keep your facilities
              running smoothly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaShieldAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Safety & Compliance</h3>
            <p className="text-gray-600">
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
