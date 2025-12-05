import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiUsers, FiClock, FiAward, FiPhone } = FiIcons;

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment through our website by clicking the "Book Appointment" button, or by calling our reception at +91 40 4012 3456. We also accept walk-in appointments, but booking in advance is recommended.',
    },
    {
      question: 'What are the visiting hours?',
      answer: 'General visiting hours are from 10:00 AM to 12:00 PM and 5:00 PM to 7:00 PM. For critical care units, visiting hours are more restricted. Please check with the specific department for their policies.',
    },
    {
      question: 'What documents should I bring for my first visit?',
      answer: 'For your first visit, please bring a valid photo ID, any previous medical records or test results, a list of current medications, and your insurance information if applicable.',
    },
    {
      question: 'Do you accept health insurance?',
      answer: "Yes, we have tie-ups with most major health insurance providers. Please visit our insurance desk or contact us to verify if your specific plan is covered.",
    },
    {
      question: 'What facilities are available for international patients?',
      answer: 'We offer a range of services for international patients, including visa assistance, airport transfers, accommodation arrangements, and dedicated patient coordinators to ensure a seamless experience.',
    },
    {
      question: 'Where can I find my lab test results?',
      answer: 'You can access your lab test results through our secure online patient portal. You will receive login credentials during your visit. Alternatively, you can collect a physical copy from our records department.',
    },
  ];

  const stats = [
    { icon: FiUsers, number: '10K+', label: 'Happy Patients' },
    { icon: FiClock, number: '24/7', label: 'Emergency Care' },
    { icon: FiAward, number: '50+', label: 'Expert Doctors' },
    { icon: FiPhone, number: '98%', label: 'Success Rate' },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-3 lg:py-3 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Find answers to common questions about our services and procedures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* FAQ Column */}
          <div className="lg:max-w-xl space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/40 hover:shadow-lg transition-all duration-400 hover:-translate-y-0.5 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left p-4 lg:p-5 focus:outline-none hover:bg-teal-50/40 transition-colors duration-250"
                >
                  <span className="font-semibold text-lg lg:text-base text-gray-800 group-hover:text-teal-700 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <SafeIcon icon={FiChevronDown} className={`text-teal-600`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-max-height duration-500 ${activeIndex === index ? 'max-h-60' : 'max-h-0'}`}>
                  <div className="px-4 lg:px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed bg-gradient-to-r from-teal-50/60 to-emerald-50/60">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Column */}
          <div className="lg:flex lg:flex-col justify-center lg:pl-6">
            <div className="text-center lg:text-left mb-8 lg:mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Why Choose Us?
              </h3>
              <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Trusted healthcare with proven results and exceptional care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-4 lg:p-5 bg-white/70 backdrop-blur-md rounded-xl shadow-md border border-white/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 hover:bg-white hover:border-teal-100 overflow-hidden"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 lg:p-3 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                      <SafeIcon icon={stat.icon} className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 via-teal-600 to-emerald-600 bg-clip-text text-transparent mb-0.5 group-hover:scale-105 transition-transform">
                        {stat.number}
                      </div>
                      <div className="text-xs lg:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
