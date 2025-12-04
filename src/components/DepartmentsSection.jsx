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
    // Primary Departments (keeping expanded descriptions)
    { id: 'ivf', name: 'IVF & Fertility', icon: FiHeart, bgColor: 'bg-pink-50', iconColor: 'text-pink-600', borderColor: 'border-pink-200', accentColor: 'bg-pink-600', gradientColor: 'from-pink-500 to-rose-600', 
      description: 'Our IVF & Fertility department offers state-of-the-art reproductive technologies including advanced IVF cycles, ICSI procedures, and comprehensive fertility preservation options. With personalized treatment protocols and world-class embryology labs, we help couples achieve their parenthood dreams.', 
      image: '/homepage/IVF & Fertility-Department.png', services: ['IVF Treatment', 'IUI Procedures', 'ICSI Treatment', 'Fertility Preservation', 'Embryo Freezing', 'PGD/PGS Testing'], doctors: 8, rating: 4.9, emergencyAvailable: false, patients: '2K+', experience: '15+ Years', priority: 'high' },
    { id: 'pediatrics', name: 'Pediatrics', icon: FiBaby, bgColor: 'bg-blue-50', iconColor: 'text-blue-600', borderColor: 'border-blue-200', accentColor: 'bg-blue-600', gradientColor: 'from-blue-500 to-cyan-600', 
      description: 'Comprehensive pediatric care from newborns to adolescents featuring child-friendly facilities, vaccination programs, developmental assessments, and specialized pediatric surgical services. Our expert team ensures holistic child health monitoring.', 
      image: '/homepage/Pediatrics-Department.png', services: ['Newborn Care', 'Vaccination', 'Pediatric Surgery', 'Child Development', 'Growth Monitoring', 'Neonatal Intensive Care'], doctors: 12, rating: 4.9, emergencyAvailable: true, patients: '5K+', experience: '20+ Years', priority: 'high' },
    { id: 'obg', name: 'OBG', icon: FiUsers, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', borderColor: 'border-purple-200', accentColor: 'bg-purple-600', gradientColor: 'from-purple-500 to-violet-600', 
      description: 'Complete women\'s healthcare encompassing high-risk pregnancy management, advanced gynecological surgeries, fertility treatments, and menopause care programs. Our OBG specialists provide comprehensive maternal-fetal medicine services.', 
      image: '/homepage/OBG-Department.png', services: ['Maternity Care', 'Gynecological Surgery', 'High-Risk Pregnancy', 'Menopause Care', 'Laparoscopic Gynecology', 'Fetal Medicine'], doctors: 15, rating: 4.8, emergencyAvailable: true, patients: '3K+', experience: '25+ Years', priority: 'high' },
    { id: 'medicine', name: 'General Medicine', icon: FiActivity, bgColor: 'bg-green-50', iconColor: 'text-green-600', borderColor: 'border-green-200', accentColor: 'bg-green-600', gradientColor: 'from-green-500 to-emerald-600', 
      description: 'Primary care excellence for all age groups featuring comprehensive health checkups, chronic disease management programs, preventive healthcare initiatives, and personalized wellness counseling. Our internal medicine specialists focus on holistic patient care.', 
      image: '/homepage/General-Medicine-Department.png', services: ['Primary Care', 'Chronic Disease Management', 'Preventive Health', 'Health Checkups', 'Executive Health Programs', 'Lifestyle Counseling'], doctors: 20, rating: 4.7, emergencyAvailable: true, patients: '8K+', experience: '30+ Years', priority: 'high' },
    { id: 'surgery', name: 'General Surgery', icon: FiScissors, bgColor: 'bg-red-50', iconColor: 'text-red-600', borderColor: 'border-red-200', accentColor: 'bg-red-600', gradientColor: 'from-red-500 to-rose-600', 
      description: 'Advanced general surgical procedures utilizing minimally invasive laparoscopic techniques, robotic-assisted surgeries, and day-care surgical options for rapid recovery and minimal scarring. Our surgeons specialize in complex abdominal procedures.', 
      image: '/homepage/General-Surgery-Department.png', services: ['Laparoscopic Surgery', 'General Surgery', 'Emergency Surgery', 'Day Care Surgery', 'Robotic Surgery', 'Colorectal Surgery'], doctors: 10, rating: 4.8, emergencyAvailable: true, patients: '4K+', experience: '22+ Years', priority: 'high' },
    { id: 'ortho', name: 'Orthopedics', icon: FiActivity, bgColor: 'bg-orange-50', iconColor: 'text-orange-600', borderColor: 'border-orange-200', accentColor: 'bg-orange-600', gradientColor: 'from-orange-500 to-amber-600', 
      description: 'Complete musculoskeletal care including joint replacement surgeries, arthroscopic procedures, spine surgeries, and sports medicine rehabilitation programs. Our orthopedic specialists employ advanced implant technologies.', 
      image: '/homepage/Orthopedics-Department.png', services: ['Joint Replacement', 'Arthroscopy', 'Spine Surgery', 'Sports Medicine', 'Trauma Care', 'Pediatric Orthopedics'], doctors: 8, rating: 4.9, emergencyAvailable: true, patients: '3K+', experience: '18+ Years', priority: 'high' },
    { id: 'urology', name: 'Urology', icon: FiDroplet, bgColor: 'bg-cyan-50', iconColor: 'text-cyan-600', borderColor: 'border-cyan-200', accentColor: 'bg-cyan-600', gradientColor: 'from-cyan-500 to-blue-600', 
      description: 'Comprehensive urological care for kidney stones, prostate disorders, urinary incontinence, and male infertility using laser technologies, endourology procedures, and reconstructive surgeries. Our specialists provide personalized treatment plans.', 
      image: '/homepage/Urology-Department.png', services: ['Kidney Stone Treatment', 'Prostate Care', 'Urological Surgery', 'Laparoscopic Urology', 'Laser Lithotripsy', 'Male Infertility'], doctors: 6, rating: 4.8, emergencyAvailable: true, patients: '2K+', experience: '15+ Years', priority: 'high' },
    { id: 'laparoscopy', name: 'Laparoscopy', icon: FiMonitor, bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600', borderColor: 'border-indigo-200', accentColor: 'bg-indigo-600', gradientColor: 'from-indigo-500 to-purple-600', 
      description: 'State-of-the-art minimally invasive surgical center offering advanced laparoscopic procedures across multiple specialties with 3D laparoscopy systems and single-incision techniques for superior precision.', 
      image: '/homepage/Laparoscopy-Department.png', services: ['Laparoscopic Surgery', 'Diagnostic Laparoscopy', 'Minimally Invasive Procedures', 'Hernia Repair', 'Bariatric Surgery', 'Thoracoscopy'], doctors: 5, rating: 4.9, emergencyAvailable: false, patients: '1.5K+', experience: '12+ Years', priority: 'high' },
    // ... rest of departments remain same
    { id: 'neonatology', name: 'Neonatology', icon: FiBaby, bgColor: 'bg-pink-50', iconColor: 'text-pink-600', borderColor: 'border-pink-200', accentColor: 'bg-pink-600', gradientColor: 'from-pink-500 to-rose-600', description: 'Specialized intensive care for newborn infants with critical medical needs.', image: '/homepage/Neonatology-Department.png', services: ['NICU Care', 'Neonatal Surgery', 'Premature Baby Care', 'Newborn Screening'], doctors: 4, rating: 4.9, emergencyAvailable: true, patients: '800+', experience: '10+ Years', priority: 'medium' },
    { id: 'critical-care', name: 'Critical Care', icon: FiHeart, bgColor: 'bg-red-50', iconColor: 'text-red-600', borderColor: 'border-red-200', accentColor: 'bg-red-600', gradientColor: 'from-red-500 to-rose-600', description: 'Intensive care units with advanced life support systems and critical care specialists.', image: '/homepage/Critical-Care.png', services: ['ICU Care', 'Ventilator Support', 'Critical Care Medicine', 'Emergency Response'], doctors: 12, rating: 4.8, emergencyAvailable: true, patients: '2K+', experience: '20+ Years', priority: 'medium' },
    { id: 'anc', name: 'Antenatal Care', icon: FiUsers, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', borderColor: 'border-purple-200', accentColor: 'bg-purple-600', gradientColor: 'from-purple-500 to-violet-600', description: 'Comprehensive care during pregnancy ensuring maternal and fetal well-being.', image: '/homepage/Antenatal-Care-Department.png', services: ['Pregnancy Monitoring', 'High-Risk Pregnancy Care', 'Prenatal Screening', 'Birth Preparation'], doctors: 8, rating: 4.9, emergencyAvailable: false, patients: '1.8K+', experience: '15+ Years', priority: 'medium' },
    { id: 'pain-clinic', name: 'Pain Clinic', icon: FiActivity, bgColor: 'bg-blue-50', iconColor: 'text-blue-600', borderColor: 'border-blue-200', accentColor: 'bg-blue-600', gradientColor: 'from-blue-500 to-cyan-600', description: 'Specialized pain management treatments for chronic and acute pain conditions.', image: '/homepage/Pain-Clinic-Department.png', services: ['Pain Management', 'Interventional Pain Procedures', 'Physical Therapy', 'Medication Management'], doctors: 4, rating: 4.7, emergencyAvailable: false, patients: '1K+', experience: '8+ Years', priority: 'medium' },
    { id: 'infertility', name: 'Infertility', icon: FiHeart, bgColor: 'bg-pink-50', iconColor: 'text-pink-600', borderColor: 'border-pink-200', accentColor: 'bg-pink-600', gradientColor: 'from-pink-500 to-rose-600', description: 'Comprehensive fertility evaluation and treatment for male and female infertility.', image: '/homepage/Infertility-Department.png', services: ['Fertility Assessment', 'Hormone Therapy', 'IUI Treatment', 'Counseling'], doctors: 6, rating: 4.8, emergencyAvailable: false, patients: '1.2K+', experience: '12+ Years', priority: 'medium' },
    { id: 'endoscopy', name: 'Endoscopy', icon: FiEye, bgColor: 'bg-green-50', iconColor: 'text-green-600', borderColor: 'border-green-200', accentColor: 'bg-green-600', gradientColor: 'from-green-500 to-emerald-600', description: 'Advanced diagnostic and therapeutic endoscopic procedures for digestive disorders.', image: '/homepage/Endoscopy-Department.png', services: ['Upper GI Endoscopy', 'Colonoscopy', 'ERCP', 'Endoscopic Surgery'], doctors: 3, rating: 4.8, emergencyAvailable: false, patients: '1.5K+', experience: '10+ Years', priority: 'medium' },
    { id: 'hysteroscopy', name: 'Hysteroscopy', icon: FiEye, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', borderColor: 'border-purple-200', accentColor: 'bg-purple-600', gradientColor: 'from-purple-500 to-violet-600', description: 'Advanced hysteroscopic procedures for uterine and fertility-related conditions.', image: '/homepage/Hysteroscopy-Department.png', services: ['Diagnostic Hysteroscopy', 'Operative Hysteroscopy', 'Fibroid Removal', 'Polypectomy'], doctors: 4, rating: 4.9, emergencyAvailable: false, patients: '800+', experience: '8+ Years', priority: 'medium' }
  ];

  const currentDepartment = departments.find(dept => dept.id === activeFilter);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
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
    <section id="departments" className="py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Medical <span className="text-teal-600">Departments</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            Comprehensive healthcare services across multiple specialties with world-class facilities
          </p>
        </div>

        {/* Compact Filter Carousel */}
        <div className="relative mb-8">
          <div className="flex items-center max-w-6xl mx-auto">
            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white border transition-all duration-300 shadow-md hover:shadow-lg ${
                canScrollLeft
                  ? 'border-teal-300 text-teal-600 hover:border-teal-500 hover:bg-teal-50 hover:scale-105'
                  : 'border-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <SafeIcon icon={FiChevronLeft} className="text-sm" />
            </button>

            {/* Filters Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide space-x-2 mx-3 py-2 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {departments.map((department) => (
                <button
                  key={department.id}
                  onClick={() => setActiveFilter(department.id)}
                  className={`snap-start flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap text-xs md:text-sm border hover:scale-[1.02] ${
                    activeFilter === department.id
                      ? `${department.bgColor} ${department.iconColor} ${department.borderColor} shadow-md ring-1 ring-teal-200/50 scale-[1.02]`
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <SafeIcon icon={department.icon} className="text-sm flex-shrink-0" />
                  <span className="font-semibold">{department.name}</span>
                  {department.priority === 'high' && (
                    <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-sm flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white border transition-all duration-300 shadow-md hover:shadow-lg ${
                canScrollRight
                  ? 'border-teal-300 text-teal-600 hover:border-teal-500 hover:bg-teal-50 hover:scale-105'
                  : 'border-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <SafeIcon icon={FiChevronRight} className="text-sm" />
            </button>
          </div>
        </div>

        {/* WIDER Compact Department Card - Responsive Height */}
        {currentDepartment && (
          <div key={currentDepartment.id} className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row min-h-[300px] lg:h-[440px]">
                {/* Image Side ~35% - Responsive */}
                <div className="relative lg:w-[35%] w-full h-48 lg:h-full">
                  <img
                    src={currentDepartment.image}
                    alt={currentDepartment.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Priority Badge */}
                  {currentDepartment.priority === 'high' && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-teal-600 text-white rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wide shadow-lg">
                        Featured
                      </div>
                    </div>
                  )}
                  
                  {/* Emergency Badge */}
                  {currentDepartment.emergencyAvailable && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-red-500 text-white rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wide shadow-lg animate-pulse">
                        24/7
                      </div>
                    </div>
                  )}
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-3 right-3 z-10">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-white/60 shadow-2xl">
                      <div className="flex items-center space-x-2">
                        <div className={`w-10 h-10 ${currentDepartment.bgColor} rounded-xl flex items-center justify-center ${currentDepartment.borderColor} border-2 shadow-lg flex-shrink-0`}>
                          <SafeIcon icon={currentDepartment.icon} className={`text-lg ${currentDepartment.iconColor}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-gray-800 text-sm truncate">{currentDepartment.name}</h3>
                          <p className="text-xs text-gray-600 font-medium">{currentDepartment.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side ~65% - Mobile Optimized */}
                <div className="lg:w-[65%] w-full p-4 lg:p-7 flex flex-col bg-gradient-to-br from-white via-white/95 to-gray-50/80">
                  {/* Mobile Compact Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 lg:mb-4">
                    <div className="flex items-center space-x-2 mb-2 lg:mb-0">
                      <div className={`w-1.5 h-6 ${currentDepartment.accentColor} rounded-full shadow-md flex-shrink-0`} />
                      <h2 className="text-lg lg:text-2xl font-bold text-gray-800 leading-tight">
                        {currentDepartment.name}
                      </h2>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <SafeIcon icon={FiStar} className="text-base lg:text-lg" />
                        <span className="font-bold">{currentDepartment.rating}</span>
                      </div>
                      <span className="text-gray-500">({currentDepartment.patients})</span>
                    </div>
                  </div>

                  {/* Description - Mobile Optimized */}
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-4 lg:mb-5 line-clamp-2 lg:line-clamp-3">
                    {currentDepartment.description}
                  </p>

                  {/* Stats - Mobile Optimized */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 mb-4 lg:mb-5">
                    {/* Doctors */}
                    <div className="group p-2 lg:p-3 bg-white/90 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center hover:scale-[1.02] h-16 lg:h-20">
                      <div className="text-lg lg:text-2xl font-bold text-gray-800 mb-0 lg:mb-1">{currentDepartment.doctors}</div>
                      <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">Doctors</div>
                    </div>
                    
                    {/* Services Count */}
                    <div className="group p-2 lg:p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg lg:rounded-xl border border-emerald-200/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center hover:scale-[1.02] h-16 lg:h-20">
                      <div className="text-lg lg:text-2xl font-bold text-emerald-700">{currentDepartment.services.length}</div>
                      <div className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">Services</div>
                    </div>

                    {/* Emergency Status */}
                    <div className="group p-2 lg:p-3 bg-white/90 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center hover:scale-[1.02] h-16 lg:h-20">
                      <div className={`text-sm font-bold ${currentDepartment.emergencyAvailable ? 'text-red-600' : 'text-gray-500'}`}>
                        {currentDepartment.emergencyAvailable ? '24/7' : 'Scheduled'}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide hidden lg:block">Availability</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide lg:hidden">Available</div>
                    </div>

                    {/* Priority */}
                    {currentDepartment.priority === 'high' && (
                      <div className="group p-2 lg:p-3 bg-gradient-to-r from-teal-500/10 to-teal-600/10 border border-teal-200/50 rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col justify-center hover:scale-[1.02] h-16 lg:h-20">
                        <div className="text-xs lg:text-sm font-bold text-teal-700 uppercase tracking-wider flex items-center">
                          <SafeIcon icon={FiAward} className="text-xs mr-1" />
                          <span className="hidden lg:inline">Featured</span>
                          <span className="lg:hidden">Top</span>
                        </div>
                        <div className="text-xs text-teal-600 font-semibold hidden lg:block">Priority Dept</div>
                        <div className="text-xs text-teal-600 font-semibold lg:hidden">Priority</div>
                      </div>
                    )}
                  </div>

                  {/* Services - Mobile Optimized */}
                  <div className="flex-1 mb-3 lg:mb-4">
                    <div className="flex items-center space-x-2 lg:space-x-3 mb-2 lg:mb-3">
                      <SafeIcon icon={FiActivity} className={`text-base lg:text-lg ${currentDepartment.iconColor}`} />
                      <span className="font-bold text-gray-800 text-xs lg:text-sm uppercase tracking-wide">Core Services</span>
                    </div>
                    <div className="flex overflow-x-auto scrollbar-hide gap-1.5 lg:gap-2 h-12 lg:h-16 items-center">
                      {currentDepartment.services.slice(0, 6).map((service, idx) => (
                        <div key={idx} className="group min-w-0 flex-shrink-0 max-w-[120px] lg:max-w-[140px] p-2 lg:p-2.5 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm hover:shadow-md hover:bg-white hover:border-gray-300/50 transition-all duration-200 hover:scale-[1.05] hover:-translate-y-0.5">
                          <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 truncate block leading-tight">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer - Mobile Optimized */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-3 border-t border-gray-200/50 gap-3 lg:gap-0">
                    {/* Contact - Mobile Optimized */}
                    <div className="flex items-center space-x-3 lg:space-x-4 text-sm">
                      <a href="tel:+914040123456" className="flex items-center space-x-1.5 text-gray-700 hover:text-teal-600 font-medium transition-all group">
                        <SafeIcon icon={FiPhone} className="text-sm group-hover:scale-110" />
                        <span className="hidden sm:inline">+91 40 4012 3456</span>
                        <span className="sm:hidden">Call Now</span>
                      </a>
                      <div className="w-px h-4 bg-gray-300 hidden sm:block" />
                      <span className="items-center space-x-1 text-gray-700 font-medium hidden sm:flex">
                        <SafeIcon icon={FiMapPin} className="text-sm" />
                        <span>Hyderabad</span>
                      </span>
                    </div>

                    {/* Action Buttons - Mobile Optimized */}
                    <div className="flex gap-2 w-full lg:w-auto">
                      <Link
                        to={`/department/${currentDepartment.id}`}
                        className={`bg-gradient-to-r ${currentDepartment.gradientColor} text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg lg:rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-[1.05] flex-1 lg:flex-none`}
                      >
                        <span>Details</span>
                        <SafeIcon icon={FiArrowRight} className="text-sm" />
                      </Link>
                      <Link
                        to="/appointment"
                        className="border-2 border-gray-300 text-gray-700 px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg lg:rounded-xl font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-[1.05] flex-1 lg:flex-none"
                      >
                        <SafeIcon icon={FiCalendar} className="text-sm" />
                        <span>Book</span>
                      </Link>
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
