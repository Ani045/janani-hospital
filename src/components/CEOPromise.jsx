import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser } = FiIcons;

const CEOPromise = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Image */}
            <div className="lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Dr. Priya Sharma - CEO"
                className="w-full h-80 lg:h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">CEO's Promise</h3>
                  <p className="text-primary-600 font-medium">Compassionate Leadership</p>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                "At Janani Hospital, we are committed to providing ethical and compassionate healthcare. Our mission is to deliver high-quality medical care at affordable cost, giving quality time and personalized attention to every patient and their families."
              </blockquote>

              <div className="border-l-4 border-primary-500 pl-6">
                <h4 className="text-xl font-bold text-gray-800">Dr. Priya Sharma</h4>
                <p className="text-primary-600 font-medium">CEO & Chief Medical Officer</p>
                <p className="text-gray-600 text-sm mt-1">MBBS, MD, 20+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOPromise;