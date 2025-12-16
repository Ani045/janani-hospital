import { useState } from 'react';
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

          {/* Enhanced Right Panel */}
          <div className="lg:flex lg:flex-col justify-start space-y-6">
            {/* Stats Card with Premium Design */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 p-6 lg:p-7 shadow-xl border border-teal-400/30">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/20 rounded-full -ml-16 -mb-16 blur-xl"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-5">
                  <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-lg mr-3">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Why Choose Us?
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="p-2 bg-white/20 rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                          <SafeIcon icon={stat.icon} className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-xs font-medium text-white/90">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
