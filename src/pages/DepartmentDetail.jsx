import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiHeart, FiActivity, FiUsers, FiShield, FiTarget, FiCheckCircle, FiPhone, FiMail, FiMapPin, FiClock, FiCalendar, FiArrowRight, FiStar, FiAward, FiMonitor, FiGlobe, FiTool, FiChevronDown, FiAlertTriangle } = FiIcons;

const DepartmentDetail = () => {
    const { id } = useParams();
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

    const departmentDataSource = {
        medicine: {
            name: 'General Medicine',
            icon: FiActivity,
            hero: '/General-Medicine.png',
            description: 'Our General Medicine department provides comprehensive primary care, focusing on prevention, diagnosis, and treatment of a wide range of health issues.',
            overviewStats: [
                { icon: FiUsers, number: '15K+', label: 'Patients Treated' },
                { icon: FiActivity, number: '20+', label: 'Expert Physicians' },
                { icon: FiAward, number: '95%', label: 'Recovery Rate' },
                { icon: FiClock, number: '24/7', label: 'Emergency Care' }
            ],
            highlights: [
                'Experienced General Physicians',
                'Comprehensive Health Checkups',
                'Chronic Disease Management',
                'Preventive Healthcare Programs',
                'Emergency Medicine Services',
                'Geriatric Care'
            ],
            services: [
                { name: 'Primary Care', description: 'Comprehensive primary healthcare for all age groups.', icon: FiActivity, procedures: ['General Consultation', 'Diagnosis', 'Treatment', 'Referrals'], stats: { patients: '5000+', success: '95%' }, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                { name: 'Health Checkups', description: 'Preventive health screening packages for early detection.', icon: FiShield, procedures: ['Master Health Checkup', 'Executive Checkup', 'Senior Citizen Package', 'Women Health Package'], stats: { patients: '2000+', success: '98%' }, image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
            ],
            doctors: [
                { name: 'Dr. Ramesh Babu', specialization: 'Senior General Physician', experience: '30 years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=300', rating: 4.8, expertise: ['Internal Medicine', 'Emergency Care', 'Chronic Diseases'] }
            ],
            technology: [
                { name: 'Advanced Diagnostics', description: 'State-of-the-art lab and imaging for accurate diagnosis.', icon: FiMonitor },
                { name: 'Electronic Health Records', description: 'Seamless management of patient records for better care continuity.', icon: FiTool }
            ],
            reviews: [
                { name: 'Amit Patel', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "Dr. Ramesh Babu is an excellent physician. He listened to my concerns patiently and provided a very effective treatment plan for my chronic condition." },
                { name: 'Priya Sharma', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "The health checkup package was very thorough. The staff were professional and the process was smooth. Highly recommend for preventive care." }
            ],
            contact: { phone: '+91 9876543214', email: 'medicine@jananihospital.com', location: 'Block D, Ground Floor', hours: '24/7 Emergency | OPD: 8 AM - 8 PM' },
            faq: [
                { question: 'What conditions are treated in General Medicine?', answer: 'We treat a wide range of conditions including infections, hypertension, diabetes, respiratory illnesses, and other non-surgical health problems.' },
                { question: 'Do I need an appointment for a consultation?', answer: 'While we accept walk-in patients, we highly recommend booking an appointment to avoid long waiting times.' },
            ]
        },
    };

    const departmentData = departmentDataSource[id];

    if (!departmentData) {
        return (
            <div className="pt-20 sm:pt-24 lg:pt-28 min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <SafeIcon icon={FiAlertTriangle} className="text-6xl text-red-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800">Department Not Found</h1>
                    <p className="text-gray-600 mt-2">The department you are looking for does not exist.</p>

                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50">
            <section className="relative min-h-[400px] h-[50vh] sm:h-[55vh] md:h-[60vh] pt-24 sm:pt-24 lg:pt-24">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${departmentData.hero})` }} />
                <div className="absolute inset-0 bg-black opacity-60 z-10" />
                <div className="absolute inset-0 flex items-center z-10">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12">
                        <div className="text-white max-w-4xl">

                            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-500/30 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-teal-400/50 shadow-xl flex-shrink-0">
                                    <SafeIcon icon={departmentData.icon} className="text-2xl sm:text-3xl md:text-4xl text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">{departmentData.name}</h1>
                                    <p className="text-sm sm:text-base md:text-lg text-teal-100 mt-1 sm:mt-2 font-medium">Comprehensive Medical Care</p>
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 max-w-3xl leading-relaxed">{departmentData.description}</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                                <Link to="/appointment" className="bg-white text-teal-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-1.5 sm:space-x-2">
                                    <SafeIcon icon={FiCalendar} className="text-base sm:text-lg" />
                                    <span>Book Consultation</span>
                                </Link>
                                <a href={`tel:${departmentData.contact.phone}`} className="bg-red-600/20 backdrop-blur-md text-white border-2 border-white/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-600/30 transition-all flex items-center space-x-1.5 sm:space-x-2">
                                    <SafeIcon icon={FiPhone} className="text-base sm:text-lg" />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 -mt-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
                            {departmentData.overviewStats.map((stat, index) => (
                                <div key={index} className={`text-center px-4 ${index > 0 ? 'md:border-l md:border-gray-200' : ''}`}>
                                    <div className="w-12 h-12 mx-auto mb-3 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                                        <SafeIcon icon={stat.icon} className="text-2xl" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-800">{stat.number}</p>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-16 pb-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-1.5 h-8 bg-teal-600 rounded-full mr-3"></span>
                                    Why Choose Our General Medicine Department?
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {departmentData.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm">
                                            <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <SafeIcon icon={FiCheckCircle} className="text-white text-sm" />
                                            </div>
                                            <span className="text-gray-700 text-sm font-medium leading-relaxed">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-20 border-2 border-teal-100">
                                <div className="bg-teal-600 text-white text-center py-3 rounded-xl mb-6">
                                    <h3 className="text-lg font-bold">Contact General Medicine</h3>
                                </div>
                                <div className="space-y-4 mb-6">
                                    {[
                                        { icon: FiPhone, label: 'Department Phone', value: departmentData.contact.phone },
                                        { icon: FiMail, label: 'Email Address', value: departmentData.contact.email },
                                        { icon: FiMapPin, label: 'Location', value: departmentData.contact.location },
                                        { icon: FiClock, label: 'Working Hours', value: departmentData.contact.hours }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <SafeIcon icon={item.icon} className="text-teal-600 text-lg" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium mb-0.5">{item.label}</p>
                                                <p className="font-bold text-gray-800 text-sm">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {departmentData.services.map((service, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-teal-200">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-base flex-1">{service.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                                    <Link to="/appointment" className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        <span>Book Consultation</span>
                                        <SafeIcon icon={FiArrowRight} className="text-base group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {departmentData.faq.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left p-6 focus:outline-none group">
                                    <span className="font-bold text-gray-800 text-base">{faq.question}</span>
                                    <div className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <SafeIcon icon={FiChevronDown} className="text-teal-600" />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-gray-600 text-sm">{faq.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DepartmentDetail;