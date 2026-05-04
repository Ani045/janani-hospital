import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiSearch } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Women's Health: Essential Checkups",
      excerpt: "Regular health checkups are crucial for women at every stage of life. Learn about the essential tests and when to schedule them.",
      author: "Dr. Janani S.",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      category: "Women's Health"
    },
    {
      id: 2,
      title: "Modern Advances in IVF Technology",
      excerpt: "In vitro fertilization has come a long way. Discover the latest techniques that are improving success rates for couples.",
      author: "Dr. Ramesh Kumar",
      date: "May 05, 2026",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
      category: "Fertility"
    },
    {
      id: 3,
      title: "Pediatric Care: Common Childhood Illnesses",
      excerpt: "A guide for parents on identifying and managing common illnesses in children, and when to seek professional medical help.",
      author: "Dr. Priya Dharshini",
      date: "April 28, 2026",
      image: "https://images.unsplash.com/photo-1536640712247-c45474d8598b?auto=format&fit=crop&q=80&w=800",
      category: "Pediatrics"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Breadcrumb pageName="Blogs & Health Tips" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Health Tips & <span className="text-emerald-600">Latest Updates</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stay informed with the latest medical insights, health advice, and news from Janani Hospitals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-12">
            {blogs.map((blog, index) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="h-64 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center">
                          <FiCalendar className="mr-1.5 text-emerald-600" /> {blog.date}
                        </span>
                        <span className="flex items-center">
                          <FiUser className="mr-1.5 text-emerald-600" /> {blog.author}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                    <button className="flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                      Read More <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
              <ul className="space-y-4">
                {['General Medicine', 'Women\'s Health', 'Pediatrics', 'Fertility', 'Surgery', 'Wellness'].map((cat) => (
                  <li key={cat}>
                    <button className="flex items-center justify-between w-full text-gray-600 hover:text-emerald-600 font-medium transition-colors group">
                      <span>{cat}</span>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-lg group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">12</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-emerald-600 p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Healthy!</h3>
              <p className="text-emerald-50 mb-6 opacity-90">
                Subscribe to our newsletter for weekly health tips and hospital updates.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                />
                <button className="w-full py-3 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50 transition-colors shadow-lg">
                  Subscribe Now
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
