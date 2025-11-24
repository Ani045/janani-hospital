import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
FiArrowLeft, FiHeart, FiBaby, FiActivity, FiUsers, FiShield, FiTarget, FiCheckCircle,
FiPhone, FiMail, FiMapPin, FiClock, FiCalendar, FiArrowRight, FiStar, FiAward,
FiMonitor, FiGlobe, FiTool, FiChevronDown, FiScissors
} = FiIcons;

const Paediatrics = () => {
const [activeIndex, setActiveIndex] = useState(null);
const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

const departmentData = {
name: 'Paediatrics Department',
hero: 'https://images.unsplash.com/photo-1551601651-2a1e50b60e7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
description: 'Our Paediatrics Department provides comprehensive healthcare for children from newborn to adolescence with a child-friendly approach and 24/7 emergency services.',
overviewStats: [
{ icon: FiUsers, number: '12K+', label: 'Happy Children' },
{ icon: FiBaby, number: '3K+', label: 'Newborns Cared' },
{ icon: FiAward, number: '99%', label: 'Success Rate' },
{ icon: FiClock, number: '24/7', label: 'Emergency Care' }
],
highlights: ['Child-Friendly Hospital Environment', 'Experienced Pediatric Team', 'Advanced Neonatal ICU (NICU)', 'Comprehensive Vaccination Programs', 'Pediatric Emergency Services', 'Child Development Assessment'],
services: [
{ name: 'General Paediatrics', description: 'Comprehensive healthcare for children including routine check-ups, vaccinations, and treatment of common illnesses.', icon: FiHeart, procedures: ['Routine Check-ups', 'Vaccinations', 'Common Illnesses', 'Growth Monitoring'], stats: { patients: '5K+', success: '99%' }, image: 'https://images.unsplash.com/photo-1599045118108-bf729626848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
{ name: 'Neonatology', description: 'Specialized care for newborns, especially premature or ill infants, in our state-of-the-art NICU.', icon: FiBaby, procedures: ['NICU Care', 'Premature Baby Care', 'Neonatal Surgery', 'Newborn Screening'], stats: { patients: '1.2K+', success: '95%' }, image: 'https://images.unsplash.com/photo-1596542469333-ac445f08f103?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
{ name: 'Pediatric Surgery', description: 'Surgical procedures for children ranging from minor surgeries to complex operations with pediatric expertise.', icon: FiScissors, procedures: ['Appendectomy', 'Hernia Repair', 'Circumcision', 'Congenital Surgery'], stats: { patients: '800+', success: '98%' }, image: 'https://images.unsplash.com/photo-1606037039918-a6a3fb4a37b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
{ name: 'Developmental Paediatrics', description: 'Assessment and management of developmental delays, autism, ADHD, and learning disabilities in children.', icon: FiTarget, procedures: ['Developmental Assessment', 'Autism Evaluation', 'ADHD Management', 'Learning Disability Support'], stats: { patients: '1.5K+', success: '92%' }, image: 'https://images.unsplash.com/photo-1560421226-997184a44131?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
{ name: 'Pediatric Cardiology', description: 'Specialized heart care for children including diagnosis and treatment of congenital heart diseases.', icon: FiActivity, procedures: ['Heart Murmur Evaluation', 'Echocardiography', 'Congenital Heart Surgery', 'Cardiac Catheterization'], stats: { patients: '600+', success: '96%' }, image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
{ name: 'Pediatric Emergency', description: '24/7 emergency care for children with specialized pediatric emergency protocols and staff.', icon: FiShield, procedures: ['Emergency Assessment', 'Trauma Care', 'Poisoning Treatment', 'Respiratory Emergency'], stats: { patients: '2K+', success: '98%' }, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
],
doctors: [
{ name: 'Dr. Anjali Sharma', specialization: 'Senior Pediatrician & Neonatologist', experience: '20 years', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.9, expertise: ['Neonatal Care', 'Pediatric Emergency', 'Vaccination'] },
{ name: 'Dr. Rahul Verma', specialization: 'Pediatric Surgeon', experience: '15 years', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.8, expertise: ['Pediatric Surgery', 'Neonatal Surgery', 'Minimal Access Surgery'] },
{ name: 'Dr. Priya Patel', specialization: 'Developmental Pediatrician', experience: '12 years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.9, expertise: ['Autism Spectrum Disorders', 'ADHD', 'Learning Disabilities'] },
{ name: 'Dr. Meera Singh', specialization: 'Pediatric Cardiologist', experience: '14 years', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.8, expertise: ['Congenital Heart Disease', 'Echocardiography', 'Pediatric Intervention'] }
],
technology: [
{ name: 'Advanced NICU', description: 'Level III NICU with ventilators, incubators, and monitoring systems.', icon: FiMonitor },
{ name: 'Pediatric ICU', description: 'Dedicated PICU for critically ill children with advanced life support.', icon: FiShield },
{ name: 'Child-Friendly Facilities', description: 'Play areas, colorful decor, and child-sized equipment for comfort.', icon: FiUsers },
{ name: 'Vaccination Center', description: 'Cold chain storage for vaccines and comfortable vaccination rooms.', icon: FiHeart }
],
facilities: ['Advanced Neonatal ICU (Level III)', 'Pediatric Intensive Care Unit', 'Child-Friendly Emergency Bay', 'Pediatric Operating Theaters', 'Vaccination Center', 'Play Therapy Rooms', 'Lactation Support Center', 'Pediatric Pharmacy'],
achievements: ['Over 12,000 children treated successfully', '99% success rate in pediatric procedures', 'First hospital to implement family-centered care', 'Advanced NICU with 95% survival rate', 'Excellence award in pediatric medicine', '3000+ successful neonatal interventions'],
reviews: [
{ name: 'Prakash Rao', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "The pediatric team is amazing. They made my son feel so comfortable during his treatment. The child-friendly environment is a huge plus!" },
{ name: 'Sunita Kumar', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "Our experience with the NICU was exceptional. The doctors and nurses provided the best care for our premature baby. We are forever grateful." },
{ name: 'Arjun Reddy', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "Dr. Anjali Sharma is wonderful with children. The entire staff is caring and professional. Highly recommend this department for any child's healthcare needs." }
],
contact: { phone: '+91 9876543212', email: 'paediatrics@jananihospital.com', location: 'Block C, 1st Floor', hours: '24/7 Emergency | OPD: 9 AM - 8 PM' },
faq: [
{ question: 'What age group of children do you treat?', answer: 'Our Paediatrics Department provides care for children from birth through adolescence, typically up to 18 years of age.' },
{ question: 'Do you offer 24/7 emergency services for children?', answer: 'Yes, we have a dedicated Pediatric Emergency bay that is open 24/7 to handle any medical emergencies for children.' },
{ question: 'What facilities are available in your NICU?', answer: 'Our Level III NICU is equipped with advanced ventilators, incubators, monitoring systems, and specialized staff for critically ill newborns.' },
{ question: 'Do you provide vaccination services?', answer: 'Yes, we offer comprehensive vaccination programs with proper cold chain storage and comfortable vaccination rooms for children.' }
]
};

return (
<div className="pt-16 bg-gray-50">
<section className="relative h-[60vh] min-h-[450px] bg-slate-900">
<div 
className="absolute inset-0 bg-cover bg-center" 
style={{ backgroundImage: `url(${departmentData.hero})` }}
/>
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
<SafeIcon icon={FiBaby} className="text-4xl text-white" />
</div>
<div>
<h1 className="text-4xl md:text-5xl font-bold tracking-tight">{departmentData.name}</h1>
<p className="text-lg text-teal-100 mt-2 font-medium">Leading Child Care Center in Hyderabad</p>
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
Why Choose Our Paediatrics Department?
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

<div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
<h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
<div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mr-3">
<SafeIcon icon={FiMonitor} className="text-teal-600 text-xl" />
</div>
Advanced Technology & Equipment
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{departmentData.technology.map((tech, index) => (
<div key={index} className="group p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md">
<div className="flex items-start space-x-3">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200 group-hover:border-teal-300 transition-colors">
<SafeIcon icon={tech.icon} className="text-teal-600 text-xl" />
</div>
<div className="flex-1">
<h4 className="font-bold text-gray-800 text-sm mb-1">{tech.name}</h4>
<p className="text-gray-600 text-xs leading-relaxed">{tech.description}</p>
</div>
</div>
</div>
))}
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white rounded-2xl p-6 shadow-xl sticky top-20 border-2 border-teal-100">
<div className="bg-teal-600 text-white text-center py-3 rounded-xl mb-6">
<h3 className="text-lg font-bold">Contact Paediatrics Dept.</h3>
<p className="text-teal-100 text-xs mt-1">We're here to help your child</p>
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
<div className="space-y-3">
<Link to="/appointment" className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
<SafeIcon icon={FiCalendar} className="text-lg" />
<span>Book Consultation</span>
</Link>
<a href={`tel:${departmentData.contact.phone}`} className="w-full border-2 border-teal-600 text-teal-600 py-3.5 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center space-x-2">
<SafeIcon icon={FiPhone} className="text-lg" />
<span>Call Department</span>
</a>
</div>
<div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
<p className="text-xs text-gray-600 text-center">
<span className="font-bold text-teal-700">24/7 Emergency Support</span> available for existing patients
</p>
</div>
</div>
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
<h2 className="text-3xl font-bold text-gray-800 mb-3">Comprehensive Child Healthcare</h2>
<p className="text-gray-600 max-w-2xl mx-auto">From routine check-ups to specialized pediatric care, we offer complete healthcare services for children of all ages.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{departmentData.services.map((service, index) => (
<div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-teal-200">
<div className="relative h-48 overflow-hidden">
<img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
<div className="absolute inset-0 bg-teal-900/20" />
<div className="absolute top-3 right-3">
<div className="bg-white rounded-xl px-3 py-1.5 shadow-lg">
<div className="text-xs text-gray-500 font-medium">Success Rate</div>
<div className="text-lg font-bold text-teal-600">{service.stats.success}</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-teal-900/90 backdrop-blur-sm p-4">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
<SafeIcon icon={service.icon} className="text-white text-lg" />
</div>
<h3 className="text-white font-bold text-base flex-1">{service.name}</h3>
</div>
</div>
</div>
<div className="p-5">
<div className="flex items-center space-x-2 mb-3 p-2 bg-teal-50 rounded-lg">
<SafeIcon icon={FiUsers} className="text-teal-600 text-lg" />
<span className="text-sm text-gray-700">
<span className="font-bold text-teal-700">{service.stats.patients}</span> Patients Treated
</span>
</div>
<p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
<div className="mb-4">
<p className="text-xs font-semibold text-gray-500 mb-2">KEY PROCEDURES:</p>
<div className="flex flex-wrap gap-2">
{service.procedures.slice(0, 3).map((proc, i) => (
<span key={i} className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-lg font-medium border border-red-100">{proc}</span>
))}
{service.procedures.length > 3 && (
<span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-medium">+{service.procedures.length - 3} more</span>
)}
</div>
</div>
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
<div className="inline-block mb-4">
<span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Our Team</span>
</div>
<h2 className="text-3xl font-bold text-gray-800 mb-3">Our Pediatric Experts</h2>
<p className="text-gray-600">Meet our team of renowned pediatric specialists dedicated to your child's health</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{departmentData.doctors.map((doctor, index) => (
<div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
<div className="relative overflow-hidden h-48">
<img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
<div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1 shadow">
<SafeIcon icon={FiStar} className="text-yellow-400 text-xs" />
<span className="text-xs font-bold">{doctor.rating}</span>
</div>
</div>
<div className="p-4">
<h3 className="text-sm font-bold text-gray-800">{doctor.name}</h3>
<p className="text-teal-600 font-semibold text-xs mt-0.5">{doctor.specialization}</p>
<p className="text-gray-500 text-xs mt-1">{doctor.experience}</p>
<div className="mt-2 mb-3">
<div className="flex flex-wrap gap-1">
{doctor.expertise.slice(0, 2).map((exp, idx) => (
<span key={idx} className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded text-xs font-medium">{exp}</span>
))}
</div>
</div>
<Link to="/appointment" className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition-all flex items-center justify-center space-x-1 text-xs">
<SafeIcon icon={FiCalendar} className="text-xs" />
<span>Book Now</span>
</Link>
</div>
</div>
))}
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-10">
<div className="inline-block mb-4">
<span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">Testimonials</span>
</div>
<h2 className="text-3xl font-bold text-gray-800 mb-3">What Parents Say</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Real stories from families who trusted us with their children's care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{departmentData.reviews.map((review, index) => (
<div
key={index}
className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
>
<div className="flex items-center mb-4">
<img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
<div>
<h4 className="font-bold text-gray-800">{review.name}</h4>
<div className="flex items-center mt-1">
{[...Array(review.rating)].map((_, i) => (
<SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-sm" />
))}
</div>
</div>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.review}"</p>
<div className="text-xs text-gray-500 font-medium flex items-center">
<svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C14.43,5.73 15.92,6.6 16.78,7.39L18.88,5.3C16.99,3.52 14.86,2.5 12.19,2.5C6.42,2.5 2,7.3 2,12.5C2,17.7 6.42,22.5 12.19,22.5C17.62,22.5 21.75,18.5 21.75,12.81C21.75,12.09 21.64,11.59 21.35,11.1Z"/></svg>
Verified on Google
</div>
</div>
))}
</div>
</div>
</section>

<section className="py-12 bg-gray-50">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100">
<div className="flex items-center space-x-3 mb-6">
<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
<SafeIcon icon={FiShield} className="text-teal-600 text-2xl" />
</div>
<h3 className="text-2xl font-bold text-gray-800">World-Class Facilities</h3>
</div>
<div className="grid grid-cols-1 gap-3">
{departmentData.facilities.map((facility, index) => (
<div key={index} className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group">
<div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
<SafeIcon icon={FiCheckCircle} className="text-white text-sm" />
</div>
<span className="text-gray-700 text-sm font-medium leading-relaxed">{facility}</span>
</div>
))}
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100">
<div className="flex items-center space-x-3 mb-6">
<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
<SafeIcon icon={FiAward} className="text-teal-600 text-2xl" />
</div>
<h3 className="text-2xl font-bold text-gray-800">Our Achievements</h3>
</div>
<div className="space-y-3">
{departmentData.achievements.map((achievement, index) => (
<div key={index} className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group">
<div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
<SafeIcon icon={FiStar} className="text-white text-sm" />
</div>
<span className="text-gray-700 text-sm font-medium leading-relaxed">{achievement}</span>
</div>
))}
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-10">
<div className="inline-block mb-4">
<span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">FAQs</span>
</div>
<h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our pediatric services and child healthcare</p>
</div>

<div className="max-w-4xl mx-auto space-y-4">
{departmentData.faq.map((faq, index) => (
<div
key={index}
className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md"
>
<button
onClick={() => toggleFaq(index)}
className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
>
<div className="flex items-start space-x-4 flex-1">
<div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
<span className="text-teal-700 font-bold text-lg">Q</span>
</div>
<span className="font-bold text-gray-800 text-base leading-relaxed pt-1">{faq.question}</span>
</div>
<div
className="ml-4"
>
<div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
<SafeIcon icon={FiChevronDown} className="text-teal-600" />
</div>
</div>
</button>
<AnimatePresence>
{activeIndex === index && (
<div
className="overflow-hidden"
>
<div className="px-6 pb-6 pt-2">
<div className="flex items-start space-x-4 pl-14">
<div className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
{faq.answer}
</div>
</div>
</div>
</div>
)}
</AnimatePresence>
</div>
))}
</div>

<div className="mt-10 text-center">
<div className="bg-teal-50 border-2 border-teal-100 rounded-2xl p-8 max-w-2xl mx-auto">
<h3 className="text-xl font-bold text-gray-800 mb-2">Still have questions?</h3>
<p className="text-gray-600 mb-4">Our pediatric experts are here to help you with personalized guidance for your child</p>
<div className="flex flex-wrap justify-center gap-3">
<Link to="/appointment" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2">
<SafeIcon icon={FiCalendar} className="text-lg" />
<span>Schedule Consultation</span>
</Link>
<a href={`tel:${departmentData.contact.phone}`} className="bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center space-x-2">
<SafeIcon icon={FiPhone} className="text-lg" />
<span>Call Us Now</span>
</a>
</div>
</div>
</div>
</div>
</section>
</div>
);
};

export default Paediatrics;