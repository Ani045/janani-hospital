import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiBaby,FiActivity,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiGlobe,FiTool,FiChevronDown,FiAmbulance}=FiIcons;

 const CriticalCare = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);
 
 const departmentData = {
 name: 'Critical Care Department',
 icon: FiHeart,
 hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Critical Care Department provides comprehensive intensive care for critically ill patients with advanced monitoring and life support systems.',
 overviewStats: [
 {icon: FiUsers,number: '2K+',label: 'Critical Patients'},
 {icon: FiActivity,number: '95%',label: 'Recovery Rate'},
 {icon: FiAward,number: '24/7',label: 'ICU Coverage'},
 {icon: FiClock,number: 'Level III',label: 'ICU Level'}
 ],
 highlights: [
 'Level III ICU Facility',
 'Multidisciplinary Team',
 'Advanced Life Support',
 '24/7 Specialist Coverage',
 'Modern Monitoring Systems',
 'Comprehensive Critical Care'
 ],
 services: [
 {name: 'Medical ICU',description: 'Intensive care for patients with severe medical conditions.',icon: FiHeart,stats: {patients: '800+',success: '94%'},image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Surgical ICU',description: 'Specialized post-operative intensive care for surgical patients.',icon: FiActivity,stats: {patients: '600+',success: '96%'},image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 doctors: [
 {name: 'Dr. Rajesh Kumar',specialization: 'Intensivist & Critical Care Specialist',experience: '20 years',image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=300',rating: 4.9,expertise: ['Critical Care','Ventilator Management']},
 ],
 technology: [
 {name: 'Advanced Ventilators',description: 'State-of-the-art ventilators with advanced monitoring.',icon: FiMonitor},
 {name: 'Patient Monitoring',description: 'Continuous monitoring of vital signs.',icon: FiTool},
 ],
 contact: {phone: '+91 9876543220',email: 'criticalcare@jananihospital.com',location: 'Block J, 2nd Floor',hours: '24/7 Emergency | OPD: 9 AM - 6 PM',emergencyPhone: '+91 40 4012 3466'},
 faq: [
 {question: 'What is an ICU?', answer: 'An Intensive Care Unit (ICU) is a special department of a hospital that provides intensive care medicine. ICUs cater to patients with severe or life-threatening illnesses and injuries, which require constant care, close supervision from life support equipment and medication.'},
 {question: 'What are the visiting hours for the ICU?', answer: 'Due to the critical nature of patient care, visiting hours are restricted. Please check with the ICU reception for the specific timings and guidelines for visitors.'}
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
 <p className="text-lg text-teal-100 mt-2 font-medium">Advanced Intensive Care</p>
 </div>
 </div>
 <p className="text-lg text-white/95 max-w-3xl leading-relaxed">{departmentData.description}</p>
 <div className="flex flex-wrap gap-3 mt-6">
 <Link to="/appointment" className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2">
 <SafeIcon icon={FiCalendar} className="text-lg" />
 <span>Book Consultation</span>
 </Link>
 <a href={`tel:${departmentData.contact.emergencyPhone}`} className="bg-red-600/20 backdrop-blur-md text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-red-600/30 transition-all flex items-center space-x-2">
 <SafeIcon icon={FiAmbulance} className="text-lg" />
 <span>Emergency</span>
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
 };

 export default CriticalCare;