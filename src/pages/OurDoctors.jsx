import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCalendar, FiArrowRight, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export const doctorsData = [
  {
    id: 1,
    name: "Dr. Janani Ramesh",
    specialty: "IVF & Infertility Specialist",
    qualification: "MBBS, DGO, ART Specialist",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
    description: "Expert in reproductive medicine and advanced IVF procedures with a high success rate.",
    department: "IVF & Fertility"
  },
  {
    id: 2,
    name: "Dr. Ramesh Kumar",
    specialty: "Senior Gynecologist",
    qualification: "MBBS, MS (OBG)",
    experience: "20+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    description: "Specialized in high-risk pregnancy management and laparoscopic surgeries.",
    department: "OBG"
  },
  {
    id: 3,
    name: "Dr. Priya Dharshini",
    specialty: "Pediatrician",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=600",
    description: "Dedicated to providing compassionate and comprehensive care for infants and children.",
    department: "Pediatrics"
  },
  {
    id: 4,
    name: "Dr. Suresh Babu",
    specialty: "Orthopedic Surgeon",
    qualification: "MBBS, MS (Ortho)",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    description: "Specialist in joint replacement and sports medicine.",
    department: "Orthopedics"
  }
];

const OurDoctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', ...new Set(doctorsData.map(d => d.department))];

  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || doctor.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Breadcrumb pageName="Our Doctors" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet Our <span className="text-emerald-600">Expert Doctors</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Highly qualified and experienced medical professionals dedicated to your health and well-being.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <FiFilter className="text-gray-400 hidden sm:block" />
            <div className="flex flex-wrap gap-2">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    selectedDept === dept 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                layout
                key={doctor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <Link 
                      to={`/doctor/${doctor.id}`}
                      className="w-full py-3 bg-white text-emerald-600 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-emerald-50 transition-colors shadow-lg"
                    >
                      <span>View Profile</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold text-sm mb-3">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                    {doctor.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {doctor.experience} Exp
                    </span>
                    <Link 
                      to="/book-appointment"
                      className="text-emerald-600 p-2 hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Book Appointment"
                    >
                      <FiCalendar size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurDoctors;
