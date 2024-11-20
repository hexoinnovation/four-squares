import React from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 sm:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-yellow-400">
              Four Squares FM
            </h3>
            <p className="text-gray-300 text-lg">
              We specialize in high-quality facilities management services,
              ensuring that your environment is safe, clean, and efficient.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-yellow-400">Contact</h4>
            <p className="text-gray-300 text-lg">
              Email:{" "}
              <a
                href="mailto:info@foursquaresfm.com"
                className="text-yellow-400 hover:text-white transition duration-300"
              >
                info@foursquaresfm.com
              </a>
            </p>
            <p className="text-gray-300 text-lg">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-yellow-400 hover:text-white transition duration-300"
              >
                +123 456 7890
              </a>
            </p>
            <p className="text-gray-300 text-lg">
              Address: 1234 Business Blvd, City, Country
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-yellow-400">
              Follow Us
            </h4>
            <div className="flex space-x-8 justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-600 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; 2024 Four Squares FM Limited. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="absolute bottom-8 right-8">
          <a
            href="#top"
            className="bg-yellow-400 text-black p-4 rounded-full shadow-xl hover:bg-yellow-500 transition duration-300"
          >
            <FaArrowUp size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
