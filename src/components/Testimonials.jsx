import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              "Four Squares FM has been a reliable partner in maintaining our
              office building. Their professionalism is unmatched!"
            </p>
            <p className="font-semibold text-blue-600">John Doe</p>
            <p className="text-gray-400">CEO, Company ABC</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              "Great services! They truly care about providing the best
              facilities management solutions."
            </p>
            <p className="font-semibold text-blue-600">Jane Smith</p>
            <p className="text-gray-400">Facilities Manager, XYZ Corp.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              "Reliable and cost-effective. We trust Four Squares FM for all our
              facilities needs."
            </p>
            <p className="font-semibold text-blue-600">Michael Brown</p>
            <p className="text-gray-400">Operations Manager, ABC Enterprises</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
