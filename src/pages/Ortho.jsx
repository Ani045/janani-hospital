import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiBaby,FiActivity,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiGlobe,FiTool,FiChevronDown,FiTrendingUp} = FiIcons;

 const Ortho = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

 const departmentData = {
 name: 'Orthopedics Department',
 hero: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Orthopedics Department provides comprehensive care for bone, joint, and musculoskeletal conditions with advanced surgical techniques and rehabilitation.',
 overviewStats: [
 {icon: FiUsers,number: '8K+',label: 'Joint Replacements'},
 {icon: FiAward,number: '98%',label: 'Success Rate'},
 {icon: FiUsers,number: '15+',label: 'Expert Orthopedists'},
 {icon: FiClock,number: '24/7',label: 'Trauma Care'}
 ],
 highlights: [
 'Advanced Joint Replacement Surgery',
 'Minimally Invasive Arthroscopic Surgery',
 'Center for Sports Medicine Excellence',
 'Comprehensive Spine Surgery Center',
 '24/7 Emergency Trauma Services',
 'Integrated Rehabilitation Programs'
 ],
 services: [
 {name: 'Joint Replacement',description: 'Advanced surgery for knee, hip, and shoulder joints using modern, long-lasting implants.',icon: FiActivity,procedures: ['Knee Replacement','Hip Replacement','Shoulder Replacement'],stats: {patients: '3K+',success: '98%'},image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Arthroscopy',description: 'Minimally invasive surgery for joint problems like ligament tears and cartilage damage.',icon: FiMonitor,procedures: ['Knee Arthroscopy','Shoulder Arthroscopy','ACL Reconstruction'],stats: {patients: '2K+',success: '99%'},image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Spine Surgery',description: 'Comprehensive surgery for degenerative, traumatic, and deformity conditions of the spine.',icon: FiTarget,procedures: ['Spinal Fusion','Disc Replacement','Scoliosis Surgery'],stats: {patients: '1.2K+',success: '96%'},image: 'https://images.unsplash.com/photo-1606037039918-a6a3fb4a37b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 doctors: [
 {name: 'Dr. Rajesh Kumar',specialization: 'Senior Orthopedic & Joint Replacement Surgeon',experience: '25 years',image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',rating: 4.9,expertise: ['Joint Replacement','Arthroscopy','Trauma']},
 {name: 'Dr. Anita Sharma',specialization: 'Spine Surgeon',experience: '18 years',image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',rating: 4.8,expertise: ['Spine Surgery','Deformity Correction']},
 ],
 technology: [
 {name: 'Computer-Assisted Surgery',description: 'Advanced navigation for precise joint replacement and spine surgery.',icon: FiMonitor},
 {name: 'Arthroscopy Equipment',description: 'State-of-the-art 4K arthroscopic systems for clear visualization.',icon: FiTool},
 {name: 'Advanced Imaging',description: '3D C-Arm and intraoperative imaging for complex orthopedic procedures.',icon: FiGlobe},
 {name: 'Rehabilitation Center',description: 'Fully equipped center with modern physiotherapy equipment.',icon: FiHeart}
 ],
 contact: {phone: '+91 9876543216',email: 'ortho@jananihospital.com',location: 'Block F, 2nd Floor',hours: '24/7 Trauma | OPD: 9 AM - 6 PM'},
 faq: [
 {question: 'When should I consider joint replacement surgery?',answer: 'Joint replacement is typically recommended when joint pain and stiffness severely limit your daily activities, and non-surgical treatments are no longer effective. Our specialists can provide a thorough evaluation.'},
 {question: 'What is recovery like after arthroscopic surgery?',answer: 'Recovery from arthroscopic surgery is much faster than open surgery. Most patients can go home the same day and return to light activities within a few days, with a full recovery in a few weeks to months depending on the procedure.'},
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
 <SafeIcon icon={FiActivity} className="text-4xl text-white" />
 </div>
 <div>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{departmentData.name}</h1>
 <p className="text-lg text-teal-100 mt-2 font-medium">Leading Bone & Joint Care</p>
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

 <section className="py-12 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <div className="inline-block mb-4">
 <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Our Services</span>
 </div>
 <h2 className="text-3xl font-bold text-gray-800 mb-3">Comprehensive Orthopedic Services</h2>
 <p className="text-gray-600 max-w-2xl mx-auto">From joint replacement to sports medicine, we provide complete orthopedic care.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {departmentData.services.map((service,index) => (
 <div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-teal-200">
 <div className="relative h-48 overflow-hidden">
 <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
 </div>
 <div className="p-5">
 <h3 className="text-white font-bold text-base flex-1">{service.name}</h3>
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
 </div>
 );
 };

 export default Ortho;