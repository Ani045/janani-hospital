import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiPhone } = FiIcons;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Janani Hospital - Healing Hands", subtitle: "Providing world-class medical care with compassion and cutting-edge technology for your family's health and wellbeing", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", cta: "Our Services", link: "#departments" },
    { title: "Expert Medical Professionals", subtitle: "Trusted specialists dedicated to your health and wellbeing with personalized care approach and advanced treatment", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", cta: "Meet Our Doctors", link: "#doctors" },
    { title: "Advanced Medical Facilities", subtitle: "Modern equipment and technology for precise diagnosis and effective treatment outcomes with 24/7 emergency care", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", cta: "Learn More", link: "#about" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[90vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center md:justify-start text-center md:text-left">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed max-w-lg mx-auto md:mx-0">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/appointment"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Book Appointment</span>
              <SafeIcon icon={FiArrowRight} />
            </Link>
            <a
              href="tel:+914040123456"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiPhone} />
              <span>Emergency Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;