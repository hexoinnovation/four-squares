// ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-oceanBlue mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <a
        href="/services"
        className="inline-block bg-golden text-black py-2 px-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
      >
        Learn More
      </a>
    </div>
  );
};

export default ServiceCard;
