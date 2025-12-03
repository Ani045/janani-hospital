import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiActivity, FiStar, FiArrowRight } = FiIcons;

const FeaturedServices = () => {
  const featuredServices = [
    {
      id: 'ivf',
      name: 'IVF & Fertility',
      icon: FiHeart,
      description: 'Advanced reproductive technologies with compassionate care',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      stats: { success: '72%', cases: '2000+' },
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      priority: true
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: FiUsers,
      description: 'Comprehensive healthcare for children from newborn to adolescence',
      image: 'https://images.unsplash.com/photo-1551601651-2a1e50b60e7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      stats: { success: '99%', cases: '5000+' },
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      priority: true
    },
    {
      id: 'obg',
      name: 'OBG',
      icon: FiActivity,
      description: 'Complete women\'s healthcare and maternity services',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      stats: { success: '98%', cases: '3000+' },
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      priority: false
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-teal-600">Signature Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized care programs with exceptional success rates and compassionate treatment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                service.priority ? 'ring-2 ring-teal-200 ring-offset-4' : ''
              }`}
            >
              {/* Priority Badge */}
              {service.priority && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <SafeIcon icon={FiStar} />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center shadow-lg`}>
                    <SafeIcon icon={service.icon} className="text-xl text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-teal-600">{service.stats.success}</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{service.stats.cases}</div>
                    <div className="text-xs text-gray-600">Cases Treated</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to={`/department/${service.id}`}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}
                >
                  <span>Learn More</span>
                  <SafeIcon icon={FiArrowRight} className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;