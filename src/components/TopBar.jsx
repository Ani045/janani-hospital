import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiPhone, FiClock } = FiIcons;

const TopBar = () => {
  const locations = [
    { name: 'Gurugram', icon: FiMapPin },
    { name: 'Lucknow', icon: FiMapPin },
    { name: 'Amethi', icon: FiMapPin },
    { name: 'Sohna', icon: FiMapPin },
    { name: 'Raebareli', icon: FiMapPin },
    { name: 'Fursatganj', icon: FiMapPin }
  ];

  return (
    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-2 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Locations */}
          <div className="hidden md:flex items-center space-x-6 overflow-x-auto">
            {locations.map((location, index) => (
              <div
                key={location.name}
                className="flex items-center space-x-2 hover:bg-white/20 px-3 py-1 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <SafeIcon icon={location.icon} className="text-sm" />
                <span className="text-sm font-medium">{location.name}</span>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiPhone} className="text-sm" />
              <span className="hidden sm:block">+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiClock} className="text-sm" />
              <span className="hidden sm:block">24/7 Emergency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;