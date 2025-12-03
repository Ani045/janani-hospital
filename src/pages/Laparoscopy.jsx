import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
    FiArrowLeft, FiHeart, FiUsers, FiShield, FiTarget, FiCheckCircle, FiPhone, FiMail,
    FiMapPin, FiClock, FiCalendar, FiArrowRight, FiStar, FiAward, FiMonitor, FiTool,
    FiZap, FiChevronDown, FiScissors, FiActivity, FiGlobe
} = FiIcons;

const Laparoscopy = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

    const departmentData = {
        name: 'Laparoscopy Department',
        hero: '/Laparoscopy-Department/Laparoscopy-Department.png',
        description: 'Our Laparoscopy Department specializes in minimally invasive surgical procedures, offering patients faster recovery, less pain, and minimal scarring with advanced technology.',
        overviewStats: [
            { icon: FiScissors, number: '2.5K+', label: 'Procedures Done' },
            { icon: FiAward, number: '99%', label: 'Success Rate' },
            { icon: FiUsers, number: '15+', label: 'Expert Surgeons' },
            { icon: FiClock, number: '24/7', label: 'Support Available' }
        ],
        highlights: ['Advanced HD Laparoscopic Technology', 'Single Incision Laparoscopy (SILS)', 'Robotic-Assisted Surgery', 'Day Care Procedures', 'Expert Laparoscopic Surgeons', 'Comprehensive Pre & Post-op Care'],
        services: [
            { name: 'Gynecological Laparoscopy', description: 'Minimally invasive treatment for various gynecological conditions including ovarian cysts, fibroids, and endometriosis.', icon: FiHeart, procedures: ['Ovarian Cyst Removal', 'Fibroid Removal', 'Hysterectomy', 'Endometriosis Treatment'], stats: { patients: '800+', success: '98%' }, image: '/Laparoscopy-Department/Gynecological-Laparoscopy.png' },
            { name: 'General Laparoscopy', description: 'Advanced laparoscopic procedures for general surgical conditions with minimal scarring and faster recovery.', icon: FiScissors, procedures: ['Appendectomy', 'Cholecystectomy', 'Hernia Repair', 'Spleen Surgery'], stats: { patients: '700+', success: '99%' }, image: '/Laparoscopy-Department/General-Laparoscopy.png' },
            { name: 'Urological Laparoscopy', description: 'Minimally invasive treatment for urological conditions with precision and excellent outcomes.', icon: FiShield, procedures: ['Pyeloplasty', 'Nephrectomy', 'Prostate Surgery', 'Adrenal Surgery'], stats: { patients: '500+', success: '97%' }, image: '/Laparoscopy-Department/Urological-Laparoscopy.png' },
            { name: 'Bariatric Laparoscopy', description: 'Weight loss surgery using minimally invasive techniques for sustainable results and better health.', icon: FiTarget, procedures: ['Gastric Sleeve', 'Gastric Bypass', 'Gastric Band', 'Revision Surgery'], stats: { patients: '400+', success: '95%' }, image: '/Laparoscopy-Department/Bariatric-Laparoscopy.png' },
            { name: 'Thoracic Laparoscopy', description: 'Minimally invasive chest surgery for lung and thoracic conditions with precision instruments.', icon: FiActivity, procedures: ['Lung Biopsy', 'Pleural Surgery', 'Mediastinal Surgery', 'Thoracic Tumor Removal'], stats: { patients: '300+', success: '96%' }, image: '/Laparoscopy-Department/Thoracic-Laparoscopy.png' },
            { name: 'Colorectal Laparoscopy', description: 'Advanced minimally invasive surgery for colon and rectal conditions with excellent patient outcomes.', icon: FiMonitor, procedures: ['Colon Resection', 'Rectal Surgery', 'Bowel Repair', 'Cancer Surgery'], stats: { patients: '350+', success: '97%' }, image: '/Laparoscopy-Department/Colorectal-Laparoscopy.png' }
        ],
        doctors: [
            { name: 'Dr. Kiran Reddy', specialization: 'Senior Laparoscopic Surgeon', experience: '18 years', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.9, expertise: ['Advanced Laparoscopy', 'Single Incision Surgery', 'Robotic Surgery'] },
            { name: 'Dr. Amit Sharma', specialization: 'Gynecological Laparoscopist', experience: '15 years', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.8, expertise: ['Gynec Laparoscopy', 'Fertility Surgery', 'Endometriosis'] },
            { name: 'Dr. Priya Patel', specialization: 'Bariatric Surgeon', experience: '12 years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.9, expertise: ['Weight Loss Surgery', 'Metabolic Surgery', 'Revision Surgery'] },
            { name: 'Dr. Rajesh Kumar', specialization: 'Urological Laparoscopist', experience: '16 years', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.8, expertise: ['Uro-Laparoscopy', 'Kidney Surgery', 'Prostate Surgery'] }
        ],
        technology: [
            { name: 'HD Laparoscopy Systems', description: 'High-definition 3D visualization systems for precise surgical procedures.', icon: FiMonitor },
            { name: 'Robotic Surgery Platform', description: 'Computer-assisted robotic system for complex minimally invasive procedures.', icon: FiTool },
            { name: 'Energy Devices', description: 'Advanced energy systems for precise tissue handling and minimal bleeding.', icon: FiZap },
            { name: 'Single Port Instruments', description: 'Specialized instruments for single incision laparoscopic surgery.', icon: FiTarget }
        ],
        facilities: ['Advanced HD Laparoscopy Suites', 'Robotic Surgery Platform', 'Single Incision Surgery Center', 'Day Care Surgery Unit', 'Pre-operative Assessment Center', 'Post-operative Recovery Rooms', 'Dedicated Anesthesia Team', 'Emergency Laparoscopy Services'],
        achievements: ['Over 2,500 successful laparoscopic procedures', '99% success rate in minimally invasive surgery', 'Pioneer in single incision laparoscopy', 'Advanced robotic surgery program', 'Excellence award in surgical innovation', 'Comprehensive day care surgery services'],
        reviews: [
            { name: 'Kavya Sharma', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "Dr. Kiran Reddy performed my laparoscopic surgery perfectly. Minimal pain, small scars, and quick recovery. Excellent experience!" },
            { name: 'Arun Kumar', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "The laparoscopy team is amazing. My gallbladder surgery was done through tiny incisions. I was back to work in just a week!" },
            { name: 'Meera Reddy', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "Outstanding surgical care! The minimally invasive approach made all the difference. Professional team and excellent facilities." }
        ],
        contact: { phone: '+91 9876543210', email: 'laparoscopy@jananihospital.com', location: 'Block H, 3rd Floor', hours: 'Mon-Sat: 9 AM - 6 PM | Emergency: 24/7' },
        faq: [
            { question: 'What are the main advantages of laparoscopic surgery?', answer: 'Laparoscopic surgery involves smaller incisions, which leads to less pain, reduced scarring, shorter hospital stay, faster recovery, and lower risk of infection compared to traditional open surgery.' },
            { question: 'Is laparoscopic surgery safe?', answer: 'Yes, laparoscopic surgery is very safe when performed by experienced surgeons. Our team uses advanced technology and follows strict safety protocols to ensure the highest standards of care.' },
            { question: 'How long is the recovery time for laparoscopic surgery?', answer: 'Recovery time varies by procedure, but most patients can return to normal activities within 1-2 weeks for laparoscopic surgery, compared to 4-6 weeks for traditional open surgery.' },
            { question: 'Am I a candidate for laparoscopic surgery?', answer: 'Most patients are suitable candidates for laparoscopic surgery. Our surgeons will evaluate your specific condition and medical history to determine the best approach for your treatment.' }
        ]
    };

    return (
        <div className="pt-16 bg-gray-50">
            <section className="relative min-h-[400px] h-[50vh] sm:h-[55vh] md:h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${departmentData.hero})` }}
                />
                <div className="absolute inset-0 bg-black opacity-60 z-10" />
                <div className="absolute inset-0 flex items-center z-10">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12">
                        <div className="text-white max-w-4xl">
                            <Link to="/" className="inline-flex items-center space-x-1.5 text-white/90 hover:text-white mb-3 sm:mb-4 transition-colors group">
                                <SafeIcon icon={FiArrowLeft} className="text-xs sm:text-sm group-hover:-translate-x-1 transition-transform" />
                                <span className="text-xs sm:text-sm font-medium">Back to Home</span>
                            </Link>
                            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-500/30 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-teal-400/50 shadow-xl flex-shrink-0">
                                    <SafeIcon icon={FiMonitor} className="text-2xl sm:text-3xl md:text-4xl text-white" />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{departmentData.name}</h1>
                                    <p className="text-sm sm:text-base md:text-lg text-teal-100 mt-1 sm:mt-2 font-medium">Minimally Invasive Surgery Excellence</p>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl leading-relaxed">{departmentData.description}</p>
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

            <section className="relative z-10 mt-6 md:-mt-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-y-6">
                            {departmentData.overviewStats.map((stat, index) => (
                                <div key={index} className={`text-center px-2 sm:px-4 ${index > 0 ? 'md:border-l md:border-gray-200' : ''}`}>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                                        <SafeIcon icon={stat.icon} className="text-xl sm:text-2xl" />
                                    </div>
                                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{stat.number}</p>
                                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
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
                                    Why Choose Laparoscopic Surgery?
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

                            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mr-3">
                                        <SafeIcon icon={FiMonitor} className="text-teal-600 text-xl" />
                                    </div>
                                    Advanced Technology & Equipment
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {departmentData.technology.map((tech, index) => (
                                        <div key={index} className="group p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200 group-hover:border-teal-300 transition-colors">
                                                    <SafeIcon icon={tech.icon} className="text-teal-600 text-xl" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-gray-800 text-sm mb-1">{tech.name}</h4>
                                                    <p className="text-gray-600 text-xs leading-relaxed">{tech.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-20 border-2 border-teal-100">
                                <div className="bg-teal-600 text-white text-center py-3 rounded-xl mb-6">
                                    <h3 className="text-lg font-bold">Contact Laparoscopy Dept.</h3>
                                    <p className="text-teal-100 text-xs mt-1">We're here to help you</p>
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
                                <div className="space-y-3">
                                    <Link to="/appointment" className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        <SafeIcon icon={FiCalendar} className="text-lg" />
                                        <span>Book Consultation</span>
                                    </Link>
                                    <a href={`tel:${departmentData.contact.phone}`} className="w-full border-2 border-teal-600 text-teal-600 py-3.5 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center space-x-2">
                                        <SafeIcon icon={FiPhone} className="text-lg" />
                                        <span>Call Department</span>
                                    </a>
                                </div>
                                <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
                                    <p className="text-xs text-gray-600 text-center">
                                        <span className="font-bold text-teal-700">24/7 Emergency Support</span> available for existing patients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <div className="inline-block mb-4">
                            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Our Services</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Advanced Laparoscopic Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive minimally invasive surgical solutions across multiple specialties with precision and excellent outcomes.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {departmentData.services.map((service, index) => (
                            <article key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-teal-200">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-teal-900/20" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-teal-700 mb-2">{service.name}</h3>
                                    <div className="flex items-center space-x-2 mb-3 p-2 bg-teal-50 rounded-lg">
                                        <SafeIcon icon={FiUsers} className="text-teal-600 text-lg" />
                                        <span className="text-sm text-gray-700">
                                            <span className="font-bold text-teal-700">{service.stats.patients}</span> Patients Treated
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-gray-500 mb-2">KEY PROCEDURES:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.procedures.slice(0, 3).map((proc, i) => (
                                                <span key={i} className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-lg font-medium border border-red-100">{proc}</span>
                                            ))}
                                            {service.procedures.length > 3 && (
                                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-medium">+{service.procedures.length - 3} more</span>
                                            )}
                                        </div>
                                    </div>
                                    <Link to="/appointment" className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        <span>Book Consultation</span>
                                        <SafeIcon icon={FiArrowRight} className="text-base group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <div className="inline-block mb-4">
                            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Our Team</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Laparoscopy Experts</h2>
                        <p className="text-gray-600">Meet our team of skilled laparoscopic surgeons dedicated to minimally invasive excellence</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {departmentData.doctors.map((doctor, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
                                <div className="relative overflow-hidden h-48">
                                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1 shadow">
                                        <SafeIcon icon={FiStar} className="text-yellow-400 text-xs" />
                                        <span className="text-xs font-bold">{doctor.rating}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-bold text-gray-800">{doctor.name}</h3>
                                    <p className="text-teal-600 font-semibold text-xs mt-0.5">{doctor.specialization}</p>
                                    <p className="text-gray-500 text-xs mt-1">{doctor.experience}</p>
                                    <div className="mt-2 mb-3">
                                        <div className="flex flex-wrap gap-1">
                                            {doctor.expertise.slice(0, 2).map((exp, idx) => (
                                                <span key={idx} className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded text-xs font-medium">{exp}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link to="/appointment" className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition-all flex items-center justify-center space-x-1 text-xs">
                                        <SafeIcon icon={FiCalendar} className="text-xs" />
                                        <span>Book Now</span>
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
                        <div className="inline-block mb-4">
                            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">Testimonials</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Patients Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Real experiences from patients who chose minimally invasive surgery with us.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {departmentData.reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center mb-4">
                                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-800">{review.name}</h4>
                                        <div className="flex items-center mt-1">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-sm" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.review}"</p>
                                <div className="text-xs text-gray-500 font-medium flex items-center">
                                    <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C14.43,5.73 15.92,6.6 16.78,7.39L18.88,5.3C16.99,3.52 14.86,2.5 12.19,2.5C6.42,2.5 2,7.3 2,12.5C2,17.7 6.42,22.5 12.19,22.5C17.62,22.5 21.75,18.5 21.75,12.81C21.75,12.09 21.64,11.59 21.35,11.1Z" /></svg>
                                    Verified on Google
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                                    <SafeIcon icon={FiShield} className="text-teal-600 text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">World-Class Facilities</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {departmentData.facilities.map((facility, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group">
                                        <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                            <SafeIcon icon={FiCheckCircle} className="text-white text-sm" />
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium leading-relaxed">{facility}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                                    <SafeIcon icon={FiAward} className="text-teal-600 text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Our Achievements</h3>
                            </div>
                            <div className="space-y-3">
                                {departmentData.achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group">
                                        <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                            <SafeIcon icon={FiStar} className="text-white text-sm" />
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium leading-relaxed">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <div className="inline-block mb-4">
                            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">FAQs</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about laparoscopic surgery and minimally invasive procedures</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {departmentData.faq.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
                                >
                                    <div className="flex items-start space-x-4 flex-1">
                                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                                            <span className="text-teal-700 font-bold text-lg">Q</span>
                                        </div>
                                        <span className="font-bold text-gray-800 text-base leading-relaxed pt-1">{faq.question}</span>
                                    </div>
                                    <div
                                        className="ml-4"
                                    >
                                        <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                                            <SafeIcon icon={FiChevronDown} className="text-teal-600" />
                                        </div>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <div
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="flex items-start space-x-4 pl-14">
                                                    <div className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <div className="bg-teal-50 border-2 border-teal-100 rounded-2xl p-8 max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Still have questions?</h3>
                            <p className="text-gray-600 mb-4">Our laparoscopy experts are here to help you understand the benefits of minimally invasive surgery</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Link to="/appointment" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2">
                                    <SafeIcon icon={FiCalendar} className="text-lg" />
                                    <span>Schedule Consultation</span>
                                </Link>
                                <a href={`tel:${departmentData.contact.phone}`} className="bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center space-x-2">
                                    <SafeIcon icon={FiPhone} className="text-lg" />
                                    <span>Call Us Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Laparoscopy;