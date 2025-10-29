import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import {motion, AnimatePresence} from 'framer-motion';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiTool,FiZap,FiChevronDown,FiScissors}=FiIcons;

 const Laparoscopy = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

 const departmentData = {
 name: 'Laparoscopy Department',
 icon: FiMonitor,
 hero: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Laparoscopy Department specializes in minimally invasive surgical procedures, offering patients faster recovery, less pain, and minimal scarring.',
 overviewStats: [
 {icon: FiUsers,number: '1.5K+',label: 'Procedures'},
 {icon: FiAward,number: '99%',label: 'Success Rate'},
 {icon: FiStar,number: '98%',label: 'Patient Satisfaction'},
 {icon: FiClock,number: '24/7',label: 'Support'}
 ],
 highlights: [
 'Advanced Laparoscopic Technology',
 'Single Incision Laparoscopy (SILS)',
 'Robotic-Assisted Surgery',
 'Day Care Procedures',
 'Expert Laparoscopic Surgeons',
 'Comprehensive Pre & Post-op Care'
 ],
 services: [
 {name: 'Gynecological Laparoscopy',description: 'Minimally invasive treatment for various gynecological conditions.',icon: FiUsers,procedures: ['Ovarian Cyst Removal','Fibroid Removal','Hysterectomy'],stats: {patients: '600+',success: '98%'},image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'General Laparoscopy',description: 'Advanced laparoscopic procedures for general surgical conditions.',icon: FiScissors,procedures: ['Appendectomy','Cholecystectomy','Hernia Repair'],stats: {patients: '500+',success: '97%'},image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Urological Laparoscopy',description: 'Minimally invasive treatment for urological conditions.',icon: FiShield,procedures: ['Pyeloplasty','Nephrectomy','Prostate Surgery'],stats: {patients: '300+',success: '96%'},image: 'https://images.unsplash.com/photo-1579154212918-0a1f7c2f0f8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 doctors: [
 {name: 'Dr. Kiran Reddy',specialization: 'Laparoscopic Surgeon',experience: '12 years',image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=300',rating: 4.9,expertise: ['Advanced Laparoscopy','Single Incision Surgery','Robotic Surgery']}
 ],
 technology: [
 {name: 'Advanced Laparoscopy Systems',description: 'High-definition 3D visualization systems for precise surgical procedures.',icon: FiMonitor},
 {name: 'Robotic Surgery',description: 'Computer-assisted robotic system for complex minimally invasive procedures.',icon: FiTool},
 {name: 'Energy Devices',description: 'Advanced energy systems for precise tissue handling and minimal bleeding.',icon: FiZap},
 {name: 'Single Incision Instruments',description: 'Specialized instruments for single incision laparoscopic surgery.',icon: FiTarget}
 ],
 contact: {phone: '+91 9876543210',email: 'laparoscopy@jananihospital.com',location: 'Block H, 3rd Floor',hours: 'Mon-Sat: 9 AM - 6 PM'},
 faq: [
 {question: 'What are the main advantages of laparoscopic surgery?',answer: 'Laparoscopic surgery, also known as minimally invasive surgery, involves smaller incisions, which leads to less pain, reduced scarring, a shorter hospital stay, and a quicker recovery compared to traditional open surgery.'},
 {question: 'Is laparoscopic surgery safe?',answer: 'Yes, it is a very safe procedure when performed by an experienced surgeon. Our team of experts uses advanced technology to ensure the highest standards of safety and precision.'},
 ]
 };

 return (
 <div className="pt-16 bg-gray-50">
 <section className="relative h-[60vh] min-h-[450px] bg-slate-900">
 <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${departmentData.hero})`}} />
 <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-red-900/40 mix-blend-multiply" />
 <div className="absolute inset-0 flex items-center">
 <div className="container mx-auto px-4">
 <div className="text-white max-w-4xl">
 <Link to="/" className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-4 transition-colors group">
 <SafeIcon icon={FiArrowLeft} className="text-sm group-hover:-translate-x-1 transition-transform" />
 <span className="text-sm font-medium">Back to Home</span>
 </Link>
 <div className="flex items-center space-x-4 mb-4">
 <div className="w-16 h-16 bg-teal-500/30 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-teal-400/50 shadow-xl">
 <SafeIcon icon={departmentData.icon} className="text-4xl text-white" />
 </div>
 <div>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{departmentData.name}</h1>
 <p className="text-lg text-teal-100 mt-2 font-medium">Minimally Invasive Surgery</p>
 </div>
 </div>
 <p className="text-lg text-white/95 max-w-3xl leading-relaxed">{departmentData.description}</p>
 <div className="flex flex-wrap gap-3 mt-6">
 <Link to="/appointment" className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2">
 <SafeIcon icon={FiCalendar} className="text-lg" />
 <span>Book Consultation</span>
 </Link>
 <a href={`tel:${departmentData.contact.phone}`} className="bg-red-600/20 backdrop-blur-md text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-red-600/30 transition-all flex items-center space-x-2">
 <SafeIcon icon={FiPhone} className="text-lg" />
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
 </div>
 <div className="lg:col-span-1">
 <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-20 border-2 border-teal-100">
 <div className="bg-teal-600 text-white text-center py-3 rounded-xl mb-6">
 <h3 className="text-lg font-bold">Contact Laparoscopy Dept.</h3>
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
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="py-12 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Laparoscopic Services</h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

 <section className="py-12 bg-gray-50">
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
 initial={{height: 0, opacity: 0}}
 animate={{height: 'auto', opacity: 1}}
 exit={{height: 0, opacity: 0}}
 transition={{duration: 0.3}}
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

 export default Laparoscopy;