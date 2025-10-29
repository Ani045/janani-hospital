import React from 'react';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight} = FiIcons;

const Footer = () => {
  const quickLinks = [
    {name: 'About Us', path: '/about'},
    {name: 'Our Doctors', path: '/doctors'},
    {name: 'Book Appointment', path: '/appointment'},
    {name: 'Patient Portal', path: '/portal'},
    {name: 'Health Packages', path: '/packages'},
    {name: 'Career', path: '/career'}
  ];

  const services = [
    {name: 'Cardiology', path: '/department/cardiology'},
    {name: 'Neurology', path: '/department/neurology'},
    {name: 'Orthopedics', path: '/department/orthopedics'},
    {name: 'Pediatrics', path: '/department/pediatrics'},
    {name: 'Emergency Care', path: '/department/emergency'},
    {name: 'Oncology', path: '/department/oncology'}
  ];

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759402892809-logo.jpg" 
                alt="Janani Hospital" 
                className="h-10 w-auto" 
              />
              <div>
                <h3 className="text-lg font-bold">Janani Hospital</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Providing exceptional healthcare services with compassion and cutting-edge technology. Your health and wellbeing is our priority.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                {icon: FiFacebook, href: '#', label: 'Facebook'},
                {icon: FiTwitter, href: '#', label: 'Twitter'},
                {icon: FiInstagram, href: '#', label: 'Instagram'},
                {icon: FiLinkedin, href: '#', label: 'LinkedIn'}
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
                >
                  <SafeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 flex items-center space-x-2 group text-sm"
                  >
                    <SafeIcon icon={FiArrowRight} className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Medical Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center space-x-2 group text-sm"
                  >
                    <SafeIcon icon={FiArrowRight} className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="text-teal-400 mt-1 flex-shrink-0 text-sm" />
                <div>
                  <p className="text-gray-300 text-sm">Janani Hospital</p>
                  <p className="text-gray-400 text-xs">Plot No. 123, Road No. 36</p>
                  <p className="text-gray-400 text-xs">Jubilee Hills, Hyderabad</p>
                  <p className="text-gray-400 text-xs">Telangana - 500033</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-teal-400 flex-shrink-0 text-sm" />
                <div>
                  <p className="text-gray-300 text-sm">+91 40 4012 3456</p>
                  <p className="text-gray-400 text-xs">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-teal-400 flex-shrink-0 text-sm" />
                <div>
                  <p className="text-gray-300 text-sm">info@jananihospital.com</p>
                  <p className="text-gray-400 text-xs">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="text-teal-400 flex-shrink-0 text-sm" />
                <div>
                  <p className="text-gray-300 text-sm">24/7 Emergency</p>
                  <p className="text-gray-400 text-xs">OPD: 8 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Janani Hospital. All rights reserved. |
              <Link to="/privacy" className="hover:text-teal-400 ml-1">Privacy Policy</Link> |
              <Link to="/terms" className="hover:text-teal-400 ml-1">Terms of Service</Link>
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with care for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;