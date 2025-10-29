import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiPhone, FiCheckCircle } = FiIcons;

const MembershipHealthCart = () => {
 const [selectedPackage, setSelectedPackage] = useState(null);
 const [formData, setFormData] = useState({ name: '', email: '', phone: '', package: '', message: '' });
 const [isSubmitting, setIsSubmitting] = useState(false);

 const healthPackages = [
 { id: 'basic', name: 'Basic Health Check-up', price: '₹1,299', originalPrice: '₹1,999', discount: '35%', includes: ['Complete Blood Count', 'Blood Sugar Fasting', 'Liver Function Tests', 'Kidney Function Tests', 'Lipid Profile', 'ECG', 'Chest X-Ray', 'Doctor Consultation'], badge: 'Most Popular', color: 'from-teal-500 to-teal-600' },
 { id: 'comprehensive', name: 'Comprehensive Health Check-up', price: '₹2,499', originalPrice: '₹3,999', discount: '38%', includes: ['Everything in Basic', 'Thyroid Function Tests', 'Vitamin D3 & B12', 'TSH Profile', 'Urine Routine', 'Stress Test', 'Pap Smear Test', '2D Echo', 'Doctor Consultation'], badge: 'Recommended', color: 'from-blue-500 to-blue-600' },
 { id: 'executive', name: 'Executive Health Check-up', price: '₹4,999', originalPrice: '₹7,999', discount: '38%', includes: ['Everything in Comprehensive', 'Cardiac MRI', 'CT Scan', 'Pulmonary Function Test', 'Hormone Panel', 'Tumor Markers', 'Genetic Counseling', 'Nutrition Consultation', 'Senior Specialist Consultation'], badge: 'Premium', color: 'from-purple-500 to-purple-600' },
 { id: 'women', name: 'Women Health Package', price: '₹1,999', originalPrice: '₹2,999', discount: '33%', includes: ['CBC with ESR', 'Blood Sugar (Fasting & PP)', 'HbA1c', 'TSH Profile', 'Urine Routine & Culture', 'Pap Smear Test', 'USG Abdomen', 'Mammography', 'Bone Density Test', 'Gynecological Consultation'], badge: 'Popular', color: 'from-pink-500 to-pink-600' },
 { id: 'senior', name: 'Senior Citizen Package', price: '₹3,999', originalPrice: '₹5,999', discount: '33%', includes: ['Complete Blood Count', 'Kidney & Liver Function', 'Blood Sugar', 'Thyroid Function', 'Vitamin D3, B12', 'Bone Density Test', 'ECG & 2D Echo', 'Chest X-Ray', 'Urine Routine', 'Senior Specialist Consultation', 'Medication Review'], badge: 'Recommended', color: 'from-orange-500 to-orange-600' },
 { id: 'corporate', name: 'Corporate Health Package', price: '₹2,999', originalPrice: '₹4,999', discount: '40%', includes: ['Complete Blood Count', 'Basic Metabolic Panel', 'Liver Function Tests', 'Kidney Function Tests', 'ECG', 'Chest X-Ray', 'Doctor Consultation', 'Health Report Summary', 'Corporate Wellness Counseling'], badge: 'Corporate', color: 'from-green-500 to-green-600' },
 { id: 'dental', name: 'Dental Check-up', price: '₹799', originalPrice: '₹999', discount: '20%', includes: ['Oral Examination', 'Oral Health Screening', 'Dental X-Ray', 'Scaling & Polishing', 'Fluoride Treatment', 'Dental Consultation'], color: 'from-cyan-500 to-teal-600' },
 { id: 'eye', name: 'Eye Check-up', price: '₹1,299', originalPrice: '₹1599', discount: '19%', includes: ['Vision Testing', 'Intraocular Pressure', 'Refraction Test', 'Slit Lamp Examination', 'Color Vision Test', 'Eye Examination', 'Ophthalmologist Consultation'], color: 'from-violet-500 to-indigo-600' }
 ];

 const handlePackageSelect = (pkg) => {
 setSelectedPackage(pkg);
 setFormData({ ...formData, package: pkg.id });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 setIsSubmitting(true);
 setTimeout(() => {
 setIsSubmitting(false);
 alert('Thank you! We will contact you soon.');
 setFormData({ name: '', email: '', phone: '', package: '', message: '' });
 }, 1000);
 };

 return (
 <div className="pt-16">
 <section className="py-16 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Health Packages</h2>
 <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose from our comprehensive health check-up packages.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {healthPackages.map((pkg, index) => (
 <div key={pkg.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
 {pkg.badge && (
 <div className="relative">
 <div className="absolute top-0 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-b-lg">
 {pkg.badge}
 </div>
 </div>
 )}
 <div className={`p-6 text-white bg-gradient-to-r ${pkg.color}`}>
 <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
 <div className="flex items-baseline space-x-2">
 <span className="text-3xl font-bold">{pkg.price}</span>
 <span className="text-lg line-through opacity-70">{pkg.originalPrice}</span>
 <span className="bg-white/20 text-xs font-semibold px-2 py-1 rounded-full">{pkg.discount} OFF</span>
 </div>
 </div>
 <div className="p-6 flex-grow">
 <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
 <div className="space-y-2">
 {pkg.includes.map((service, idx) => (
 <div key={idx} className="flex items-start space-x-2">
 <SafeIcon icon={FiCheckCircle} className="text-teal-600 text-sm flex-shrink-0 mt-1" />
 <span className="text-gray-700 text-sm">{service}</span>
 </div>
 ))}
 </div>
 </div>
 <div className="p-6 bg-gray-50">
 <button onClick={() => handlePackageSelect(pkg)} className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${selectedPackage?.id === pkg.id ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-teal-500 hover:text-white'}`}>
 <SafeIcon icon={FiCalendar} />
 <span>{selectedPackage?.id === pkg.id ? 'Selected' : 'Select Package'}</span>
 </button>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {selectedPackage && (
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div className="max-w-2xl mx-auto">
 <div className="bg-gray-50 rounded-2xl p-8 mb-6">
 <h3 className="text-2xl font-bold text-gray-800 mb-2">Book: {selectedPackage.name}</h3>
 <p className="text-gray-600">Fill in your details to schedule your appointment.</p>
 </div>
 <form onSubmit={handleSubmit} className="space-y-4">
 {/* Form fields here */}
 <button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300">
 {isSubmitting ? 'Booking...' : 'Book Appointment'}
 </button>
 </form>
 </div>
 </div>
 </section>
 )}
 </div>
 );
};

export default MembershipHealthCart;