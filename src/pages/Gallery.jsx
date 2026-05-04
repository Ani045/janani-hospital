import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiPlay, FiMaximize2, FiX } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: '/src/assets/images/WhatsApp Image 2026-04-25 at 3.00.53 PM.jpeg',
      category: 'Facilities',
      title: 'Hospital Entrance'
    },
    {
      id: 2,
      type: 'image',
      src: '/src/assets/images/WhatsApp Image 2026-04-25 at 3.01.07 PM.jpeg',
      category: 'Infrastructure',
      title: 'Reception Area'
    },
    {
      id: 3,
      type: 'image',
      src: '/src/assets/images/WhatsApp Image 2026-04-25 at 3.01.16 PM.jpeg',
      category: 'Facilities',
      title: 'Consultation Room'
    },
    {
      id: 4,
      type: 'image',
      src: '/src/assets/images/WhatsApp Image 2026-04-25 at 3.01.17 PM.jpeg',
      category: 'Infrastructure',
      title: 'Waiting Lounge'
    },
    {
      id: 5,
      type: 'image',
      src: '/src/assets/images/WhatsApp Image 2026-04-25 at 3.01.18 PM.jpeg',
      category: 'Facilities',
      title: 'Modern Equipment'
    },
    {
      id: 6,
      type: 'video',
      src: '/src/assets/images/WhatsApp Video 2026-04-25 at 3.10.10 PM.mp4',
      category: 'Infrastructure',
      title: 'Hospital Tour',
      thumbnail: '/src/assets/images/WhatsApp Image 2026-04-25 at 3.03.13 PM.jpeg'
    },
    {
      id: 7,
      type: 'image',
      src: '/src/assets/images/WhatsApp Image 2026-04-25 at 3.03.14 PM.jpeg',
      category: 'Team',
      title: 'Our Medical Team'
    },
    {
      id: 8,
      type: 'image',
      src: '/src/assets/images/WhatsApp Image 2026-04-25 at 3.03.14 PM (1).jpeg',
      category: 'Events',
      title: 'Health Awareness Camp'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Facilities', 'Team', 'Events'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Breadcrumb pageName="Gallery" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Visual <span className="text-emerald-600">Showcase</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our state-of-the-art facilities and glimpse into the care we provide at Janani Hospitals.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                filter === cat 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold flex items-center justify-between">
                    {item.title}
                    {item.type === 'video' ? <FiPlay className="text-emerald-400" /> : <FiMaximize2 />}
                  </h3>
                </div>

                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                    <FiPlay size={24} fill="currentColor" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white hover:text-emerald-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <FiX size={32} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedImage.type === 'video' ? (
                  <video 
                    src={selectedImage.src} 
                    controls 
                    autoPlay 
                    className="w-full h-full rounded-3xl shadow-2xl"
                  />
                ) : (
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.title}
                    className="w-full h-full object-contain rounded-3xl shadow-2xl"
                  />
                )}
                <div className="mt-8 text-center text-white">
                  <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                  <p className="text-emerald-400 font-bold uppercase tracking-widest mt-2">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;