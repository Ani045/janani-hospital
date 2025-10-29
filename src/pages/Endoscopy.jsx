import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiEye,FiActivity,FiCheckCircle,FiPhone,FiCalendar,FiArrowRight,FiChevronDown}=FiIcons;

 const Endoscopy = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);
 
 const departmentData = {
 name: 'Endoscopy Department',
 icon: FiEye,
 hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Endoscopy Department provides advanced diagnostic and therapeutic endoscopic procedures with state-of-the-art equipment.',
 overviewStats: [
 {icon: FiActivity,number: '2K+',label: 'Procedures'},
 {icon: FiCheckCircle,number: '99%',label: 'Success Rate'}
 ],
 highlights: [
 'Diagnostic Endoscopy',
 'Therapeutic Endoscopy',
 'Advanced Imaging',
 'Experienced Gastroenterologists'
 ],
 services: [
 {name: 'Upper GI Endoscopy',description: 'Examination of the esophagus, stomach, and duodenum.',icon: FiEye,image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Colonoscopy',description: 'Examination of the large intestine and rectum.',icon: FiEye,image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 contact: {phone: '+91 9876543210'},
 faq: [
 {question: 'How should I prepare for an endoscopy?', answer: 'Preparation varies depending on the type of endoscopy. Generally, you will need to fast for several hours before the procedure. Our team will provide you with specific instructions.'},
 {question: 'Is the endoscopy procedure painful?', answer: 'You may receive a sedative to help you relax and feel comfortable. Most patients report little to no discomfort during the procedure.'}
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
 <p className="text-lg text-teal-100 mt-2 font-medium">Advanced Diagnostic Procedures</p>
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

 export default Endoscopy;