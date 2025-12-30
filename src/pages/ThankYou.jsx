import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiHome, FiArrowRight } from 'react-icons/fi';

const ThankYou = () => {
    return (
        <div className="py-24 md:py-32 bg-teal-600 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorative Elements - Adjusted for dark background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/20 rounded-full blur-[100px] -ml-40 -mb-40"></div>

            {/* Dotted pattern overlay for texture */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full bg-white rounded-[2.5rem] shadow-2xl p-8 sm:p-12 text-center relative z-10"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2
                    }}
                    className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8 relative group"
                >
                    <div className="absolute inset-0 bg-teal-100 rounded-full animate-ping opacity-50"></div>
                    <FiCheckCircle className="w-12 h-12 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Thank You!
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Your message has been successfully sent. <br />
                    We'll get back to you as soon as possible.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <FiHome className="w-5 h-5" />
                        <span>Back Home</span>
                    </Link>

                    <Link
                        to="/about"
                        className="w-full sm:w-auto px-8 py-3.5 bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <span>About Us</span>
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYou;
