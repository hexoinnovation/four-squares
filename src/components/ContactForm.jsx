import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess(true);
      // Simulate form submission (e.g., API call)
      setTimeout(() => setSuccess(null), 3000); // Hide success message after 3 seconds
    } else {
      setSuccess(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 p-8 shadow-xl rounded-lg"
    >
      {/* Name Field */}
      <div className="relative">
        <label
          htmlFor="name"
          className={`absolute text-lg text-white transition-all duration-300 ease-in-out transform ${
            formData.name ? "top-0 left-3 text-xs" : "top-4 left-4 text-lg"
          }`}
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 rounded-xl"
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div className="relative">
        <label
          htmlFor="email"
          className={`absolute text-lg text-white transition-all duration-300 ease-in-out transform ${
            formData.email ? "top-0 left-3 text-xs" : "top-4 left-4 text-lg"
          }`}
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 rounded-xl"
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Message Field */}
      <div className="relative">
        <label
          htmlFor="message"
          className={`absolute text-lg text-white transition-all duration-300 ease-in-out transform ${
            formData.message ? "top-0 left-3 text-xs" : "top-4 left-4 text-lg"
          }`}
        >
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full p-4 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 rounded-xl"
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full sm:w-auto bg-green-600 text-white py-3 px-8 rounded-xl text-xl font-semibold transition duration-300 hover:bg-green-700 transform hover:scale-105"
        >
          Send Message
        </button>
        {success === true && (
          <p className="text-green-300 mt-4">Message sent successfully!</p>
        )}
        {success === false && (
          <p className="text-red-400 mt-4">Please correct the errors above.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
