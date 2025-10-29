import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiArrowRight, FiMapPin, FiPhone, FiMail, FiClock, FiShield, FiActivity, FiTrendingUp, FiUser } = FiIcons;

const About = () => {
 const milestones = [
 { year: '1999', title: 'Foundation', description: 'Janani Hospital was established with a vision to provide world-class healthcare' },
 { year: '2005', title: 'Expansion', description: 'Opened our second facility and expanded cardiac care services' },
 { year: '2010', title: 'Recognition', description: 'Received JCI accreditation for quality healthcare standards' },
 { year: '2015', title: 'Innovation', description: 'Introduced robotic surgery and advanced medical technology' },
 { year: '2020', title: 'Digital Health', description: 'Launched telemedicine and digital health initiatives' },
 { year: '2024', title: 'Excellence', description: 'Celebrating 25 years of healthcare excellence and innovation' }
 ];

 const leadership = [
 {
 name: 'Dr. Priya Sharma',
 position: 'CEO & Chief Medical Officer',
 experience: '20+ Years',
 image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400',
 bio: 'Leading healthcare transformation with innovative medical practices and patient-centered care approach.'
 },
 {
 name: 'Dr. Rajesh Kumar',
 position: 'Chief of Surgery',
 experience: '18+ Years',
 image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400',
 bio: 'Pioneering advanced surgical techniques and minimally invasive procedures for better patient outcomes.'
 },
 {
 name: 'Dr. Sarah Johnson',
 position: 'Chief of Cardiology',
 experience: '15+ Years',
 image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=400',
 bio: 'Expert in interventional cardiology with a focus on preventive cardiac care and patient education.'
 }
 ];

 const values = [
 {
 icon: FiHeart,
 title: 'Compassionate Care',
 description: 'We treat every patient with empathy, respect, and understanding, ensuring their comfort and dignity.',
 color: 'text-red-600',
 bgColor: 'bg-red-50'
 },
 {
 icon: FiShield,
 title: 'Excellence',
 description: 'We strive for the highest standards in medical care, continuously improving our services and outcomes.',
 color: 'text-teal-600',
 bgColor: 'bg-teal-50'
 },
 {
 icon: FiActivity,
 title: 'Innovation',
 description: 'We embrace cutting-edge technology and innovative treatments for the best possible patient care.',
 color: 'text-orange-600',
 bgColor: 'bg-orange-50'
 },
 {
 icon: FiUsers,
 title: 'Collaboration',
 description: 'We work together as a team, fostering cooperation and communication for optimal patient outcomes.',
 color: 'text-blue-600',
 bgColor: 'bg-blue-50'
 },
 {
 icon: FiTrendingUp,
 title: 'Continuous Learning',
 description: 'We commit to ongoing education and professional development to stay at the forefront of medicine.',
 color: 'text-purple-600',
 bgColor: 'bg-purple-50'
 },
 {
 icon: FiAward,
 title: 'Integrity',
 description: 'We maintain the highest ethical standards in all our interactions and medical practices.',
 color: 'text-green-600',
 bgColor: 'bg-green-50'
 }
 ];

 const stats = [
 { number: '1M+', label: 'Patients Served', icon: FiUsers, color: 'text-teal-600' },
 { number: '50K+', label: 'Surgeries Performed', icon: FiActivity, color: 'text-red-600' },
 { number: '6', label: 'Cities Served', icon: FiMapPin, color: 'text-orange-600' },
 { number: '25+', label: 'Years of Excellence', icon: FiAward, color: 'text-blue-600' }
 ];

 return (
 <div className="pt-14">
 {/* Hero Section */}
 <section className="relative h-96 overflow-hidden">
 <img 
 src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
 alt="About Janani Hospital" 
 className="w-full h-full object-cover" 
 />
 <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-80"></div>
 <div className="absolute inset-0 flex items-center">
 <div className="container mx-auto px-4">
 <div
 className="text-white max-w-3xl"
 >
 <h1 className="text-4xl md:text-5xl font-bold mb-4">About Janani Hospital</h1>
 <p className="text-xl text-white/90 mb-6">
 Pioneering excellence in healthcare for over two decades with compassionate care and cutting-edge technology.
 </p>
 <Link
 to="/appointment"
 className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
 >
 <span>Book Appointment</span>
 <SafeIcon icon={FiArrowRight} />
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Mission & Vision */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 {/* Image Side */}
 <div
 className="relative"
 >
 <img
 src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
 alt="Janani Hospital Medical Facility"
 className="rounded-xl shadow-lg w-full h-80 object-cover"
 />
 {/* Floating Badge */}
 <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white p-4 rounded-xl shadow-xl">
 <div className="text-xl font-bold">25+</div>
 <div className="text-sm opacity-90">Years Excellence</div>
 </div>
 </div>

 {/* Content Side */}
 <div
 className="space-y-6"
 >
 {/* Mission */}
 <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
 <div className="flex items-start space-x-4">
 <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
 <SafeIcon icon={FiTarget} className="text-teal-600 text-xl" />
 </div>
 <div>
 <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
 <p className="text-gray-600 leading-relaxed">
 To provide world-class, accessible healthcare services with advanced medical technology and personalized patient care. We are committed to healing, preventing disease, and promoting wellness in our communities.
 </p>
 </div>
 </div>
 </div>

 {/* Vision */}
 <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
 <div className="flex items-start space-x-4">
 <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
 <SafeIcon icon={FiEye} className="text-red-600 text-xl" />
 </div>
 <div>
 <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
 <p className="text-gray-600 leading-relaxed">
 To be India's most trusted healthcare network, setting new standards in medical treatment and patient care excellence while making quality healthcare accessible to all.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Stats Section */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <div
 className="text-center mb-12"
 >
 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
 Our <span className="text-teal-600">Impact</span>
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Numbers that reflect our commitment to excellence and patient care
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {stats.map((stat, index) => (
 <div
 key={index}
 className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100"
 >
 <SafeIcon icon={stat.icon} className={`text-4xl ${stat.color} mb-4 mx-auto`} />
 <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
 <div className="text-gray-600 font-medium">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Leadership Team */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div
 className="text-center mb-12"
 >
 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
 Our <span className="text-teal-600">Leadership</span>
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Meet the visionary leaders driving healthcare excellence at Janani Hospital
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {leadership.map((leader, index) => (
 <div
 key={index}
 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
 >
 <div className="relative">
 <img
 src={leader.image}
 alt={leader.name}
 className="w-full h-64 object-cover"
 />
 <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
 {leader.experience}
 </div>
 </div>
 <div className="p-6">
 <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
 <p className="text-teal-600 font-semibold mb-3">{leader.position}</p>
 <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Values Section */}
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <div
 className="text-center mb-12"
 >
 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
 Our Core <span className="text-teal-600">Values</span>
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 The principles that guide our commitment to exceptional healthcare
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {values.map((value, index) => (
 <div
 key={index}
 className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
 >
 <div className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-4`}>
 <SafeIcon icon={value.icon} className={`${value.color} text-xl`} />
 </div>
 <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
 <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Timeline Section */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div
 className="text-center mb-12"
 >
 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
 Our <span className="text-teal-600">Journey</span>
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Milestones in our commitment to healthcare excellence
 </p>
 </div>

 <div className="relative">
 {/* Timeline Line */}
 <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-200"></div>
 
 <div className="space-y-12">
 {milestones.map((milestone, index) => (
 <div
 key={index}
 className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
 >
 <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
 <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
 <div className="text-teal-600 font-bold text-lg mb-2">{milestone.year}</div>
 <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
 <p className="text-gray-600">{milestone.description}</p>
 </div>
 </div>
 
 {/* Timeline Dot */}
 <div className="w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>
 
 <div className="w-1/2"></div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 bg-teal-600">
 <div className="container mx-auto px-4">
 <div
 className="text-center"
 >
 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
 Ready to Experience Excellence?
 </h2>
 <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
 Join thousands of patients who trust Janani Hospital for their healthcare needs
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 to="/appointment"
 className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
 >
 <SafeIcon icon={FiUser} />
 <span>Book Appointment</span>
 </Link>
 <Link
 to="/contact"
 className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
 >
 <SafeIcon icon={FiPhone} />
 <span>Contact Us</span>
 </Link>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default About;