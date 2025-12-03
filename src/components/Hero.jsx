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
    { icon: FiCheckCircle, title: 'Get Health Checkup', color: 'text-teal-600', link: '/services/health-checkup' },
    { icon: FiHome, title: 'Homecare', color: 'text-teal-600', link: '/services/homecare' },
    { icon: FiActivity, title: 'Book a Test', color: 'text-teal-600', link: '/services/tests' },
    { icon: FiGlobe, title: 'International Patients', color: 'text-teal-600', link: '/international' }
  ];

  const hospitalStats = [
    { icon: FiUserCheck, label: 'Patients Treated', value: '50K+', color: 'text-blue-600', description: 'Happy patients across all departments' },
    { icon: FiAward, label: 'Expert Doctors', value: '100+', color: 'text-green-600', description: 'Qualified specialists and consultants' },
    { icon: FiStar, label: 'Patient Rating', value: '4.9/5', color: 'text-yellow-600', description: 'Average satisfaction rating' },
    { icon: FiClock, label: 'Years of Service', value: '15+', color: 'text-purple-600', description: 'Trusted healthcare since 2009' },
    { icon: FiActivity, label: 'Departments', value: '15+', color: 'text-teal-600', description: 'Specialized medical departments' },
    { icon: FiShield, label: 'Success Rate', value: '98%', color: 'text-red-600', description: 'Treatment success across procedures' }
  ];

  const handleDepartmentSearch = (term) => {
    setDepartment(term);
    
    // Clear selected department if search term doesn't match current selection
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
    <div className="relative bg-gradient-to-r from-teal-500 to-cyan-600 overflow-hidden">

      {/* WhatsApp Button */}
      <div className="fixed right-6 bottom-6 z-50">
        <a 
          href="https://wa.me/914040123456" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
        </a>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-lg font-medium opacity-90">Our Medical Experts are here for you.</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Get quality medical care
                <br />
                and treatment with us.
              </h1>
              <p className="text-lg lg:text-xl opacity-90">
                Find the required doctor and schedule your appointment now.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-3 flex items-center gap-3 relative">
              <div className="flex items-center gap-3 flex-1 relative">
                <SafeIcon icon={FiSearch} className="text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for Department / Specialties (e.g., IVF, Pediatrics, Surgery...)"
                  value={department}
                  onChange={(e) => handleDepartmentSearch(e.target.value)}
                  className="w-full outline-none text-gray-700 placeholder-gray-400 text-lg py-2"
                />
                
                {/* Department Dropdown */}
                {showDropdown && filteredDepartments.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-64 overflow-y-auto">
                    {filteredDepartments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => selectDepartment(dept)}
                        className="flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 w-full text-left"
                      >
                        <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${dept.color}`}>
                          <SafeIcon icon={dept.icon} className="text-xl" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{dept.name}</div>
                          <div className="text-sm text-gray-500">{dept.doctors} doctors • {dept.patients} patients • ⭐ {dept.rating}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to={getBookingLink()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
              >
                {selectedDepartmentId ? 'Book Department' : 'Book Now'}
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Image - Medical Facilities */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full h-96">
              <img 
                src="/homepage/Advanced Medical Facilities-Banner-image.png" 
                alt="Advanced Medical Facilities"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-xl p-3 group-hover:bg-teal-50 transition-all duration-300">
                    <SafeIcon icon={service.icon} className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <span className="text-white font-semibold group-hover:text-gray-800 transition-all duration-300 text-sm lg:text-base">
                    {service.title}
                  </span>
                </div>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 text-white group-hover:text-teal-600 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Hero;