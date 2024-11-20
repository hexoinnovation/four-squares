import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-blue-200 to-blue-600 min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Contact Form */}
        <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg mx-auto md:mx-0">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center text-indigo-800 mb-8">
            Get in Touch with Us
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            We’re here to help! Fill out the form below, and we'll get back to
            you as soon as possible.
          </p>

          {/* Contact Form Component */}
          <ContactForm />
        </div>

        {/* Right Column: Image Section */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <img
            src="/path/to/your/image.jpg"
            alt="Contact Us"
            className="rounded-xl shadow-2xl object-cover max-w-full h-80 md:h-[400px] mb-6 transition-transform transform hover:scale-105"
          />
          <p className="text-indigo-900 text-center md:text-left text-lg md:text-xl px-6 md:px-0">
            Our team is always available to assist you. Get in touch with us to
            learn more about how we can help you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
