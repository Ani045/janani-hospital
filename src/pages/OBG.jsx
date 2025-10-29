import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import {motion, AnimatePresence} from 'framer-motion';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiBaby,FiActivity,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiGlobe,FiTool,FiChevronDown,FiScissors}=FiIcons;

 const OBG = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

 const departmentData = {
 name: 'OBG Department',
 hero: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our OBG Department provides complete women\'s healthcare from adolescence through menopause with expert gynecologists and obstetricians.',
 overviewStats: [
 {icon: FiUsers,number: '8K+',label: 'Deliveries'},
 {icon: FiBaby,number: '99.5%',label: 'Safe Births'},
 {icon: FiAward,number: '98%',label: 'Success Rate'},
 {icon: FiClock,number: '24/7',label: 'Labor Room'}
 ],
 highlights: [
 'High-Risk Pregnancy Management',
 'Painless Delivery Options',
 'Advanced Laparoscopic Surgery',
 'Comprehensive Gynecological Care',
 '24/7 Labor & Delivery Services',
 'Women Wellness Programs'
 ],
 services: [
 {name: 'Maternity Care',description: 'Complete pregnancy care from conception to delivery with advanced monitoring.',icon: FiHeart,procedures: ['Antenatal Care','Normal Delivery','C-Section','Postnatal Care'],stats: {patients: '3K+',success: '99%'},image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Gynecological Surgery',description: 'Advanced surgical procedures for various gynecological conditions.',icon: FiScissors,procedures: ['Hysterectomy','Ovarian Cyst Surgery','Fibroid Removal','Endometriosis Treatment'],stats: {patients: '1.5K+',success: '98%'},image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'High-Risk Pregnancy',description: 'Specialized care for complicated pregnancies with expert monitoring.',icon: FiShield,procedures: ['Multiple Pregnancy','Diabetes in Pregnancy','Hypertension Disorders','Fetal Monitoring'],stats: {patients: '800+',success: '97%'},image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Infertility Treatment',description: 'Comprehensive evaluation and treatment for female infertility.',icon: FiActivity,procedures: ['Ovulation Induction','IUI','Fertility Testing','Counseling'],stats: {patients: '900+',success: '65%'},image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'}
 ],
 doctors: [
 {name: 'Dr. Lakshmi Nair',specialization: 'Senior Obstetrician & Gynecologist',experience: '25 years',image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',rating: 4.9,expertise: ['High-Risk Pregnancy','Gynecological Surgery','Maternal Medicine']}
 ],
 technology: [
 {name: 'Labor Delivery Suites',description: 'Modern LDR rooms with advanced fetal monitoring and emergency equipment.',icon: FiMonitor},
 {name: 'Ultrasound Services',description: '4D ultrasound and Doppler studies for comprehensive fetal assessment.',icon: FiGlobe},
 {name: 'Laparoscopic Surgery',description: 'Advanced equipment for minimally invasive gynecological surgery.',icon: FiTool},
 {name: 'Fetal Monitoring',description: 'Continuous electronic fetal monitoring for high-risk pregnancies.',icon: FiHeart}
 ],
 facilities: ['Labor Delivery Rooms (8)','Postnatal Ward (15 Beds)','Gynecological Ward (10 Beds)','Operation Theaters (2)','Ultrasound Room','Consultation Rooms','Counseling Room','Neonatal Care Unit'],
 achievements: ['Over 8,000 successful deliveries','99.5% safe delivery rate','First hospital with 4D ultrasound','Excellence in laparoscopic surgery','High-risk pregnancy center of excellence','Women\'s health champion'],
 reviews: [
 {name: 'Deepa Iyer',image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',rating: 5,review: "My maternity experience was wonderful. The doctors and staff are very caring and professional. I felt safe and supported throughout my pregnancy."},
 {name: 'Priya Singh',image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',rating: 5,review: "Dr. Lakshmi Nair is an amazing doctor. She handled my high-risk pregnancy with utmost care. The facilities are top-notch."},
 ],
 contact: {phone: '+91 9876543213',email: 'obg@jananihospital.com',location: 'Block A, 3rd Floor',hours: '24/7 Labor Room | OPD: 9 AM - 8 PM'},
 faq: [
 {question: 'What maternity packages do you offer?',answer: 'We offer a range of maternity packages, from basic antenatal care to comprehensive delivery packages. Please contact our front desk for detailed information and pricing.'},
 {question: 'Do you provide painless delivery options?',answer: 'Yes, we offer epidural analgesia for a painless labor and delivery experience. Our anesthesiologists are available 24/7 to provide this service.'},
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
 <SafeIcon icon={FiUsers} className="text-4xl text-white" />
 </div>
 <div>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{departmentData.name}</h1>
 <p className="text-lg text-teal-100 mt-2 font-medium">Leading Women Healthcare Center</p>
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
 {departmentData.overviewStats.map((stat,index) => (
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
 Why Choose Our OBG Department?
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {departmentData.highlights.map((highlight,index) => (
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
 <h3 className="text-lg font-bold">Contact OBG Department</h3>
 </div>
 <div className="space-y-4 mb-6">
 {[
 {icon: FiPhone,label: 'Department Phone',value: departmentData.contact.phone},
 {icon: FiMail,label: 'Email Address',value: departmentData.contact.email},
 {icon: FiMapPin,label: 'Location',value: departmentData.contact.location},
 {icon: FiClock,label: 'Working Hours',value: departmentData.contact.hours}
 ].map((item,idx) => (
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
 <h2 className="text-3xl font-bold text-gray-800 mb-3">Comprehensive Women Healthcare</h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {departmentData.services.map((service,index) => (
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
 {departmentData.faq.map((faq,index) => (
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

 export default OBG;