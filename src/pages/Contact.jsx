import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { motion } from 'framer-motion';

const {FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCalendar, FiAmbulance, FiUser, FiArrowRight} = FiIcons;

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
            info: 'info@jananihospital.com',
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
        <div className="overflow-hidden bg-white">
            {/* Hero Section - Enhanced with project theme */}
            <section className="relative h-[400px] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                    alt="Contact Janani Hospital" 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-start pt-20 sm:pt-24 lg:pt-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white max-w-2xl"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Get In <span className="text-teal-400">Touch</span></h1>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                Have questions about your health? Our expert team is here to help you 24/7 with compassionate care and medical excellence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+914040123456"
                                    className="bg-red-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-600 shadow-lg shadow-red-500/30 transition-all duration-300 inline-flex items-center justify-center space-x-2 group"
                                >
                                    <SafeIcon icon={FiPhone} className="text-lg group-hover:scale-110 transition-transform" />
                                    <span>Emergency Call</span>
                                </a>
                                <Link
                                    to="/appointment"
                                    className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 shadow-lg shadow-teal-500/30 transition-all duration-300 inline-flex items-center justify-center space-x-2 group"
                                >
                                    <span>Book Appointment</span>
                                    <SafeIcon icon={FiArrowRight} className="text-lg group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Actions - Enhanced with project theme */}
            <section className="py-12 bg-white relative overflow-hidden">
                {/* Floating Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] -ml-40 -mb-40"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">Quick Access</span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">How Can We <span className="text-teal-600">Help You?</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed">Choose from our convenient services designed to make your healthcare journey seamless.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {quickActions.map((action, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-500 text-center"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <SafeIcon icon={action.icon} className="text-xl text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-teal-700 transition-colors">{action.title}</h3>
                                <p className="text-gray-500 text-base leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{action.description}</p>
                                
                                {/* Modern accent line */}
                                <div className="mt-6 w-full h-1.5 bg-gray-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left overflow-hidden rounded-full">
                                    <div className={`w-full h-full bg-gradient-to-r ${action.color}`}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info - Enhanced with project theme */}
            <section className="py-12 bg-gray-50 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px] -ml-64 -mt-64"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -mr-64 -mb-64"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">Connect With Us</span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">Let's Start a <span className="text-teal-600">Conversation</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed">We're here to listen, help, and provide the medical care you deserve.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
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
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
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
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
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
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
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
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
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
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white resize-vertical"
                                            placeholder="Tell us about your medical concern or question..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 shadow-lg shadow-teal-600/30 transition-all duration-300 flex items-center justify-center space-x-2 ${
                                            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-teal-600/40 hover:scale-105'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <SafeIcon icon={FiSend} className="text-lg" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Contact Info Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        className="group bg-white rounded-[24px] p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500"
                                    >
                                        <div className={`w-14 h-14 ${info.bgColor} rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                            <SafeIcon icon={info.icon} className={`text-lg ${info.color}`} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">{info.title}</h3>
                                        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line font-medium opacity-90 group-hover:opacity-100 transition-opacity">{info.info}</p>
                                        
                                        {/* Accent line */}
                                        <div className="mt-4 w-full h-1 bg-gray-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left overflow-hidden rounded-full">
                                            <div className={`w-full h-full ${info.color.replace('text-', 'bg-')}`}></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;