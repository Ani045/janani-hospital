import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowLeft, FiAward, FiBookOpen, FiClock, FiStar } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb';
import { doctorsData } from './OurDoctors';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find(d => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-bold">Doctor not found</h2>
        <Link to="/doctors" className="text-emerald-600 mt-4 inline-block">Back to Our Doctors</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Breadcrumb pageName={doctor.name} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Link to="/doctors" className="flex items-center text-gray-500 hover:text-emerald-600 font-semibold mb-8 transition-colors group">
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to All Doctors
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="h-96 relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-xl font-bold flex items-center shadow-lg">
                  <FiStar className="mr-2 fill-current" /> 4.9
                </div>
              </div>
              <div className="p-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-emerald-600 font-bold mb-6">{doctor.specialty}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Experience</p>
                    <p className="text-gray-900 font-bold">{doctor.experience}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Success Rate</p>
                    <p className="text-gray-900 font-bold">98%</p>
                  </div>
                </div>
                <Link 
                  to="/book-appointment"
                  className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <FiCalendar />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Details Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FiBookOpen className="mr-3 text-emerald-600" /> Professional Summary
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {doctor.description} {doctor.name} is one of the leading specialists in {doctor.department} with extensive clinical experience. Dedicated to providing personalized patient care and implementing the latest medical technologies to achieve the best possible outcomes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Qualifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <FiAward className="mr-3 text-emerald-600" /> {doctor.qualification}
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FiAward className="mr-3 text-emerald-600" /> Fellowship in Reproductive Medicine
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Specializations</h3>
                  <ul className="space-y-3">
                    {['Advanced IVF Procedures', 'Laparoscopic Surgery', 'High-Risk Pregnancy', 'Hormonal Management'].map((spec) => (
                      <li key={spec} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span> {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FiClock className="mr-3 text-emerald-600" /> Working Hours
              </h2>
              <div className="space-y-4">
                {[
                  { days: 'Monday - Friday', time: '10:00 AM - 04:00 PM' },
                  { days: 'Saturday', time: '10:00 AM - 01:00 PM' },
                  { days: 'Sunday', time: 'Emergency On-call Only' }
                ].map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <span className="font-semibold text-gray-700">{schedule.days}</span>
                    <span className="text-emerald-600 font-bold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
