import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb';

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Gynaecologist",
      department: "OBG & Fertility",
      location: "Janani Hospital, Main Branch",
      type: "Full-Time",
      experience: "8+ Years"
    },
    {
      id: 2,
      title: "Registered Staff Nurse",
      department: "Critical Care (ICU)",
      location: "Janani Hospital, Main Branch",
      type: "Full-Time",
      experience: "2-4 Years"
    },
    {
      id: 3,
      title: "Patient Relationship Manager",
      department: "Administration",
      location: "Janani Hospital, Main Branch",
      type: "Full-Time",
      experience: "3+ Years"
    },
    {
      id: 4,
      title: "Lab Technician",
      department: "Diagnostics",
      location: "Janani Hospital, Main Branch",
      type: "Full-Time",
      experience: "1-3 Years"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Breadcrumb pageName="Careers" />
      
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Hospital Team"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Join Our <span className="text-emerald-400">Exceptional Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-2xl mx-auto opacity-90"
          >
            Empowering healthcare professionals to deliver world-class patient care. Your journey to excellence starts here.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Jobs List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
            {jobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg mb-3">
                      {job.department}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FiMapPin className="mr-2 text-emerald-500" /> {job.location}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-2 text-emerald-500" /> {job.type}
                      </span>
                      <span className="flex items-center">
                        <FiBriefcase className="mr-2 text-emerald-500" /> {job.experience} exp
                      </span>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all duration-300 shadow-lg whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact / Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Didn't find a role?</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are always looking for talented individuals to join our team. Send us your CV for future opportunities.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FiSend size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email your CV</p>
                    <p className="text-emerald-700 font-bold">careers@jananihospital.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 p-8 rounded-3xl shadow-xl text-white overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Why Janani?</h3>
                <ul className="space-y-4 text-emerald-50">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                    Modern medical infrastructure
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                    Continuous learning & growth
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                    Supportive work environment
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
