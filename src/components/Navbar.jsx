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
      className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ease-out ${isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-xl py-2 sm:py-3 border-b border-gray-200'
        : 'py-3 sm:py-4 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="logo.png"
              alt="Janani Hospital"
              className={`h-12 sm:h-16 lg:h-20 w-auto transition-all duration-300 opacity-90 group-hover:opacity-100 ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
            <span className={`text-xl font-bold hidden lg:block transition-all duration-300 ${isScrolled
              ? 'text-gray-900'
              : 'bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent drop-shadow-lg'
              } ${isScrolled ? 'text-lg' : 'text-xl'}`}>

            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {/* <Link
              to="/"
              className={`relative font-semibold text-sm px-3 py-8 mb-2 transition-all duration-300 group ${location.pathname === '/'
                  ? (isScrolled ? 'text-emerald-600' : 'text-white drop-shadow-lg')
                  : (isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white drop-shadow-lg')
                } ${isScrolled ? 'after:bg-emerald-600' : 'after:bg-white/80'}`}
            >
              Home
              {location.pathname === '/' && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-emerald-600' : 'bg-white/80'
                  }`}
                />
              )}
            </Link> */}
            <Link
              to="/about"
              className={`relative font-semibold text-sm px-3 py-2 transition-all duration-300 group ${location.pathname === '/about'
                ? (isScrolled ? 'text-emerald-600' : 'text-white drop-shadow-lg')
                : (isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white drop-shadow-lg')
                } ${isScrolled ? 'after:bg-emerald-600' : 'after:bg-white/80'}`}
            >
              About
              {location.pathname === '/about' && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-emerald-600' : 'bg-white/80'
                  }`}
                />
              )}
            </Link>

            {/* Compact Departments Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('departments')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center space-x-2 font-semibold text-sm px-3 py-2 transition-all duration-300 group relative ${activeDropdown === 'departments'
                ? (isScrolled ? 'text-emerald-600 font-bold' : 'text-white drop-shadow-lg font-bold')
                : (isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white drop-shadow-lg')
                }`}>
                <span>Departments</span>
                <SafeIcon
                  icon={FiChevronDown}
                  className={`text-xs transition-transform duration-300 ${activeDropdown === 'departments' ? 'rotate-180' : ''}`}
                />
              </button>

              {activeDropdown === 'departments' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[700px] max-w-[90vw] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/30 py-4 z-[200]">
                  {/* Compact Header */}
                  <div className="px-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">Medical Departments</h4>
                      <p className="text-xs text-gray-500 mt-1">All specialties in one place</p>
                    </div>
                    <Link
                      to="/appointment"
                      className="flex items-center space-x-2 bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-all duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <SafeIcon icon={FiCalendar} className="text-xs" />
                      <span>Book Now</span>
                    </Link>
                  </div>

                  {/* Compact 3-Column Grid */}
                  <div className="grid grid-cols-3 gap-4 px-6 py-4">
                    {departments.map((dept) => (
                      <Link
                        key={dept.name}
                        to={dept.path}
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-emerald-50 transition-all duration-200 group hover:shadow-md border border-transparent hover:border-emerald-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 flex-shrink-0 mt-0.5">
                          <SafeIcon icon={dept.icon} className="text-emerald-600 text-sm" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-gray-900 font-medium text-xs group-hover:text-emerald-700 truncate">
                              {dept.name}
                            </span>
                            {dept.priority === 'high' && (
                              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-gray-500 leading-tight group-hover:text-emerald-600">
                            {dept.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`relative font-semibold text-sm px-3 py-2 transition-all duration-300 group ${location.pathname === '/contact'
                ? (isScrolled ? 'text-emerald-600' : 'text-white drop-shadow-lg')
                : (isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white drop-shadow-lg')
                }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <Link
              to="/appointment"
              className={`group px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center space-x-2 transition-all duration-300 shadow-lg ${isScrolled
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5'
                : 'bg-white/90 text-emerald-600 backdrop-blur hover:bg-white hover:shadow-xl hover:-translate-y-0.5 drop-shadow-lg'
                }`}
            >
              <SafeIcon icon={FiCalendar} className="text-sm group-hover:rotate-12 transition-transform duration-300" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <SafeIcon
              icon={isMobileMenuOpen ? FiX : FiMenu}
              className={`text-xl transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 mt-3 mx-3 mb-6 pb-6 pt-4 rounded-xl shadow-lg animate-in slide-in-from-top-4 duration-200 bg-white border border-gray-300 z-[200] max-h-[calc(100vh-140px)] overflow-y-auto">
            <div className="flex flex-col space-y-2 px-4">
              <Link
                to="/"
                className={`font-semibold text-sm py-2.5 px-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${location.pathname === '/'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-800 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-emerald-100">
                  <SafeIcon icon={FiHeart} className="text-emerald-600 text-sm" />
                </div>
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className={`font-semibold text-sm py-2.5 px-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${location.pathname === '/about'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-800 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-teal-100">
                  <SafeIcon icon={FiUsers} className="text-teal-600 text-sm" />
                </div>
                <span>About</span>
              </Link>

              {/* Mobile Departments Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileDepartmentsOpen(!isMobileDepartmentsOpen)}
                  className="w-full flex items-center justify-between font-semibold text-sm py-2.5 px-3 rounded-lg transition-all duration-300 text-gray-800 hover:text-emerald-600 hover:bg-gray-50"
                >
                  <span className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-emerald-100">
                      <SafeIcon icon={FiMonitor} className="text-emerald-600 text-sm" />
                    </div>
                    <span>Departments</span>
                  </span>
                  <SafeIcon
                    icon={FiChevronDown}
                    className={`transition-transform duration-300 text-emerald-600 text-sm ${isMobileDepartmentsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMobileDepartmentsOpen && (
                  <div className="pl-6 mt-2 space-y-1 max-h-[300px] overflow-y-auto pr-2 pb-2">
                    {departments.map((dept) => (
                      <Link
                        key={dept.name}
                        to={dept.path}
                        className="flex items-center space-x-2 py-2 px-2 rounded-lg transition-all duration-200 group text-xs font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileDepartmentsOpen(false);
                        }}
                      >
                        <SafeIcon icon={dept.icon} className="text-emerald-600 text-sm flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="flex-1 min-w-0">{dept.name}</span>
                        {dept.priority === 'high' && (
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0" />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`font-semibold text-sm py-2.5 px-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${location.pathname === '/contact'
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-800 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-purple-100">
                  <SafeIcon icon={FiActivity} className="text-purple-600 text-sm" />
                </div>
                <span>Contact</span>
              </Link>
              <Link
                to="/appointment"
                className="px-4 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mt-4 bg-emerald-600 text-white hover:bg-emerald-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <SafeIcon icon={FiCalendar} className="text-sm" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
