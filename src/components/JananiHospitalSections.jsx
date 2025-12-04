import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiHeart, FiShield, FiMonitor } = FiIcons;

const JananiHospitalSections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 const commonLine = "Honored for exceptional contributions in healthcare.";

const awards = [
  {
    id: 1,
    image: "/homepage/awards.jpeg",
    title: "Excellence in Women's Healthcare ",
    commonLine,
    link: "#"
  },
  {
    id: 2,
    image: "/homepage/awards3.jpeg",
    title: "Healthcare Excellence Awards",
    commonLine,
    link: "#"
  },
  {
    id: 3,
    image: "/homepage/awards1.jpeg",
    title: "Outstanding Patient Care Recognition - Medical Board India",
    commonLine,
    link: "#"
  }
];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <div className="w-full">
      {/* Why Choose Janani Hospital Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <h2 className="text-white text-3xl font-bold mb-4 text-left">
                Why Choose Janani Hospital?
              </h2>
              <p className="text-white text-base leading-relaxed mb-6">
                Janani Hospital, recognized as a leading <strong>Women's & Children's Healthcare Center</strong>, has been dedicated to providing exceptional medical care with compassion and expertise. We combine experienced healthcare professionals, state-of-the-art technology, and world-class infrastructure to ensure the best possible health outcomes for mothers, children, and families.
              </p>
            </div>

            {/* Right Cards - 2x2 Grid */}
            <div className="lg:col-span-6 flex items-center">
              <div className="grid grid-cols-2 gap-3 w-full">
                {/* Card 1 - Expert Team */}
                <div className="bg-white rounded-lg p-1 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[85px]">
                  <div className="w-8 h-8 mb-1 flex items-center justify-center bg-teal-50 rounded-lg">
                    <SafeIcon icon={FiUsers} className="text-teal-600 text-sm" />
                  </div>
                  <h3 className="text-gray-800 text-xs font-semibold text-center leading-tight">Expert Medical Team</h3>
                </div>

                {/* Card 2 - Compassionate Care */}
                <div className="bg-white rounded-lg p-1 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[85px]">
                  <div className="w-8 h-8 mb-1 flex items-center justify-center bg-red-50 rounded-lg">
                    <SafeIcon icon={FiHeart} className="text-red-600 text-sm" />
                  </div>
                  <h3 className="text-gray-800 text-xs font-semibold text-center leading-tight">Compassionate Care</h3>
                </div>

                {/* Card 3 - Advanced Technology */}
                <div className="bg-white rounded-lg p-1 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[85px]">
                  <div className="w-8 h-8 mb-1 flex items-center justify-center bg-orange-50 rounded-lg">
                    <SafeIcon icon={FiMonitor} className="text-orange-600 text-sm" />
                  </div>
                  <h3 className="text-gray-800 text-xs font-semibold text-center leading-tight">Advanced Technology</h3>
                </div>

                {/* Card 4 - Trusted Excellence */}
                <div className="bg-white rounded-lg p-1 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[85px]">
                  <div className="w-8 h-8 mb-1 flex items-center justify-center bg-teal-50 rounded-lg">
                    <SafeIcon icon={FiShield} className="text-teal-600 text-sm" />
                  </div>
                  <h3 className="text-gray-800 text-xs font-semibold text-center leading-tight">Trusted Excellence</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-gray-800 text-3xl font-bold text-left">Awards & Recognition</h2>
            {/* <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
              View All
            </a> */}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Illustration */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative">
                {/* Trophy Illustration */}
                <img src="public/homepage/award.png" width="200" height="280" viewBox="0 0 200 280" fill="none"/>
                 
              </div>
            </div>

            {/* Right Slider */}
            <div className="lg:col-span-9">
              <div className="relative">
                {/* Slider Container */}
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  >
                    {awards.map((award) => (
                      <div key={award.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                          <img 
                            src={award.image} 
                            alt={award.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="text-gray-800 font-medium text-sm mb-3 line-clamp-2 min-h-[40px]">
                              {award.title}
                            </h3>
                            <a 
                              href={award.link}
                              className="text-teal-600 hover:text-teal-700 text-sm font-medium inline-block"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JananiHospitalSections;