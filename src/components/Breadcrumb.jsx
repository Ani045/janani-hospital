import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiChevronRight } = FiIcons;

const Breadcrumb = ({ items = [] }) => {
  // Default breadcrumb structure
  const defaultItems = [
    { label: 'Home', path: '/', icon: FiHome }
  ];

  const breadcrumbItems = [...defaultItems, ...items];

  return (
    <nav className="py-4 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <SafeIcon 
                    icon={FiChevronRight} 
                    className="text-gray-400 text-xs mx-2" 
                  />
                )}
                {isLast ? (
                  <span className="flex items-center space-x-1 text-gray-600 font-medium">
                    {item.icon && (
                      <SafeIcon icon={item.icon} className="text-sm" />
                    )}
                    <span>{item.label}</span>
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    {item.icon && (
                      <SafeIcon icon={item.icon} className="text-sm" />
                    )}
                    <span className="hover:underline">{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;