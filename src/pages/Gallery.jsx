import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiCamera,FiHeart,FiUsers,FiAward,FiMapPin,FiPhone,FiMail,FiClock,FiArrowRight}=FiIcons;

const Gallery=()=> {
 const [selectedCategory,setSelectedCategory]=useState('all');
 
 const categories=[
 {id: 'all',name: 'All Photos',icon: FiCamera},
 {id: 'infrastructure',name: 'Infrastructure',icon: FiMapPin},
 {id: 'facilities',name: 'Facilities',icon: FiActivity},
 {id: 'team',name: 'Our Team',icon: FiUsers},
 {id: 'events',name: 'Events',icon: FiAward}
 ];

 const galleryImages={
 all: [
 {
 id: 1,
 title: 'Modern Hospital Building',
 description: 'State-of-the-art hospital building with advanced medical facilities',
 image: 'https://images.unsplash.com/photo-1538108149386-4e9c7a2a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 2,
 title: 'Advanced Operation Theater',
 description: 'Modern operation theater with advanced surgical equipment',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 3,
 title: 'ICU Ward',
 description: 'Intensive Care Unit with advanced monitoring systems',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 4,
 title: 'Medical Team',
 description: 'Our dedicated medical team providing quality healthcare services',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 5,
 title: 'Consultation Room',
 description: 'Comfortable consultation rooms for patient care',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 6,
 title: 'Laboratory',
 description: 'Advanced diagnostic laboratory with modern equipment',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 }
 ],
 infrastructure: [
 {
 id: 7,
 title: 'Hospital Reception',
 description: 'Modern reception area with welcoming atmosphere',
 image: 'https://images.unsplash.com/photo-1519494026812-3d8d1f1c236?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 8,
 title: 'Emergency Room',
 description: '24/7 emergency room with advanced life support systems',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 9,
 title: 'Pharmacy',
 description: 'Well-stocked pharmacy with essential medications',
 image: 'https://images.unsplash.com/photo-1584308343422-652a4e0f0f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 }
 ],
 facilities: [
 {
 id: 10,
 title: 'Patient Ward',
 description: 'Comfortable patient wards with modern amenities',
 image: 'https://images.unsplash.com/photo-15153769037373-b7e6e7f8dd1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 11,
 title: 'Cafeteria',
 description: 'Clean and hygienic cafeteria serving nutritious food',
 image: 'https://images.unsplash.com/photo-1515003197862-876e5d8d2f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 12,
 title: 'Physiotherapy Center',
 description: 'Advanced physiotherapy center for rehabilitation',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 13,
 title: 'Dialysis Center',
 description: 'Advanced dialysis center for renal care',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 }
 ],
 team: [
 {
 id: 14,
 title: 'Medical Conference',
 description: 'Medical conference with healthcare professionals',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 15,
 title: 'Health Camp',
 description: 'Community health camp for public awareness',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 16,
 title: 'Staff Training',
 description: 'Ongoing staff training and development program',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 }
 ],
 events: [
 {
 id: 17,
 title: 'Health Awareness Day',
 description: 'Health awareness program for community',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 18,
 title: 'Medical Workshop',
 description: 'Medical workshop for healthcare professionals',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 },
 {
 id: 19,
 title: 'Charity Event',
 description: 'Charity event organized by hospital team',
 image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=4.0.0.3&auto=format&fit=crop&w=800&h=600&q=80'
 }
 ]
 };

 const filteredImages=selectedCategory==='all' ? galleryImages.all : galleryImages[selectedCategory] || [];

 return (
 <div className="pt-16">
 {/* Hero Section */}
 <section className="relative h-80 bg-gradient-to-r from-teal-600 to-blue-600">
 <div className="container mx-auto px-4 h-full flex items-center">
 <div
 className="text-white text-center"
 >
 <h1 className="text-3xl md:text-4xl font-bold mb-2">Gallery</h1>
 <p className="text-lg opacity-90">Visual tour of our world-class healthcare facilities</p>
 </div>
 </div>
 </section>

 {/* Filter Section */}
 <section className="py-8 bg-white">
 <div className="container mx-auto px-4">
 <div className="flex flex-wrap justify-center gap-4">
 {categories.map((category)=> (
 <button
 key={category.id}
 onClick={()=> setSelectedCategory(category.id)}
 className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
 selectedCategory===category.id
 ? 'bg-teal-600 text-white shadow-lg'
 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
 }`}
 >
 <SafeIcon icon={category.icon} className="text-lg" />
 <span>{category.name}</span>
 </button>
 ))}
 </div>
 </div>
 </section>

 {/* Gallery Grid */}
 <section className="py-12 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {filteredImages.map((image,index)=> (
 <div
 key={image.id}
 className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
 >
 <div className="relative h-64 overflow-hidden">
 <img 
 src={image.image} 
 alt={image.title}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 opacity-0 group-hover:opacity-40"></div>
 </div>
 <div className="p-4">
 <h3 className="font-bold text-gray-800 mb-2">{image.title}</h3>
 <p className="text-gray-600 text-sm">{image.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 bg-white">
 <div className="container mx-auto px-4">
 <div
 className="text-center"
 >
 <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Us</h2>
 <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
 Experience our world-class healthcare facilities in person. Schedule a visit to see our advanced medical infrastructure.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link to="/appointment" className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 flex items-center space-x-2">
 <SafeIcon icon={FiCalendar} />
 <span>Book Appointment</span>
 </Link>
 <Link to="/contact" className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300 flex items-center space-x-2">
 <SafeIcon icon={FiPhone} />
 <span>Contact Us</span>
 </Link>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
};

export default Gallery;