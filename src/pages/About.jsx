import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { motion } from 'framer-motion';

const { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiArrowRight, FiMapPin, FiPhone, FiMail, FiClock, FiShield, FiActivity, FiTrendingUp, FiUser, FiCheckCircle } = FiIcons;

const About = () => {
    const milestones = [
        {
            year: '1999',
            title: 'Foundation',
            description: 'Janani Hospital was established with a vision to provide world-class healthcare.',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Indian hospital exterior/team vibes
        },
        {
            year: '2005',
            title: 'Expansion',
            description: 'Opened our second facility and expanded cardiac care services.',
            image: '/about/cardiac%20care.jpg'
        },
        {
            year: '2010',
            title: 'Recognition',
            description: 'Received JCI accreditation for quality healthcare standards.',
            image: '/about/2010.jpg'
        },
        {
            year: '2015',
            title: 'Innovation',
            description: 'Introduced robotic surgery and advanced medical technology.',
            image: '/about/2015.jpg'
        },
        {
            year: '2020',
            title: 'Digital Health',
            description: 'Launched telemedicine and digital health initiatives.',
            image: '/about/telemedicine.jpg'
        },
        {
            year: '2024',
            title: 'Excellence',
            description: 'Celebrating 25 years of healthcare excellence and innovation.',
            image: '/about/2024.png' // Female Indian Doctor (Professional)
        }
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
            color: 'text-red-500',
            bgColor: 'bg-red-50'
        },
        {
            icon: FiShield,
            title: 'Excellence',
            description: 'We strive for the highest standards in medical care, continuously improving our services and outcomes.',
            color: 'text-teal-500',
            bgColor: 'bg-teal-50'
        },
        {
            icon: FiActivity,
            title: 'Innovation',
            description: 'We embrace cutting-edge technology and innovative treatments for the best possible patient care.',
            color: 'text-orange-500',
            bgColor: 'bg-orange-50'
        },
        {
            icon: FiUsers,
            title: 'Collaboration',
            description: 'We work together as a team, fostering cooperation and communication for optimal patient outcomes.',
            color: 'text-blue-500',
            bgColor: 'bg-blue-50'
        },
        {
            icon: FiTrendingUp,
            title: 'Continuous Learning',
            description: 'We commit to ongoing education and professional development to stay at the forefront of medicine.',
            color: 'text-purple-500',
            bgColor: 'bg-purple-50'
        },
        {
            icon: FiAward,
            title: 'Integrity',
            description: 'We maintain the highest ethical standards in all our interactions and medical practices.',
            color: 'text-emerald-500',
            bgColor: 'bg-emerald-50'
        }
    ];

    const stats = [
        { number: '1M+', label: 'Patients Served', icon: FiUsers, color: 'text-teal-600' },
        { number: '50K+', label: 'Surgeries', icon: FiActivity, color: 'text-teal-600' },
        { number: '06', label: 'Cities Covered', icon: FiMapPin, color: 'text-teal-600' },
        { number: '25+', label: 'Years Glory', icon: FiAward, color: 'text-teal-600' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <div className="overflow-hidden bg-white">
            {/* Hero Section - Refined with subtle Ken Burns effect */}
            <section className="relative h-[400px] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="About Janani Hospital"
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
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">About Janani <span className="text-teal-400">Hospital</span></h1>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                Pioneering excellence in healthcare for over two decades with compassionate care and cutting-edge technology.
                            </p>
                            <Link
                                to="/appointment"
                                className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 shadow-lg shadow-teal-500/30 transition-all duration-300 inline-flex items-center space-x-2 group"
                            >
                                <span>Book Appointment</span>
                                <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Premium World-Class Healthcare Section (Reference Image Layout) */}
            <section className="py-8 bg-white relative overflow-hidden">
                {/* Floating Decorative Medical Elements - Softened for light background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] -ml-40 -mb-40"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-6"
                    >
                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="text-gray-900">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                                Providing World-Class <span className="text-teal-600">Healthcare</span> for Everyone
                            </h2>
                            <p className="text-teal-600 font-bold mb-8 text-lg tracking-wide uppercase">
                                Our Mission & Vision
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed max-w-xl antialiased font-medium mb-10">
                                Founded in 1999, Janani Hospital has grown from a local clinic into a state-of-the-art medical institution.
                                We believe that everyone deserves access to premium healthcare, delivered with empathy and precision.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-teal-50/50 border border-teal-100/30 group hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-white shadow-md flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                                        <SafeIcon icon={FiTarget} className="text-teal-600 text-xl" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-3">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed italic text-sm">
                                        "Personalized healing through advanced technology and compassionate human touch."
                                    </p>
                                </div>
                                <div className="p-8 rounded-3xl bg-orange-50/50 border border-orange-100/30 group hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-white shadow-md flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                                        <SafeIcon icon={FiEye} className="text-orange-600 text-xl" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-3">Our Vision</h3>
                                    <p className="text-gray-600 leading-relaxed italic text-sm">
                                        "Setting the global standard for accessible and ethical medical excellence."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature Image with Premium Frame */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative z-10 rounded-[48px] overflow-hidden border-8 border-gray-50 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Medical Excellence"
                                    className="w-full h-[450px] object-cover transition-all duration-1000"
                                />
                            </div>
                            {/* Abstract Floating Shapes (Reference Image Style) - Semi-transparent */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl border border-teal-400/20"
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl border border-blue-400/10"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Integrated Stats Row (Divider Style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-gray-100 pt-6"
                    >
                        {stats.map((stat, idx) => (
                            <div key={idx} className={`relative flex flex-col items-center md:items-start ${idx !== 0 ? 'lg:pl-12' : ''}`}>
                                {idx !== 0 && <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-gray-100" />}
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4">{stat.label}</p>
                                <p className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">
                                    <span className="text-teal-600 font-black mr-2">.</span>
                                    {stat.number}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Leadership Team */}
            {/* <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">Medical Leadership</span>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            Guided by <span className="text-teal-600">Expert Hands</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {leadership.map((leader, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative overflow-hidden h-96">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                                        <p className="text-white text-sm italic leading-relaxed">"{leader.bio}"</p>
                                    </div>
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-teal-700 px-4 py-2 rounded-xl text-xs font-bold shadow-xl border border-white/50">
                                        {leader.experience} EXP
                                    </div>
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                                    <p className="text-teal-600 font-semibold mb-4 text-sm tracking-wide">{leader.position}</p>
                                    <div className="flex justify-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FiHeart key={i} className="text-teal-400 fill-teal-400 w-3 h-3" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Values Section - Premium & Dynamic */}
            <section className="py-12 relative overflow-hidden bg-white">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px] -ml-64 -mt-64"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -mr-64 -mb-64"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-8 text-center">
                        <div className="max-w-2xl mx-auto">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block"
                            >
                                Our Identity
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1]"
                            >
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">DNA</span><br />
                                <span className="text-xl md:text-2xl text-gray-400 font-medium">Values that Drive Us</span>
                            </motion.h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="hidden lg:block pb-4"
                        >
                            <div className="w-24 h-[2px] bg-gradient-to-r from-teal-500 to-transparent rounded-full"></div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -12 }}
                                className="group relative bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Formal Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none">
                                    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id={`grid-pattern-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" className="text-gray-900" fill="none" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill={`url(#grid-pattern-${index})`} />
                                    </svg>
                                </div>

                                {/* Background glow on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg bg-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <div className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center`}>
                                            <SafeIcon icon={value.icon} className={`${value.color} text-2xl`} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-teal-700 transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-500 text-lg leading-relaxed antialiased font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                        {value.description}
                                    </p>
                                </div>

                                {/* Modern accent line */}
                                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left overflow-hidden">
                                    <div className={`w-full h-full bg-gradient-to-r from-teal-500 to-blue-500`}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section - Immersive & Interactive */}
            <section className="py-8 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-6">
                        <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Path</span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900">Historical <span className="text-teal-600">Milestones</span></h2>
                    </div>

                    <div className="relative">
                        {/* Center Line with Scroll Progress (Simplified for now, can be enhanced with scroll hook) */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gray-200 hidden md:block">
                            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-teal-500 to-transparent"></div>
                        </div>

                        <div className="space-y-0">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`flex items-center flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0 py-8`}
                                >
                                    {/* Content Side */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                        <div className="group relative">
                                            <h3 className="text-6xl font-black text-gray-200 absolute -top-10 -z-10 select-none transition-colors duration-500 group-hover:text-teal-100">
                                                {milestone.year}
                                            </h3>
                                            <div className={`inline-block px-4 py-1.5 bg-teal-100 text-teal-800 rounded-full font-bold text-sm mb-4 shadow-sm`}>
                                                {milestone.year}
                                            </div>
                                            <h4 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                                            <p className="text-gray-600 leading-relaxed font-medium">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="relative flex items-center justify-center w-12 h-12 z-20 hidden md:flex shrink-0">
                                        <div className="w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                                        <div className="absolute w-12 h-12 bg-teal-500/20 rounded-full animate-pulse"></div>
                                    </div>

                                    {/* Image Side */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                                        <div className="relative group overflow-hidden rounded-3xl shadow-xl aspect-[4/3] max-w-md mx-auto md:mx-0">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                            <img
                                                src={milestone.image}
                                                alt={milestone.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="w-12 h-1 bg-teal-400 mb-2"></div>
                                                <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 block">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-teal-950 rounded-[48px] p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-800/20 rounded-full blur-[140px] -mr-80 -mt-80"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>

                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                    Join Our Family of <br className="hidden md:block" />
                                    Healthy, Happy <span className="text-teal-400">Patients</span>
                                </h2>
                                <p className="text-lg text-teal-100/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Trust Janani Hospital for world-class medical attention. Our team of specialists is ready to provide the best care 24/7.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link
                                        to="/appointment"
                                        className="bg-white text-teal-950 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                                    >
                                        <SafeIcon icon={FiClock} className="text-teal-600" />
                                        <span>Book Appointment</span>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="bg-teal-800/40 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-teal-800/60 transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                                    >
                                        <SafeIcon icon={FiPhone} />
                                        <span>Contact Us</span>
                                    </Link>
                                </div>

                                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-teal-200/60 font-medium">
                                    <div className="flex items-center space-x-2"><FiCheckCircle /> <span>24/7 Emergency</span></div>
                                    <div className="flex items-center space-x-2"><FiCheckCircle /> <span>Expert Specialists</span></div>
                                    <div className="flex items-center space-x-2"><FiCheckCircle /> <span>Advanced Facilities</span></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;