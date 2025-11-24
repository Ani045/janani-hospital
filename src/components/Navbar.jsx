import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiMenu, FiX, FiCalendar, FiChevronDown, FiHeart, FiActivity, FiUsers,
  FiBaby, FiScissors, FiDroplet, FiMonitor, FiEye
} = FiIcons;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isMobileDepartmentsOpen, setIsMobileDepartmentsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const departments = [
    { name: 'IVF & Fertility', icon: FiHeart, path: '/department/ivf', description: 'Advanced reproductive treatments', priority: 'high' },
    { name: 'Pediatrics', icon: FiBaby, path: '/department/pediatrics', description: 'Child healthcare services', priority: 'high' },
    { name: 'OBG', icon: FiUsers, path: '/department/obg', description: 'Women\'s healthcare', priority: 'high' },
    { name: 'General Medicine', icon: FiActivity, path: '/department/medicine', description: 'Primary care services', priority: 'high' },
    { name: 'Surgery', icon: FiScissors, path: '/department/surgery', description: 'Surgical procedures', priority: 'high' },
    { name: 'Orthopedics', icon: FiActivity, path: '/department/ortho', description: 'Bone & joint care', priority: 'high' },
    { name: 'Urology', icon: FiDroplet, path: '/department/urology', description: 'Urinary system care', priority: 'high' },
    { name: 'Laparoscopy', icon: FiMonitor, path: '/department/laparoscopy', description: 'Minimally invasive surgery', priority: 'high' },
    { name: 'Neonatology', icon: FiBaby, path: '/department/neonatology', description: 'Newborn intensive care', priority: 'medium' },
    { name: 'Critical Care', icon: FiHeart, path: '/department/critical-care', description: 'ICU services', priority: 'medium' },
    { name: 'Antenatal Care', icon: FiUsers, path: '/department/anc', description: 'Pregnancy care', priority: 'medium' },
    { name: 'Pain Clinic', icon: FiActivity, path: '/department/pain-clinic', description: 'Pain management', priority: 'medium' },
    { name: 'Infertility', icon: FiHeart, path: '/department/infertility', description: 'Fertility treatments', priority: 'medium' },
    { name: 'Endoscopy', icon: FiEye, path: '/department/endoscopy', description: 'Diagnostic procedures', priority: 'medium' },
    { name: 'Hysteroscopy', icon: FiEye, path: '/department/hysteroscopy', description: 'Uterine examination', priority: 'medium' }
  ];

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white shadow-md py-3'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1759402892809-logo.jpg"
              alt="Janani Hospital"
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold text-teal-700 hidden sm:block">
              Janani Hospital
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-teal-600 text-sm ${location.pathname === '/' ? 'text-teal-600' : 'text-gray-700'
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-teal-600 text-sm ${location.pathname === '/about' ? 'text-teal-600' : 'text-gray-700'
                }`}
            >
              About
            </Link>

            {/* Departments Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('departments')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-teal-600 transition-colors text-sm">
                <span>Departments</span>
                <SafeIcon
                  icon={FiChevronDown}
                  className={`text-xs transition-transform duration-200 ${activeDropdown === 'departments' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {activeDropdown === 'departments' && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[900px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-100 py-5 z-[120]"
                  onMouseEnter={() => handleMouseEnter('departments')}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Header */}
                  <div className="px-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Our Medical Departments</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Explore all specialties in one place</p>
                    </div>
                    <Link
                      to="/appointment"
                      className="hidden md:inline-flex items-center space-x-2 bg-teal-600 text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <SafeIcon icon={FiCalendar} className="text-xs" />
                      <span>Book Appointment</span>
                    </Link>
                  </div>

                  {/* 3-Column Grid */}
                  <div className="grid grid-cols-3 gap-3 px-6 py-4">
                    {departments.map((dept) => (
                      <Link
                        key={dept.name}
                        to={dept.path}
                        className="flex items-start space-x-3 px-3 py-3 rounded-lg hover:bg-teal-50 transition-all group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mt-0.5 w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors flex-shrink-0">
                          <SafeIcon icon={dept.icon} className="text-teal-600 text-base" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-0.5">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-teal-700 truncate">
                              {dept.name}
                            </span>
                            {dept.priority === 'high' && (
                              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-gray-500 leading-tight group-hover:text-teal-600">
                            {dept.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA for Mobile */}
                  <div className="px-6 pt-3 border-t border-gray-100 bg-gray-50 rounded-b-2xl md:hidden">
                    <Link
                      to="/appointment"
                      className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 text-sm"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <SafeIcon icon={FiCalendar} className="text-sm" />
                      <span>Book Appointment</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-teal-600 text-sm ${location.pathname === '/contact' ? 'text-teal-600' : 'text-gray-700'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/appointment"
              className="bg-teal-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-300 flex items-center space-x-2 text-sm"
            >
              <SafeIcon icon={FiCalendar} className="text-sm" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="text-lg text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                to="/"
                className={`font-medium transition-colors text-sm ${location.pathname === '/' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors text-sm ${location.pathname === '/about'
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Departments Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileDepartmentsOpen(!isMobileDepartmentsOpen)}
                  className="w-full flex items-center justify-between font-medium text-sm text-gray-700 hover:text-teal-600"
                >
                  <span>Departments</span>
                  <SafeIcon
                    icon={FiChevronDown}
                    className={`transition-transform duration-300 ${isMobileDepartmentsOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {isMobileDepartmentsOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-teal-200 max-h-[400px] overflow-y-auto pr-2 scroll-smooth">
                    {departments.map((dept) => (
                      <Link
                        key={dept.name}
                        to={dept.path}
                        className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 transition-colors py-2 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <SafeIcon icon={dept.icon} className="text-teal-600 text-sm" />
                        <span>{dept.name}</span>
                        {dept.priority === 'high' && (
                          <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`font-medium transition-colors text-sm ${location.pathname === '/contact'
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/appointment"
                className="bg-teal-600 text-white px-5 py-2 rounded-lg font-medium text-center text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav >
  );
};

export default Navbar;
