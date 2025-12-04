import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiEye, FiHeart, FiUsers, FiAward } = FiIcons;

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Janani Hospital
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Pioneering excellence in healthcare for over two decades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-6">
            {/* Mission */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiTarget} className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    To provide world-class, accessible healthcare services with advanced medical technology and personalized patient care for women and children.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiEye} className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    To be the most trusted healthcare center for women and children, setting new standards in maternal and pediatric care excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image & Stats */}
          <div className="lg:col-span-6">
            {/* Image */}
            <div className="relative mb-6">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Janani Hospital Medical Facility"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white p-4 rounded-xl shadow-xl">
                <div className="text-xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years Excellence</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-teal-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Patients</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-red-600 mb-2">25K+</div>
                <div className="text-sm text-gray-600 font-medium">Successful Deliveries</div>
              </div>
              {/* <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Medical Specialists</div>
              </div> */}
              {/* <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Emergency Care</div>
              </div> */}
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default AboutSection;