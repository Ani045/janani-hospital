import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown } = FiIcons;

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

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and procedures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <SafeIcon icon={FiChevronDown} className="text-teal-600" />
                </div>
              </button>
              {activeIndex === index && (
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;