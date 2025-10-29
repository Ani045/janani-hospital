import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiBaby,FiActivity,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiGlobe,FiTool,FiChevronDown,FiAmbulance}=FiIcons;

 const Neonatology = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);
 
 const departmentData = {
 name: 'Neonatology Department',
 icon: FiBaby,
 hero: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Neonatology Department provides specialized care for newborns, especially premature and critically ill infants, with state-of-the-art NICU facilities.',
 overviewStats: [
 {icon: FiUsers,number: '3K+',label: 'Newborns Cared'},
 {icon: FiBaby,number: '99%',label: 'Survival Rate'},
 {icon: FiAward,number: '24/7',label: 'NICU Care'},
 {icon: FiClock,number: 'Level III',label: 'NICU Level'}
 ],
 highlights: [
 'Level III NICU Facility',
 'Experienced Neonatologists',
 'Advanced Ventilation Support',
 'Parental Counseling',
 'Developmental Care',
 '24/7 Emergency Services'
 ],
 services: [
 {name: 'Intensive Care',description: 'Comprehensive intensive care for critically ill newborns with advanced life support systems.',icon: FiMonitor,stats: {patients: '1.5K+',success: '95%'},image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Premature Baby Care',description: 'Specialized care for premature infants with thermoregulation and nutrition support.',icon: FiBaby,stats: {patients: '1.2K+',success: '96%'},image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 doctors: [
 {name: 'Dr. Anjali Sharma',specialization: 'Senior Neonatologist',experience: '18 years',image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=300',rating: 4.9,expertise: ['Neonatal Intensive Care','Preterm Care']},
 ],
 technology: [
 {name: 'Advanced Ventilators',description: 'State-of-the-art neonatal ventilators with sophisticated monitoring systems.',icon: FiMonitor},
 {name: 'Incubators',description: 'Advanced incubators with precise temperature and humidity control.',icon: FiTool},
 ],
 contact: {phone: '+91 9876543219',email: 'neonatology@jananihospital.com',location: 'Block I, 1st Floor',hours: '24/7 Emergency | OPD: 9 AM - 6 PM',emergencyPhone: '+91 40 4012 3465'},
 faq: [
 {question: 'What is a Level III NICU?', answer: 'A Level III Neonatal Intensive Care Unit (NICU) is equipped to care for very small or very sick newborn babies. We have a full range of specialists and equipment to provide the highest level of care.'},
 {question: 'Can parents stay with their baby in the NICU?', answer: 'We encourage parents to be with their baby as much as possible. While we have specific guidelines for the safety of all infants, we provide facilities and support for parents to be actively involved in their baby\'s care.'}
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
 <p className="text-lg text-teal-100 mt-2 font-medium">Leading Newborn Intensive Care</p>
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

 export default Neonatology;