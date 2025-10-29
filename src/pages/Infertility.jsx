import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiBaby,FiActivity,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiChevronDown}=FiIcons;

 const Infertility = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);
 
 const departmentData = {
 name: 'Infertility Treatment Center',
 icon: FiHeart,
 hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Infertility Treatment Center provides comprehensive evaluation and treatment for male and female infertility with advanced reproductive technologies.',
 overviewStats: [
 {icon: FiUsers,number: '1.5K+',label: 'Couples Treated'},
 {icon: FiBaby,number: '65%',label: 'Success Rate'},
 {icon: FiAward,number: '95%',label: 'Satisfaction'},
 {icon: FiClock,number: '24/7',label: 'Support'}
 ],
 highlights: [
 'Comprehensive Evaluation',
 'Advanced Diagnostics',
 'Personalized Treatment',
 'Counseling Support',
 'Advanced ART Services',
 'Male & Female Infertility'
 ],
 services: [
 {name: 'Female Infertility',description: 'Comprehensive evaluation and treatment of female infertility conditions.',icon: FiHeart,stats: {patients: '800+',success: '68%'},image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Male Infertility',description: 'Specialized evaluation and treatment of male infertility factors.',icon: FiUsers,stats: {patients: '600+',success: '62%'},image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 doctors: [
 {name: 'Dr. Priya Sharma',specialization: 'Fertility Specialist',experience: '16 years',image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=300',rating: 4.9,expertise: ['Female Infertility','IUI Treatment']},
 ],
 contact: {phone: '+91 9876543223',email: 'infertility@jananihospital.com',location: 'Block M, 2nd Floor',hours: '24/7 Emergency | OPD: 9 AM - 6 PM'},
 faq: [
 {question: 'When should we seek help for infertility?', answer: 'It is generally recommended to consult a fertility specialist if you have been unable to conceive after one year of regular, unprotected intercourse (or after six months if the woman is over 35).'},
 {question: 'What are the first steps in infertility treatment?', answer: 'The first step is a comprehensive evaluation of both partners, which may include hormone testing, semen analysis, and imaging tests to identify the cause of infertility. Based on the results, a personalized treatment plan is created.'}
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
 <p className="text-lg text-teal-100 mt-2 font-medium">A Journey to Parenthood</p>
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

 export default Infertility;