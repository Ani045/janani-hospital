import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiPhone, FiMail, FiMessageSquare, FiActivity, FiClock, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { doctorsData } from './OurDoctors';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const services = [
    'IVF & Fertility', 'Pediatrics', 'OBG', 'General Medicine', 
    'Surgery', 'Orthopedics', 'Urology', 'Laparoscopy'
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', 
    '11:30 AM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call and Email sending
    setTimeout(() => {
      setLoading(false);
      navigate('/thank-you');
    }, 2000);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Breadcrumb pageName="Book An Appointment" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Info Panel */}
            <div className="lg:col-span-2 bg-emerald-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Schedule Your Visit</h2>
                <p className="text-emerald-50 opacity-90 mb-12 leading-relaxed">
                  Book your appointment online and receive instant confirmation via email. We're here to provide the best care for you and your family.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiCheckCircle size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Instant Confirmation</p>
                      <p className="text-sm text-emerald-100">Automated email to patient & doctor</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiCalendar size={20} />
                    </div>
                    <div>
                      <p className="font-bold">Flexible Timing</p>
                      <p className="text-sm text-emerald-100">Choose your preferred slot</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mt-12 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-2">Emergency Hotline</p>
                <p className="text-2xl font-bold">+91 123 456 7890</p>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 flex items-center">
                      <FiActivity className="mr-2 text-emerald-600" /> Select Service
                    </label>
                    <select 
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-700 appearance-none"
                    >
                      <option value="">Choose Service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Doctor Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 flex items-center">
                      <FiUser className="mr-2 text-emerald-600" /> Select Doctor
                    </label>
                    <select 
                      name="doctor"
                      required
                      value={formData.doctor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-700 appearance-none"
                    >
                      <option value="">Choose Doctor</option>
                      {doctorsData.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 flex items-center">
                      <FiCalendar className="mr-2 text-emerald-600" /> Appointment Date
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-700"
                    />
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 flex items-center">
                      <FiClock className="mr-2 text-emerald-600" /> Preferred Time
                    </label>
                    <select 
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-gray-700 appearance-none"
                    >
                      <option value="">Choose Time Slot</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 flex items-center">
                    <FiUser className="mr-2 text-emerald-600" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter patient's full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 flex items-center">
                      <FiPhone className="mr-2 text-emerald-600" /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 flex items-center">
                      <FiMail className="mr-2 text-emerald-600" /> Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="e.g. patient@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 flex items-center">
                    <FiMessageSquare className="mr-2 text-emerald-600" /> Reason for Visit (Optional)
                  </label>
                  <textarea 
                    name="message"
                    rows="3"
                    placeholder="Briefly describe your symptoms or concern..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-emerald-600 transition-all shadow-xl disabled:opacity-70 group"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Confirmation Emails...
                    </span>
                  ) : (
                    <>
                      <span>Confirm Appointment</span>
                      <FiCheckCircle className="group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
