import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiMail, FiPhone, FiSend } = FiIcons;

const BookLabTest = () => {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 test: 'blood_test',
 });

 const handleSubmit = (e) => {
 e.preventDefault();
 alert(`Booking submitted for ${formData.name} for a ${formData.test}.`);
 };

 return (
 <div className="pt-24 bg-gray-50 min-h-screen">
 <div className="container mx-auto px-4">
 <div
 className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8"
 >
 <div className="text-center mb-8">
 <h1 className="text-3xl font-bold text-gray-800">Book a Lab Test</h1>
 <p className="text-gray-600 mt-2">Schedule your diagnostic tests with ease.</p>
 </div>
 <form onSubmit={handleSubmit} className="space-y-6">
 <div>
 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
 <div className="mt-1 relative rounded-md shadow-sm">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 <SafeIcon icon={FiUser} className="text-gray-400" />
 </div>
 <input
 type="text"
 name="name"
 id="name"
 className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
 placeholder="John Doe"
 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
 required
 />
 </div>
 </div>
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
 <div className="mt-1 relative rounded-md shadow-sm">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 <SafeIcon icon={FiMail} className="text-gray-400" />
 </div>
 <input
 type="email"
 name="email"
 id="email"
 className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
 placeholder="you@example.com"
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 required
 />
 </div>
 </div>
 <div>
 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
 <div className="mt-1 relative rounded-md shadow-sm">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 <SafeIcon icon={FiPhone} className="text-gray-400" />
 </div>
 <input
 type="tel"
 name="phone"
 id="phone"
 className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
 placeholder="123-456-7890"
 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
 />
 </div>
 </div>
 <div>
 <label htmlFor="test" className="block text-sm font-medium text-gray-700">Select Test</label>
 <select
 id="test"
 name="test"
 className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
 onChange={(e) => setFormData({ ...formData, test: e.target.value })}
 value={formData.test}
 >
 <option value="blood_test">Blood Test</option>
 <option value="urine_test">Urine Test</option>
 <option value="x_ray">X-Ray</option>
 <option value="mri">MRI Scan</option>
 </select>
 </div>
 <div>
 <button
 type="submit"
 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
 >
 <SafeIcon icon={FiSend} className="mr-2" />
 Book Now
 </button>
 </div>
 </form>
 </div>
 </div>
 </div>
 );
};

export default BookLabTest;