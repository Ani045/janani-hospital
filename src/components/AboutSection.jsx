import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiEye, FiHeart, FiUsers, FiAward } = FiIcons;

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Janani Hospital
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pioneering excellence in healthcare for over two decades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Janani Hospital Medical Facility"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white p-4 rounded-xl shadow-xl">
              <div className="text-xl font-bold">25+</div>
              <div className="text-sm opacity-90">Years Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-5">
            {/* Mission */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiTarget} className="text-teal-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To provide world-class, accessible healthcare services with advanced medical technology and personalized patient care.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiEye} className="text-red-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To be India's most trusted healthcare network, setting new standards in medical treatment and patient care excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="text-lg font-bold text-teal-600">1M+</div>
                <div className="text-xs text-gray-600">Patients</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="text-lg font-bold text-red-600">50K+</div>
                <div className="text-xs text-gray-600">Surgeries</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="text-lg font-bold text-teal-600">6</div>
                <div className="text-xs text-gray-600">Cities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FiHeart,
                title: 'Compassionate Care',
                description: 'We treat every patient with empathy, respect, and understanding.',
                color: 'text-red-600',
                bgColor: 'bg-red-50'
              },
              {
                icon: FiUsers,
                title: 'Excellence',
                description: 'We strive for the highest standards in medical care and services.',
                color: 'text-teal-600',
                bgColor: 'bg-teal-50'
              },
              {
                icon: FiAward,
                title: 'Innovation',
                description: 'We embrace cutting-edge technology for the best possible outcomes.',
                color: 'text-orange-600',
                bgColor: 'bg-orange-50'
              }
            ].map((value, index) => (
              <div key={index} className="text-center bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <SafeIcon icon={value.icon} className={`${value.color} text-xl`} />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;