import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import {motion, AnimatePresence} from 'framer-motion';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiActivity,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiGlobe,FiTool,FiChevronDown,FiScissors}=FiIcons;

 const Surgery = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

 const departmentData = {
 name: 'General Surgery Department',
 hero: 'https://images.unsplash.com/photo-1606037039918-a6a3fb4a37b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our General Surgery Department provides comprehensive surgical care, leveraging advanced minimally invasive techniques and an expert team to ensure the best outcomes.',
 overviewStats: [
 {icon: FiScissors,number: '6K+',label: 'Surgeries Done'},
 {icon: FiAward,number: '98%',label: 'Success Rate'},
 {icon: FiUsers,number: '20+',label: 'Expert Surgeons'},
 {icon: FiClock,number: '24/7',label: 'Emergency Care'}
 ],
 highlights: [
 'Advanced Laparoscopic Surgery',
 'Minimally Invasive Techniques',
 '24/7 Emergency Surgery Services',
 'Experienced & Specialized Surgical Team',
 'Modern, Well-Equipped Operation Theaters',
 'Comprehensive Post-operative Care'
 ],
 services: [
 {name: 'Laparoscopic Surgery',description: 'Minimally invasive procedures for faster recovery and minimal scarring, including gallbladder, appendix, and hernia.',icon: FiMonitor,procedures: ['Cholecystectomy','Appendectomy','Hernia Repair'],stats: {patients: '2.5K+',success: '99%'},image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Abdominal Surgery',description: 'Comprehensive surgical solutions for various abdominal conditions, from GI to colorectal issues.',icon: FiActivity,procedures: ['Gastrointestinal Surgery','Hepatobiliary Surgery','Colorectal Surgery'],stats: {patients: '1.8K+',success: '97%'},image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Breast Surgery',description: 'Specialized surgical treatment for breast conditions, including cancer and benign tumors.',icon: FiHeart,procedures: ['Lumpectomy','Mastectomy','Breast Reconstruction'],stats: {patients: '800+',success: '98%'},image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 doctors: [
 {name: 'Dr. Rajesh Kumar',specialization: 'Senior General & Laparoscopic Surgeon',experience: '25 years',image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',rating: 4.9,expertise: ['Laparoscopy','GI Surgery','Hernia Repair']},
 {name: 'Dr. Anita Sharma',specialization: 'Minimal Access Surgeon',experience: '18 years',image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',rating: 4.8,expertise: ['Advanced Laparoscopy','Bariatric Surgery']},
 {name: 'Dr. Michael Chen',specialization: 'Surgical Oncologist',experience: '20 years',image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',rating: 4.9,expertise: ['Cancer Surgery','Breast Surgery','GI Oncology']},
 ],
 technology: [
 {name: 'Advanced Laparoscopic Systems',description: 'High-definition 4K and 3D systems for enhanced precision.',icon: FiMonitor},
 {name: 'Harmonic Scalpel',description: 'Advanced energy devices for minimal bleeding and tissue damage.',icon: FiTool},
 {name: 'Surgical Navigation',description: 'Image-guided systems for complex and precise surgical interventions.',icon: FiGlobe},
 {name: 'Enhanced Recovery Protocols',description: 'Modern protocols (ERAS) for faster post-operative recovery.',icon: FiHeart}
 ],
 reviews: [
 {name: 'Ravi Kumar',image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',rating: 5,review: "My laparoscopic surgery was a great experience. Minimal pain and quick recovery. Dr. Rajesh Kumar is a true expert."},
 {name: 'Sunita Singh',image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',rating: 5,review: "The surgical team was professional and caring. The post-operative care was excellent. I felt safe and well-cared for throughout."},
 ],
 contact: {phone: '+91 9876543215',email: 'surgery@jananihospital.com',location: 'Block E, 3rd Floor',hours: '24/7 Emergency | OPD: 9 AM - 6 PM'},
 faq: [
 {question: 'What are the benefits of minimally invasive surgery?',answer: 'Minimally invasive surgery involves smaller incisions, resulting in less pain, reduced scarring, a shorter hospital stay, and a faster return to normal activities compared to traditional open surgery.'},
 {question: 'How should I prepare for my surgery?',answer: 'Our team will provide you with detailed pre-operative instructions, which typically include dietary restrictions, medication adjustments, and other guidelines to ensure you are ready for your procedure.'},
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
 <SafeIcon icon={FiScissors} className="text-4xl text-white" />
 </div>
 <div>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{departmentData.name}</h1>
 <p className="text-lg text-teal-100 mt-2 font-medium">Excellence in Surgical Care</p>
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
 Why Choose Our Surgery Department?
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
 <h3 className="text-lg font-bold">Contact Surgery Dept.</h3>
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
 <h2 className="text-3xl font-bold text-gray-800 mb-3">Comprehensive Surgical Services</h2>
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

 export default Surgery;