import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { GiFarmTractor } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GiFarmTractor className="text-3xl mr-2 text-green-300" />
              <span className="text-xl font-bold">AgroVision</span>
            </div>
            <p className="text-green-100">
              Empowering farmers with smart agricultural solutions and data-driven insights for sustainable farming.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Weather Forecast</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Crop Advisory</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Market Prices</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-green-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Soil Testing</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Irrigation Planning</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Pest Management</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Crop Rotation Guide</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Farm Equipment Rental</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-green-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-green-300 flex-shrink-0" />
                <span className="text-green-100">123 Farm Road, Agricultural District, Country</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-green-300" />
                <span className="text-green-100">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-green-300" />
                <span className="text-green-100">info@agrovision.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3 text-green-300" />
                <span className="text-green-100">Mon-Fri: 8AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-green-700 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-green-100">Get the latest farming tips and updates</p>
            </div>
            <div className="flex flex-1 max-w-md">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg flex-grow text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AgroVision. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;