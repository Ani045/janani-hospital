import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiBaby,FiActivity,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiGlobe,FiTool,FiChevronDown}=FiIcons;

 const ANC = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

 const departmentData = {
 name: 'Antenatal Care (ANC)',
 icon: FiUsers,
 hero: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Antenatal Care program provides comprehensive care during pregnancy, ensuring the well-being of both mother and baby.',
 overviewStats: [
 {icon: FiUsers,number: '1.8K+',label: 'Pregnancies Monitored'},
 {icon: FiActivity,number: '98%',label: 'Healthy Deliveries'},
 {icon: FiAward,number: '100%',label: 'Screening Rate'},
 {icon: FiHeart,number: '20+',label: 'Years Experience'}
 ],
 highlights: [
 'Regular Pregnancy Monitoring',
 'High-Risk Pregnancy Care',
 'Prenatal Screening & Diagnostics',
 'Nutritional Counseling',
 'Childbirth Education Classes',
 'Birth Preparation Support'
 ],
 services: [
 {name: 'Routine Checkups',description: 'Regular monitoring of maternal and fetal health.',icon: FiHeart,image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Ultrasound Scans',description: 'Advanced imaging for fetal development tracking.',icon: FiMonitor,image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 contact: {phone: '+91 9876543210',email: 'anc@jananihospital.com',location: 'Block K, 1st Floor',hours: 'OPD: 9 AM - 6 PM'},
 faq: [
 {question: 'How often should I have an antenatal check-up?', answer: 'The frequency of check-ups depends on your stage of pregnancy and overall health. Generally, it is monthly until 28 weeks, every two weeks until 36 weeks, and then weekly until delivery.'},
 {question: 'What is involved in a typical antenatal visit?', answer: 'A typical visit includes monitoring your weight and blood pressure, checking the baby\'s growth and heart rate, and discussing any concerns you may have. You may also have urine tests and blood tests at various stages.'}
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
 <p className="text-lg text-teal-100 mt-2 font-medium">Care for a Healthy Pregnancy</p>
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
 </div>
 );
 };

 export default ANC;