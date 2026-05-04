import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiShield, FiFileText, FiInfo, FiChevronDown, FiPlus, FiMinus } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb';

const PatientInformation = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website's 'Book Appointment' page, or by calling our helpdesk at +91 123 456 7890."
    },
    {
      question: "What insurance providers do you work with?",
      answer: "We are empanelled with major insurance providers including Star Health, Apollo Munich, HDFC ERGO, and many others. Please check our insurance section for a full list."
    },
    {
      question: "What are the visiting hours for inpatients?",
      answer: "Visiting hours are from 11:00 AM to 12:00 PM and 5:00 PM to 6:00 PM. Only one visitor is allowed per patient at a time."
    },
    {
      question: "How can I get my lab reports?",
      answer: "Lab reports can be collected from the diagnostics department, or accessed online through our patient portal using your UHID."
    }
  ];

  const infoSections = [
    {
      id: 'opd',
      title: 'OPD Timings',
      icon: <FiClock className="text-emerald-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 italic">Consultations available throughout the week.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-2xl">
              <p className="font-bold text-gray-900">Mon - Sat</p>
              <p className="text-emerald-700 font-semibold">09:00 AM - 08:00 PM</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl">
              <p className="font-bold text-gray-900">Sunday</p>
              <p className="text-emerald-700 font-semibold">10:00 AM - 01:00 PM</p>
            </div>
          </div>
          <p className="text-sm text-red-500 font-medium">*Emergency services are available 24/7.</p>
        </div>
      )
    },
    {
      id: 'visiting',
      title: 'Visiting Hours',
      icon: <FiInfo className="text-emerald-600" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-3">
            <li className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-gray-600">Morning Slot</span>
              <span className="font-bold text-gray-900">11:00 AM - 12:00 PM</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-gray-600">Evening Slot</span>
              <span className="font-bold text-gray-900">05:00 PM - 07:00 PM</span>
            </li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-2xl text-sm text-gray-500">
            <p>• Only one visitor pass per patient.</p>
            <p>• Children below 12 years are not allowed in the wards.</p>
          </div>
        </div>
      )
    },
    {
      id: 'admission',
      title: 'Admission & Discharge',
      icon: <FiFileText className="text-emerald-600" />,
      content: (
        <div className="space-y-4 text-gray-600">
          <h4 className="font-bold text-gray-900">Admission Process:</h4>
          <p>Provide your doctor's admission advice at the registration desk. Carry valid ID proof and insurance documents.</p>
          <h4 className="font-bold text-gray-900 mt-4">Discharge Process:</h4>
          <p>Discharges are usually processed between 10:00 AM and 12:00 PM. All pending bills must be cleared before the discharge summary is handed over.</p>
        </div>
      )
    },
    {
      id: 'insurance',
      title: 'Insurance & TPA',
      icon: <FiShield className="text-emerald-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">We provide cashless facilities for major insurance partners and TPAs.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {['Star Health', 'Apollo Munich', 'HDFC ERGO', 'NIVA Bupa', 'Care Health', 'ICICI Lombard'].map(ins => (
              <div key={ins} className="p-3 bg-white border border-gray-100 rounded-xl text-center text-xs font-bold text-gray-700 shadow-sm">
                {ins}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 italic">Please contact our insurance desk for the updated list of partners.</p>
        </div>
      )
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Breadcrumb pageName="Patient Information" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Essential <span className="text-emerald-600">Patient Guide</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about your visit to Janani Hospitals.
          </motion.p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {infoSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              {section.content}
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Quick answers to common queries.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${activeFaq === idx ? 'border-emerald-200 bg-emerald-50/30' : 'border-gray-100'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg ${activeFaq === idx ? 'text-emerald-700' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  {activeFaq === idx ? <FiMinus className="text-emerald-600" /> : <FiPlus className="text-gray-400" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
