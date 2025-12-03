import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiCalendar, FiUser, FiChevronLeft, FiChevronRight } = FiIcons;

const DoctorsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const doctors = [
    { name: 'Dr. Sarah Johnson', specialization: 'Cardiologist', experience: '15 years', rating: 4.9, reviews: 120, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400', bio: 'Specializes in interventional cardiology with extensive experience in complex cardiac procedures.', department: 'cardiology' },
    { name: 'Dr. Michael Chen', specialization: 'Neurologist', experience: '18 years', rating: 4.8, reviews: 95, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400', bio: 'Expert in treating complex neurological disorders with innovative treatment approaches.', department: 'neurology' },
    { name: 'Dr. Emily Rodriguez', specialization: 'Pediatrician', experience: '12 years', rating: 4.9, reviews: 85, image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400', bio: 'Provides compassionate pediatric care with focus on child development and family wellness.', department: 'pediatrics' },
    { name: 'Dr. David Wilson', specialization: 'Orthopedic Surgeon', experience: '20 years', rating: 4.9, reviews: 110, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400', bio: 'Specializes in joint replacement and sports medicine with minimally invasive techniques.', department: 'orthopedics' },
    { name: 'Dr. Priya Sharma', specialization: 'Emergency Medicine', experience: '14 years', rating: 4.8, reviews: 102, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400', bio: 'Expert in emergency care and trauma management with rapid response expertise.', department: 'emergency' },
    { name: 'Dr. Rajesh Kumar', specialization: 'Oncologist', experience: '16 years', rating: 4.9, reviews: 88, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400', bio: 'Specialized in comprehensive cancer treatment with personalized care approaches.', department: 'oncology' }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for precision
    }
  };

  const scrollBy = (amount) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % doctors.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Initial check
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const DoctorCard = ({ doctor }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 w-full">
      <div className="relative overflow-hidden h-48">
        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
        <p className="text-teal-600 font-semibold text-sm">{doctor.specialization}</p>
        <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 mt-2">
          <SafeIcon icon={FiStar} className="text-yellow-400" />
          <span>{doctor.rating} ({doctor.reviews} reviews) | {doctor.experience}</span>
        </div>
        <p className="text-gray-600 text-xs my-4 line-clamp-2 h-8">{doctor.bio}</p>
        <div className="mt-4">
          <Link to="/appointment" className="w-full bg-teal-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-1 text-sm">
            <SafeIcon icon={FiCalendar} className="text-sm" />
            <span>Book Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section id="doctors" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our <span className="text-teal-600">Expert Doctors</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Highly qualified medical professionals dedicated to providing exceptional healthcare.</p>
        </div>

        {/* Desktop & Tablet Slider */}
        <div className="hidden md:block relative">
          <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 -mx-4 px-4">
            {doctors.map((doctor, index) => (
              <div key={index} className="flex-shrink-0 w-72">
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
          <button onClick={() => scrollBy(-312)} disabled={!canScrollLeft} className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border-2 shadow-lg transition-all duration-300 flex items-center justify-center ${canScrollLeft ? 'border-teal-200 text-teal-600 hover:bg-teal-50' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}>
            <SafeIcon icon={FiChevronLeft} className="text-lg" />
          </button>
          <button onClick={() => scrollBy(312)} disabled={!canScrollRight} className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border-2 shadow-lg transition-all duration-300 flex items-center justify-center ${canScrollRight ? 'border-teal-200 text-teal-600 hover:bg-teal-50' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}>
            <SafeIcon icon={FiChevronRight} className="text-lg" />
          </button>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden relative h-[420px]">
            <div className="absolute w-full">
              <DoctorCard doctor={doctors[currentSlide]} />
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-2">
            {doctors.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-teal-600 w-6' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;