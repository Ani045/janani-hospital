import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCalendar, FiHeart, FiAmbulance, FiUser} = FiIcons;

const Contact = () => {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 subject: '',
 message: ''
 });
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleChange = (e) => {
 setFormData({...formData, [e.target.name]: e.target.value});
 };

 const handleSubmit = async (e) => {
 e.preventDefault();
 setIsSubmitting(true);
 // Simulate form submission
 setTimeout(() => {
 setIsSubmitting(false);
 alert('Thank you! Your message has been sent successfully.');
 setFormData({name: '', email: '', phone: '', subject: '', message: ''});
 }, 2000);
 };

 const contactInfo = [
 {
 icon: FiMapPin,
 title: 'Visit Us',
 info: 'Plot No. 123, Road No. 36\nJubilee Hills, Hyderabad\nTelangana - 500033',
 color: 'text-teal-600',
 bgColor: 'bg-teal-50'
 },
 {
 icon: FiPhone,
 title: 'Call Us',
 info: '+91 40 4012 3456\n24/7 Emergency Hotline',
 color: 'text-red-600',
 bgColor: 'bg-red-50'
 },
 {
 icon: FiMail,
 title: 'Email Us',
 info: 'info@jananihospital.com\nappointments@jananihospital.com',
 color: 'text-blue-600',
 bgColor: 'bg-blue-50'
 },
 {
 icon: FiClock,
 title: 'Hours',
 info: '24/7 Emergency Care\nOPD: 8:00 AM - 8:00 PM',
 color: 'text-orange-600',
 bgColor: 'bg-orange-50'
 }
 ];

 const quickActions = [
 {
 icon: FiCalendar,
 title: 'Book Appointment',
 description: 'Schedule a consultation with our specialists',
 color: 'from-teal-500 to-teal-600'
 },
 {
 icon: FiAmbulance,
 title: 'Emergency Care',
 description: '24/7 emergency medical services available',
 color: 'from-red-500 to-red-600'
 },
 {
 icon: FiUser,
 title: 'Patient Portal',
 description: 'Access your medical records and reports',
 color: 'from-blue-500 to-blue-600'
 }
 ];

 return (
 <div className="pt-16">
 {/* Hero Section */}
 <section className="relative h-80 overflow-hidden">
 <img 
 src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
 alt="Contact Janani Hospital" 
 className="w-full h-full object-cover" 
 />
 <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-80"></div>
 <div className="absolute inset-0 flex items-center">
 <div className="container mx-auto px-4">
 <div
 className="text-white max-w-2xl"
 >
 <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
 <p className="text-lg text-white/90 mb-6">
 Have questions about your health? Our expert team is here to help you 24/7.
 </p>
 <a
 href="tel:+914040123456"
 className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center space-x-2"
 >
 <SafeIcon icon={FiPhone} />
 <span>Emergency Call</span>
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* Quick Actions */}
 <section className="py-12 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {quickActions.map((action, index) => (
 <div
 key={index}
 className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
 >
 <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
 <SafeIcon icon={action.icon} className="text-xl text-white" />
 </div>
 <h3 className="text-lg font-bold text-gray-800 mb-2">{action.title}</h3>
 <p className="text-gray-600 text-sm">{action.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Contact Form & Info */}
 <section className="py-12 bg-white">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 {/* Contact Form */}
 <div
 >
 <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
 <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
 <form onSubmit={handleSubmit} className="space-y-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
 Full Name *
 </label>
 <input
 type="text"
 id="name"
 name="name"
 value={formData.name}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
 placeholder="Enter your full name"
 />
 </div>
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
 Email Address *
 </label>
 <input
 type="email"
 id="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
 placeholder="Enter your email"
 />
 </div>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
 Phone Number
 </label>
 <input
 type="tel"
 id="phone"
 name="phone"
 value={formData.phone}
 onChange={handleChange}
 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
 placeholder="Enter your phone number"
 />
 </div>
 <div>
 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
 Subject *
 </label>
 <select
 id="subject"
 name="subject"
 value={formData.subject}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
 >
 <option value="">Select a subject</option>
 <option value="appointment">Appointment Inquiry</option>
 <option value="emergency">Emergency</option>
 <option value="general">General Information</option>
 <option value="billing">Billing Question</option>
 <option value="feedback">Feedback</option>
 <option value="other">Other</option>
 </select>
 </div>
 </div>

 <div>
 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
 Message *
 </label>
 <textarea
 id="message"
 name="message"
 value={formData.message}
 onChange={handleChange}
 required
 rows={4}
 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors resize-vertical"
 placeholder="Tell us about your medical concern or question..."
 />
 </div>

 <button
 type="submit"
 disabled={isSubmitting}
 className={`w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 ${
 isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'
 }`}
 >
 {isSubmitting ? (
 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
 ) : (
 <>
 <SafeIcon icon={FiSend} />
 <span>Send Message</span>
 </>
 )}
 </button>
 </form>
 </div>
 </div>

 {/* Contact Information */}
 <div
 className="space-y-6"
 >
 {/* Contact Info Cards */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {contactInfo.map((info, index) => (
 <div
 key={index}
 className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
 >
 <div className={`w-10 h-10 ${info.bgColor} rounded-lg flex items-center justify-center mb-3`}>
 <SafeIcon icon={info.icon} className={`text-lg ${info.color}`} />
 </div>
 <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
 <p className="text-gray-600 text-sm whitespace-pre-line">{info.info}</p>
 </div>
 ))}
 </div>

 {/* Map Placeholder */}
 <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
 <h3 className="text-lg font-bold text-gray-800 mb-4">Find Us</h3>
 <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
 <div className="text-center text-gray-600">
 <SafeIcon icon={FiMapPin} className="text-3xl mb-2 mx-auto" />
 <p className="font-medium">Janani Hospital</p>
 <p className="text-sm">Jubilee Hills, Hyderabad</p>
 </div>
 </div>
 <div className="mt-4 p-3 bg-gray-50 rounded-lg">
 <p className="text-sm text-gray-600">
 Conveniently located in Jubilee Hills, easily accessible by public transport with ample parking facilities.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Emergency Contact */}
 <section className="py-12 bg-red-600">
 <div className="container mx-auto px-4">
 <div
 className="text-center"
 >
 <SafeIcon icon={FiHeart} className="text-5xl text-white mb-4 mx-auto" />
 <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Medical Emergency?</h2>
 <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
 Don't wait. Call our 24/7 emergency hotline for immediate medical assistance.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href="tel:+914040123456"
 className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg"
 >
 <SafeIcon icon={FiPhone} />
 <span>+91 40 4012 3456</span>
 </a>
 <a
 href="tel:108"
 className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center justify-center space-x-2"
 >
 <SafeIcon icon={FiAmbulance} />
 <span>Call 108 - Ambulance</span>
 </a>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Contact;