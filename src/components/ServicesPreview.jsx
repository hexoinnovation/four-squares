import React from "react";

const ServicesPreview = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Building Maintenance
            </h3>
            <p className="text-gray-600">
              Comprehensive building services to keep your property in top
              condition.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Security Services
            </h3>
            <p className="text-gray-600">
              Reliable security solutions tailored to protect your premises and
              assets.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Cleaning Services
            </h3>
            <p className="text-gray-600">
              Professional cleaning to keep your environment neat and hygienic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
