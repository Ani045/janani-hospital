import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Breadcrumb pageName="Privacy Policy" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy <span className="text-emerald-600">Policy</span></h1>
          
          <div className="prose prose-emerald max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                At Janani Hospitals, we are committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information Collection</h2>
              <p>
                We collect information that you provide to us directly, such as when you book an appointment, fill out a contact form, or subscribe to our newsletter. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Personal identification (Name, Email, Phone Number)</li>
                <li>Medical history and reason for visit (when booking appointments)</li>
                <li>Technical data (IP address, browser type, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Information</h2>
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Schedule and manage medical appointments</li>
                <li>Communicate with you regarding your health and our services</li>
                <li>Send automated confirmation emails to patients and doctors</li>
                <li>Improve our website and patient experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p>
                We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. Medical records are handled with the highest level of confidentiality in compliance with healthcare regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or providing medical services, provided they agree to keep this information confidential.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-100 text-sm text-gray-400 text-center italic">
              Last updated: May 04, 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
