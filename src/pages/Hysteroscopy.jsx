import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiUsers,FiShield,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiTool,FiEye,FiChevronDown,FiScissors,FiActivity}=FiIcons;

 const Hysteroscopy = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

 const departmentData = {
 name: 'Hysteroscopy Department',
 icon: FiEye,
 hero: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Hysteroscopy Department offers advanced diagnostic and therapeutic procedures for uterine conditions with high-definition visualization.',
 overviewStats: [
 {icon: FiUsers,number: '800+',label: 'Procedures'},
 {icon: FiAward,number: '96%',label: 'Success Rate'},
 {icon: FiStar,number: '98%',label: 'Patient Satisfaction'},
 {icon: FiHeart,number: '8+',label: 'Years Experience'}
 ],
 highlights: [
 'Diagnostic Hysteroscopy',
 'Operative Hysteroscopy',
 'Fibroid Removal (Myomectomy)',
 'Polyp Removal (Polypectomy)',
 'Uterine Adhesion Removal',
 'Improving Fertility Outcomes'
 ],
 services: [
 {name: 'Diagnostic Hysteroscopy',description: 'Examination of the uterine cavity to diagnose abnormalities.',icon: FiEye,image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Operative Hysteroscopy',description: 'Surgical procedures performed through the hysteroscope.',icon: FiScissors,image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 doctors: [
 {name: 'Dr. Shalini Rao',specialization: 'Gynecological Endoscopist',experience: '8 years',image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=300',rating: 4.9,expertise: ['Diagnostic Hysteroscopy','Operative Hysteroscopy']}
 ],
 contact: {phone: '+91 9876543210',email: 'hysteroscopy@jananihospital.com',location: 'Block O, 1st Floor',hours: 'Mon-Sat: 9 AM - 6 PM'},
 faq: [
 {question: 'What is a hysteroscopy and why is it performed?',answer: 'Hysteroscopy is a procedure that allows a doctor to look inside the uterus to diagnose and treat causes of abnormal bleeding, infertility, and other uterine conditions. It involves inserting a thin, lighted tube called a hysteroscope through the vagina.'},
 {question: 'Is hysteroscopy a painful procedure?',answer: 'Most patients experience mild cramping, similar to menstrual cramps. The procedure is typically performed with local or general anesthesia to ensure your comfort.'},
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
 <p className="text-lg text-teal-100 mt-2 font-medium">Advanced Uterine Examination</p>
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

 export default Hysteroscopy;