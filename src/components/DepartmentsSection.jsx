import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiHeart, FiBrain, FiActivity, FiUsers, FiAmbulance, FiShield, FiEye, FiTrendingUp, FiArrowRight,
  FiChevronLeft, FiChevronRight, FiCalendar, FiStar, FiClock, FiZap, FiDroplet, FiSmile, FiFeather,
  FiTarget, FiPhone, FiMapPin, FiBaby, FiUser, FiMonitor, FiTool, FiGlobe, FiBookOpen, FiDownload,
  FiCheck, FiCheckCircle, FiAward, FiMail, FiSettings, FiScissors, FiWind, FiFilter
} = FiIcons;

const DepartmentsSection = () => {
  const [activeFilter, setActiveFilter] = useState('ivf');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const departments = [
    // Primary Departments
    { id: 'ivf', name: 'IVF & Fertility', icon: FiHeart, bgColor: 'bg-pink-50', iconColor: 'text-pink-600', borderColor: 'border-pink-200', accentColor: 'bg-pink-600', gradientColor: 'from-pink-500 to-rose-600', description: 'Advanced reproductive technologies and comprehensive fertility treatments with personalized care.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['IVF Treatment', 'IUI Procedures', 'ICSI Treatment', 'Fertility Preservation'], doctors: 8, rating: 4.9, emergencyAvailable: false, patients: '2K+', experience: '15+ Years', priority: 'high' },
    { id: 'pediatrics', name: 'Pediatrics', icon: FiBaby, bgColor: 'bg-blue-50', iconColor: 'text-blue-600', borderColor: 'border-blue-200', accentColor: 'bg-blue-600', gradientColor: 'from-blue-500 to-cyan-600', description: 'Comprehensive healthcare for children from newborn to adolescence with child-friendly facilities.', image: 'https://images.unsplash.com/photo-1551601651-2a1e50b60e7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Newborn Care', 'Vaccination', 'Pediatric Surgery', 'Child Development'], doctors: 12, rating: 4.9, emergencyAvailable: true, patients: '5K+', experience: '20+ Years', priority: 'high' },
    { id: 'obg', name: 'OBG', icon: FiUsers, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', borderColor: 'border-purple-200', accentColor: 'bg-purple-600', gradientColor: 'from-purple-500 to-violet-600', description: 'Complete women\'s healthcare including maternity, gynecological services, and reproductive health.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Maternity Care', 'Gynecological Surgery', 'High-Risk Pregnancy', 'Menopause Care'], doctors: 15, rating: 4.8, emergencyAvailable: true, patients: '3K+', experience: '25+ Years', priority: 'high' },
    { id: 'medicine', name: 'General Medicine', icon: FiActivity, bgColor: 'bg-green-50', iconColor: 'text-green-600', borderColor: 'border-green-200', accentColor: 'bg-green-600', gradientColor: 'from-green-500 to-emerald-600', description: 'Comprehensive primary care services for all ages with focus on prevention and wellness.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Primary Care', 'Chronic Disease Management', 'Preventive Health', 'Health Checkups'], doctors: 20, rating: 4.7, emergencyAvailable: true, patients: '8K+', experience: '30+ Years', priority: 'high' },
    { id: 'surgery', name: 'General Surgery', icon: FiScissors, bgColor: 'bg-red-50', iconColor: 'text-red-600', borderColor: 'border-red-200', accentColor: 'bg-red-600', gradientColor: 'from-red-500 to-rose-600', description: 'Advanced surgical procedures using minimally invasive techniques for faster recovery.', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Laparoscopic Surgery', 'General Surgery', 'Emergency Surgery', 'Day Care Surgery'], doctors: 10, rating: 4.8, emergencyAvailable: true, patients: '4K+', experience: '22+ Years', priority: 'high' },
    { id: 'ortho', name: 'Orthopedics', icon: FiActivity, bgColor: 'bg-orange-50', iconColor: 'text-orange-600', borderColor: 'border-orange-200', accentColor: 'bg-orange-600', gradientColor: 'from-orange-500 to-amber-600', description: 'Comprehensive orthopedic care including joint replacement and sports medicine.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Joint Replacement', 'Arthroscopy', 'Spine Surgery', 'Sports Medicine'], doctors: 8, rating: 4.9, emergencyAvailable: true, patients: '3K+', experience: '18+ Years', priority: 'high' },
    { id: 'urology', name: 'Urology', icon: FiDroplet, bgColor: 'bg-cyan-50', iconColor: 'text-cyan-600', borderColor: 'border-cyan-200', accentColor: 'bg-cyan-600', gradientColor: 'from-cyan-500 to-blue-600', description: 'Advanced urological treatments for kidney, bladder, and prostate conditions.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Kidney Stone Treatment', 'Prostate Care', 'Urological Surgery', 'Laparoscopic Urology'], doctors: 6, rating: 4.8, emergencyAvailable: true, patients: '2K+', experience: '15+ Years', priority: 'high' },
    { id: 'laparoscopy', name: 'Laparoscopy', icon: FiMonitor, bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600', borderColor: 'border-indigo-200', accentColor: 'bg-indigo-600', gradientColor: 'from-indigo-500 to-purple-600', description: 'Minimally invasive surgical procedures with advanced laparoscopic technology.', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Laparoscopic Surgery', 'Diagnostic Laparoscopy', 'Minimally Invasive Procedures', 'Hernia Repair'], doctors: 5, rating: 4.9, emergencyAvailable: false, patients: '1.5K+', experience: '12+ Years', priority: 'high' },
    // Specialized Services
    { id: 'neonatology', name: 'Neonatology', icon: FiBaby, bgColor: 'bg-pink-50', iconColor: 'text-pink-600', borderColor: 'border-pink-200', accentColor: 'bg-pink-600', gradientColor: 'from-pink-500 to-rose-600', description: 'Specialized intensive care for newborn infants with critical medical needs.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['NICU Care', 'Neonatal Surgery', 'Premature Baby Care', 'Newborn Screening'], doctors: 4, rating: 4.9, emergencyAvailable: true, patients: '800+', experience: '10+ Years', priority: 'medium' },
    { id: 'critical-care', name: 'Critical Care', icon: FiHeart, bgColor: 'bg-red-50', iconColor: 'text-red-600', borderColor: 'border-red-200', accentColor: 'bg-red-600', gradientColor: 'from-red-500 to-rose-600', description: 'Intensive care units with advanced life support systems and critical care specialists.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['ICU Care', 'Ventilator Support', 'Critical Care Medicine', 'Emergency Response'], doctors: 12, rating: 4.8, emergencyAvailable: true, patients: '2K+', experience: '20+ Years', priority: 'medium' },
    { id: 'anc', name: 'Antenatal Care', icon: FiUsers, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', borderColor: 'border-purple-200', accentColor: 'bg-purple-600', gradientColor: 'from-purple-500 to-violet-600', description: 'Comprehensive care during pregnancy ensuring maternal and fetal well-being.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Pregnancy Monitoring', 'High-Risk Pregnancy Care', 'Prenatal Screening', 'Birth Preparation'], doctors: 8, rating: 4.9, emergencyAvailable: false, patients: '1.8K+', experience: '15+ Years', priority: 'medium' },
    { id: 'pain-clinic', name: 'Pain Clinic', icon: FiActivity, bgColor: 'bg-blue-50', iconColor: 'text-blue-600', borderColor: 'border-blue-200', accentColor: 'bg-blue-600', gradientColor: 'from-blue-500 to-cyan-600', description: 'Specialized pain management treatments for chronic and acute pain conditions.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Pain Management', 'Interventional Pain Procedures', 'Physical Therapy', 'Medication Management'], doctors: 4, rating: 4.7, emergencyAvailable: false, patients: '1K+', experience: '8+ Years', priority: 'medium' },
    { id: 'infertility', name: 'Infertility', icon: FiHeart, bgColor: 'bg-pink-50', iconColor: 'text-pink-600', borderColor: 'border-pink-200', accentColor: 'bg-pink-600', gradientColor: 'from-pink-500 to-rose-600', description: 'Comprehensive fertility evaluation and treatment for male and female infertility.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Fertility Assessment', 'Hormone Therapy', 'IUI Treatment', 'Counseling'], doctors: 6, rating: 4.8, emergencyAvailable: false, patients: '1.2K+', experience: '12+ Years', priority: 'medium' },
    { id: 'endoscopy', name: 'Endoscopy', icon: FiEye, bgColor: 'bg-green-50', iconColor: 'text-green-600', borderColor: 'border-green-200', accentColor: 'bg-green-600', gradientColor: 'from-green-500 to-emerald-600', description: 'Advanced diagnostic and therapeutic endoscopic procedures for digestive disorders.', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Upper GI Endoscopy', 'Colonoscopy', 'ERCP', 'Endoscopic Surgery'], doctors: 3, rating: 4.8, emergencyAvailable: false, patients: '1.5K+', experience: '10+ Years', priority: 'medium' },
    { id: 'hysteroscopy', name: 'Hysteroscopy', icon: FiEye, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', borderColor: 'border-purple-200', accentColor: 'bg-purple-600', gradientColor: 'from-purple-500 to-violet-600', description: 'Advanced hysteroscopic procedures for uterine and fertility-related conditions.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80', services: ['Diagnostic Hysteroscopy', 'Operative Hysteroscopy', 'Fibroid Removal', 'Polypectomy'], doctors: 4, rating: 4.9, emergencyAvailable: false, patients: '800+', experience: '8+ Years', priority: 'medium' }
  ];

  const currentDepartment = departments.find(dept => dept.id === activeFilter);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <section id="departments" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Medical <span className="text-teal-600">Departments</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specialties with world-class facilities
          </p>
        </div>

        {/* Filter Carousel */}
        <div className="relative mb-8">
          <div className="flex items-center">
            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border transition-all duration-300 shadow-md ${canScrollLeft ? 'border-teal-200 text-teal-600 hover:border-teal-500 hover:bg-teal-50' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}
            >
              <SafeIcon icon={FiChevronLeft} className="text-sm" />
            </button>

            {/* Filters Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide space-x-2 mx-3 py-2"
              style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
            >
              {departments.map((department) => (
                <button
                  key={department.id}
                  onClick={() => setActiveFilter(department.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm border ${activeFilter === department.id ? `${department.bgColor} ${department.iconColor} ${department.borderColor} shadow-sm` : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200'}`}
                >
                  <SafeIcon icon={department.icon} className="text-sm" />
                  <span>{department.name}</span>
                  {department.priority === 'high' && (
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white border transition-all duration-300 shadow-md ${canScrollRight ? 'border-teal-200 text-teal-600 hover:border-teal-500 hover:bg-teal-50' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}
            >
              <SafeIcon icon={FiChevronRight} className="text-sm" />
            </button>
          </div>
        </div>

        {/* Compact Department Card */}
        {currentDepartment && (
          <div
            key={currentDepartment.id}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                {/* Image Side */}
                <div className="relative overflow-hidden">
                  <img
                    src={currentDepartment.image}
                    alt={currentDepartment.name}
                    className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                  />
                  {/* Priority Badge */}
                  {currentDepartment.priority === 'high' && (
                    <div className="absolute top-3 left-3">
                      <div className="bg-teal-600 text-white rounded-lg px-2 py-1 text-xs font-semibold">
                        Featured Department
                      </div>
                    </div>
                  )}
                  {/* Emergency Badge */}
                  <div className="absolute top-3 right-3">
                    {currentDepartment.emergencyAvailable && (
                      <div className="bg-red-500 text-white rounded-lg px-2 py-1 text-xs font-semibold">
                        24/7 Available
                      </div>
                    )}
                  </div>
                  {/* Bottom Info */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${currentDepartment.bgColor} rounded-lg flex items-center justify-center ${currentDepartment.borderColor} border`}>
                          <SafeIcon icon={currentDepartment.icon} className={`text-lg ${currentDepartment.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{currentDepartment.name}</h3>
                          <p className="text-xs text-gray-600">{currentDepartment.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className={`w-1 h-6 ${currentDepartment.accentColor} rounded-full`}></div>
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                        {currentDepartment.name} Department
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {currentDepartment.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center text-sm">
                      <SafeIcon icon={FiActivity} className={`mr-2 ${currentDepartment.iconColor}`} />
                      Key Services
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentDepartment.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                          <div className={`w-1.5 h-1.5 ${currentDepartment.accentColor} rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-700 text-xs font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="text-lg font-bold text-gray-800">{currentDepartment.doctors}</div>
                        <div className="text-xs text-gray-600">Doctors</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="text-lg font-bold text-gray-800">{currentDepartment.patients}</div>
                        <div className="text-xs text-gray-600">Patients</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="text-lg font-bold text-gray-800 flex items-center justify-center">
                          <SafeIcon icon={FiStar} className="text-yellow-500 text-sm mr-1" />
                          {currentDepartment.rating}
                        </div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Link
                        to={`/department/${currentDepartment.id}`}
                        className={`bg-gradient-to-r ${currentDepartment.gradientColor} text-white py-3 px-4 rounded-lg font-semibold hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2 text-sm`}
                      >
                        <span>Learn More</span>
                        <SafeIcon icon={FiArrowRight} className="text-sm" />
                      </Link>
                      <Link
                        to="/appointment"
                        className="border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                      >
                        <SafeIcon icon={FiCalendar} className="text-sm" />
                        <span>Book Appointment</span>
                      </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center justify-center space-x-4 pt-3 border-t border-gray-200">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <SafeIcon icon={FiPhone} className="text-xs" />
                        <span className="text-xs">+91 40 4012 3456</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <SafeIcon icon={FiMapPin} className="text-xs" />
                        <span className="text-xs">Hyderabad</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DepartmentsSection;