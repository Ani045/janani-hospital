import React, { useState, useEffect } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiChevronLeft, FiChevronRight, FiHeart, FiUsers, FiAward, FiMessageSquare } = FiIcons;

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    { id: 1, name: 'Ahmed Raza Khan', condition: 'Cardiac Surgery', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300', testimonial: 'The cardiac surgery team at Janani Hospital saved my life. The care and expertise provided were exceptional. I am forever grateful.', treatment: 'Bypass Surgery' },
    { id: 2, name: 'Sneha Sharma', condition: 'Eye Surgery', rating: 5, image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300', testimonial: 'My cataract surgery was seamless and painless. The doctors explained everything clearly and I can see perfectly now.', treatment: 'Cataract Surgery' },
    { id: 3, name: 'David Thompson', condition: 'Orthopedic Treatment', rating: 5, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300', testimonial: 'After my knee replacement surgery, I can walk without pain again. The rehabilitation program was excellent.', treatment: 'Knee Replacement' },
    { id: 4, name: 'Priya Patel', condition: 'Maternity Care', rating: 5, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300', testimonial: 'The maternity care at Janani Hospital was wonderful. The staff made me feel comfortable throughout my pregnancy journey.', treatment: 'Delivery Care' },
    { id: 5, name: 'Rajesh Kumar', condition: 'Neurology Treatment', rating: 5, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300', testimonial: 'The neurological treatment I received was outstanding. The doctors were very knowledgeable and caring.', treatment: 'Brain Surgery' },
    { id: 6, name: 'Maria Garcia', condition: 'Pediatric Care', rating: 5, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300', testimonial: 'The pediatric team took excellent care of my daughter. They made her feel comfortable and the treatment was successful.', treatment: 'Child Surgery' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: FiUsers, number: '50K+', label: 'Happy Patients', color: 'text-teal-600' },
    { icon: FiAward, number: '98%', label: 'Success Rate', color: 'text-green-600' },
    { icon: FiHeart, number: '25+', label: 'Years Experience', color: 'text-red-600' }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
      <SafeIcon icon={FiMessageSquare} className="text-teal-200 text-3xl mb-4" />
      <p className="text-gray-600 italic text-sm leading-relaxed mb-4 flex-grow">"{testimonial.testimonial}"</p>
      <div className="flex items-center space-x-4 border-t border-gray-100 pt-4 mt-auto">
        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-teal-600">{testimonial.treatment}</p>
          <div className="flex items-center mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-xs" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Patient <span className="text-teal-600">Success Stories</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real experiences from our patients who found healing at Janani Hospital</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <SafeIcon icon={stat.icon} className={`text-3xl ${stat.color} mb-3 mx-auto`} />
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;