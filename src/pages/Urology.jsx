import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
 import SafeIcon from '../common/SafeIcon';
 import * as FiIcons from 'react-icons/fi';

 const {FiArrowLeft,FiHeart,FiBaby,FiActivity,FiUsers,FiShield,FiTarget,FiCheckCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCalendar,FiArrowRight,FiStar,FiAward,FiMonitor,FiGlobe,FiTool,FiChevronDown,FiDroplet} = FiIcons;

 const Urology = () => {
 const [activeIndex,setActiveIndex] = useState(null);
 const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

 const departmentData = {
 name: 'Urology Department',
 hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
 description: 'Our Urology Department provides comprehensive care for urinary tract and male reproductive system disorders with advanced diagnostic and treatment facilities.',
 overviewStats: [
 {icon: FiUsers,number: '5K+',label: 'Patients Treated'},
 {icon: FiAward,number: '98%',label: 'Success Rate'},
 {icon: FiUsers,number: '10+',label: 'Expert Urologists'},
 {icon: FiClock,number: '24/7',label: 'Emergency Care'}
 ],
 highlights: [
 'Advanced Endourology & Laser Surgery',
 'Laparoscopic & Robotic Urology',
 'Comprehensive Kidney Stone Management',
 'Male Infertility & Andrology Clinic',
 'Dedicated Prostate Care Center',
 '24/7 Emergency Urological Services'
 ],
 services: [
 {name: 'Endourology',description: 'Minimally invasive procedures for urinary tract disorders using advanced endoscopic techniques.',icon: FiMonitor,procedures: ['Ureteroscopy','PCNL','Cystoscopy'],stats: {patients: '2K+',success: '98%'},image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Kidney Stone Management',description: 'Comprehensive treatment for kidney stones with laser and minimally invasive techniques.',icon: FiDroplet,procedures: ['ESWL','Laser Lithotripsy','PCNL'],stats: {patients: '1.8K+',success: '97%'},image: 'https://images.unsplash.com/photo-1581093452422-48b4f3b8f5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 {name: 'Prostate Care',description: 'Complete care for prostate health, including BPH treatment and prostate cancer management.',icon: FiShield,procedures: ['TURP','Laser Prostatectomy','Prostate Biopsy'],stats: {patients: '1.5K+',success: '96%'},image: 'https://images.unsplash.com/photo-1606037039918-a6a3fb4a37b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'},
 ],
 doctors: [
 {name: 'Dr. Rajesh Kumar',specialization: 'Senior Urologist & Andrologist',experience: '22 years',image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',rating: 4.9,expertise: ['Endourology','Laparoscopy','Kidney Stones']},
 {name: 'Dr. Anita Sharma',specialization: 'Uro-Oncologist',experience: '18 years',image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',rating: 4.8,expertise: ['Urological Cancers','Robotic Surgery']},
 ],
 contact: {phone: '+91 9876543217',email: 'urology@jananihospital.com',location: 'Block G, 2nd Floor',hours: '24/7 Emergency | OPD: 9 AM - 6 PM'},
 faq: [
 {question: 'What are the common symptoms of a urinary tract infection (UTI)?',answer: 'Common symptoms include a frequent urge to urinate, a burning sensation during urination, cloudy or strong-smelling urine, and pelvic pain. If you experience these symptoms, it is important to consult a urologist.'},
 {question: 'How are kidney stones treated?',answer: 'Treatment for kidney stones depends on their size and location. Small stones may pass on their own, while larger stones may require procedures like laser lithotripsy (breaking stones with a laser) or ESWL (shock wave therapy).'},
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
 <SafeIcon icon={FiDroplet} className="text-4xl text-white" />
 </div>
 <div>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{departmentData.name}</h1>
 <p className="text-lg text-teal-100 mt-2 font-medium">Advanced Urological Care</p>
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
 <h2 className="text-3xl font-bold text-gray-800 mb-3">Comprehensive Urological Services</h2>
 <p className="text-gray-600 max-w-2xl mx-auto">From kidney stones to prostate care, we provide complete urological services.</p>
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

 export default Urology;