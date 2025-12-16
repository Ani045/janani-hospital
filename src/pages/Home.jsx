import React from 'react';
import Hero from '../components/Hero';
import DepartmentsSection from '../components/DepartmentsSection';
import DoctorsSection from '../components/DoctorsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import JananiHospitalSections from '../components/JananiHospitalSections';

const Home = () => {
 return (
 <>
 <Hero />
  <DepartmentsSection />
  <AboutSection />
  <JananiHospitalSections />
 {/* <DoctorsSection /> */}
 <TestimonialsSection />
 <FaqSection />
 <ContactSection />
 </>
 );
};

export default Home;