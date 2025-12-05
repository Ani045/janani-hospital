import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiArrowRight, FiPhone, FiHeart, FiBaby, FiUsers, FiActivity, FiScissors,
  FiDroplet, FiMonitor, FiEye, FiStar, FiTrendingUp, FiAward, FiShield,
  FiClock, FiUserCheck, FiMapPin, FiSearch, FiFilter, FiHome, FiCalendar,
  FiGlobe, FiCheckCircle, FiMessageCircle
} = FiIcons;

const Hero = () => {
  const [department, setDepartment] = useState('');
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const allDepartments = [
    { id: 'ivf', name: 'IVF & Fertility', icon: FiHeart, color: 'text-pink-600', patients: '2K+', doctors: 8, rating: 4.9, keywords: ['fertility', 'ivf', 'reproductive', 'pregnancy'] },
    { id: 'pediatrics', name: 'Pediatrics', icon: FiBaby, color: 'text-blue-600', patients: '5K+', doctors: 12, rating: 4.9, keywords: ['children', 'kids', 'pediatric', 'child', 'baby'] },
    { id: 'obg', name: 'OBG', icon: FiUsers, color: 'text-purple-600', patients: '3K+', doctors: 15, rating: 4.8, keywords: ['women', 'pregnancy', 'maternity', 'gynecology', 'obstetrics'] },
    { id: 'medicine', name: 'General Medicine', icon: FiActivity, color: 'text-green-600', patients: '8K+', doctors: 20, rating: 4.7, keywords: ['general', 'medicine', 'primary', 'care', 'physician'] },
    { id: 'surgery', name: 'General Surgery', icon: FiScissors, color: 'text-red-600', patients: '4K+', doctors: 10, rating: 4.8, keywords: ['surgery', 'operation', 'surgical', 'surgeon'] },
    { id: 'urology', name: 'Urology', icon: FiDroplet, color: 'text-cyan-600', patients: '2K+', doctors: 6, rating: 4.8, keywords: ['kidney', 'bladder', 'urological', 'urine'] },
    { id: 'critical-care', name: 'Critical Care', icon: FiMonitor, color: 'text-orange-600', patients: '2K+', doctors: 12, rating: 4.8, keywords: ['icu', 'emergency', 'critical', 'intensive'] },
    { id: 'laparoscopy', name: 'Laparoscopy', icon: FiEye, color: 'text-indigo-600', patients: '1.5K+', doctors: 5, rating: 4.9, keywords: ['laparoscopic', 'minimally invasive', 'keyhole'] },
    { id: 'orthopedics', name: 'Orthopedics', icon: FiShield, color: 'text-orange-500', patients: '3K+', doctors: 8, rating: 4.9, keywords: ['bone', 'joint', 'fracture', 'orthopedic'] }
  ];

  const services = [
    { icon: FiCheckCircle, title: 'Health Check', color: 'text-emerald-500', link: '/services/health-checkup' },
    { icon: FiHome, title: 'Homecare', color: 'text-emerald-500', link: '/services/homecare' },
    { icon: FiActivity, title: 'Book a Test', color: 'text-emerald-500', link: '/services/tests' },
    { icon: FiGlobe, title: 'International', color: 'text-emerald-500', link: '/international' }
  ];

  const handleDepartmentSearch = (term) => {
    setDepartment(term);

    if (selectedDepartmentId) {
      const selectedDept = allDepartments.find(d => d.id === selectedDepartmentId);
      if (selectedDept && !selectedDept.name.toLowerCase().includes(term.toLowerCase())) {
        setSelectedDepartmentId(null);
      }
    }

    if (term.trim()) {
      const filtered = allDepartments.filter(dept =>
        dept.name.toLowerCase().includes(term.toLowerCase()) ||
        dept.keywords.some(keyword => keyword.toLowerCase().includes(term.toLowerCase()))
      );
      setFilteredDepartments(filtered);
      setShowDropdown(true);
    } else {
      setFilteredDepartments([]);
      setShowDropdown(false);
      setSelectedDepartmentId(null);
    }
  };

  const selectDepartment = (dept) => {
    setDepartment(dept.name);
    setSelectedDepartmentId(dept.id);
    setShowDropdown(false);
    setFilteredDepartments([]);
  };

  const getBookingLink = () => {
    if (selectedDepartmentId) {
      return `/department/${selectedDepartmentId}`;
    }
    return '/appointment';
  };

  return (
    <div className="relative bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 overflow-hidden">
      {/* Lighter Black Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content - Compact */}
          <div className="text-white space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <p className="text-base lg:text-lg font-medium opacity-90">Medical Experts Ready for You</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Quality Medical Care
                <span className="block text-emerald-100">& Treatment</span>
              </h1>
              <p className="text-base lg:text-lg opacity-90 max-w-md">
                Find specialist doctors and book appointments instantly.
              </p>
            </div>

            {/* Compact Search Bar */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-2 sm:p-3 flex items-center gap-2 relative">
              <div className="flex items-center gap-2 flex-1 relative">
                <SafeIcon icon={FiSearch} className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search departments (IVF, Pediatrics...)"
                  value={department}
                  onChange={(e) => handleDepartmentSearch(e.target.value)}
                  className="w-full outline-none text-gray-700 placeholder-gray-400 text-base sm:text-lg py-2 px-1"
                />

                {/* Compact Dropdown */}
                {showDropdown && filteredDepartments.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-56 overflow-y-auto">
                    {filteredDepartments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => selectDepartment(dept)}
                        className="flex items-center space-x-3 p-3 hover:bg-emerald-50/50 transition-all duration-200 border-b border-gray-50 last:border-b-0 w-full text-left"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${dept.color} shadow-sm`}>
                          <SafeIcon icon={dept.icon} className="text-lg" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-gray-800 truncate">{dept.name}</div>
                          <div className="text-xs text-gray-500">{dept.doctors} doctors • {dept.patients} • ⭐{dept.rating}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to={getBookingLink()}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold flex items-center gap-1.5 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                {selectedDepartmentId ? 'Book Now' : 'Book Dept'}
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Right Image - Compact */}
          <div className="relative lg:flex justify-center items-center hidden">
            <div className="relative w-full max-w-md h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/homepage/Advanced Medical Facilities-Banner-image.png"
                alt="Advanced Medical Facilities"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Compact Service Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 lg:mt-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-xl p-4 sm:p-5 hover:bg-white/80 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-emerald-50 group-hover:scale-105 transition-all duration-300">
                    <SafeIcon icon={service.icon} className={`w-5 h-5 sm:w-6 sm:h-6 ${service.color}`} />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base group-hover:text-gray-800 transition-all duration-300 truncate">
                    {service.title}
                  </span>
                </div>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-emerald-600 transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
