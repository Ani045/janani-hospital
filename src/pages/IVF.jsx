import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import Breadcrumb from '../components/Breadcrumb';
import * as FiIcons from 'react-icons/fi';

const {
  FiArrowLeft,
  FiHeart,
  FiBaby,
  FiActivity,
  FiUsers,
  FiShield,
  FiTarget,
  FiCheckCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiArrowRight,
  FiStar,
  FiAward,
  FiMonitor,
  FiGlobe,
  FiTool,
  FiChevronDown,
} = FiIcons;

const IVF = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

  const departmentData = {
    name: 'IVF & Fertility Center',
    hero: '/IVF-&-Fertility-Center/IVF%20&%20Fertility-Center-banner.png',
    description:
      'Our IVF & Fertility Center in Hyderabad provides compassionate, expert care with cutting-edge reproductive technologies to help couples fulfill their dream of parenthood. We specialize in personalized fertility treatments featuring high success rates and 24/7 support.',
    overviewStats: [
      { icon: FiUsers, number: '8,000+', label: 'Happy Couples Served' },
      { icon: FiBaby, number: '5,000+', label: 'Healthy Babies Born' },
      { icon: FiAward, number: '72%', label: 'High Success Rate' },
      { icon: FiClock, number: '24/7', label: 'Around-the-Clock Support' },
    ],
    highlights: [
      'State-of-the-Art IVF Laboratory with ISO Certification',
      'Internationally Trained Fertility Specialists',
      'Advanced Genetic Testing & Screening Services',
      'Tailored Treatment Protocols for Individual Needs',
      'Comprehensive and Compassionate Counseling Support',
      'Affordable and Transparent Treatment Packages',
    ],
    services: [
      {
        name: 'IVF (In Vitro Fertilization)',
        description:
          'Offering advanced IVF procedures using cutting-edge technology, including Conventional IVF, ICSI, IMSI, and TESE/PESA, to assist couples achieve successful pregnancies.',
        icon: FiActivity,
        procedures: ['Conventional IVF', 'ICSI', 'IMSI', 'TESE/PESA'],
        stats: { patients: '2,500+', success: '72%' },
        image: '/IVF-&-Fertility-Center/IVF-(In-Vitro-Fertilization).png',
      },
      {
        name: 'IUI Treatment',
        description:
          'Intrauterine Insemination (IUI) for couples seeking less invasive fertility treatments with promising success rates, including Natural and Stimulated cycles.',
        icon: FiHeart,
        procedures: ['Natural Cycle IUI', 'Donor Sperm IUI', 'IUI with Ovulation Induction'],
        stats: { patients: '1,800+', success: '45%' },
        image: '/IVF-&-Fertility-Center/IUI-Treatment.png',
      },
      {
        name: 'Fertility Preservation',
        description:
          'Egg, sperm, and embryo freezing services for individuals planning to preserve fertility through advanced cryopreservation and ovarian tissue freezing techniques.',
        icon: FiShield,
        procedures: ['Egg Freezing', 'Sperm Freezing', 'Embryo Freezing', 'Ovarian Tissue Cryopreservation'],
        stats: { patients: '800+', success: '95%' },
        image: '/IVF-&-Fertility-Center/Fertility-Preservation.png',
      },
      {
        name: 'Genetic Testing',
        description:
          'Utilizing next-generation sequencing (NGS) based preimplantation genetic testing methods like PGT-A, PGT-M, and PGT-SR to ensure the health of embryos and prevent genetic disorders.',
        icon: FiMonitor,
        procedures: ['PGT-A', 'PGT-M', 'PGT-SR', 'Comprehensive Chromosome Screening'],
        stats: { patients: '1,200+', success: '98%' },
        image: '/IVF-&-Fertility-Center/Genetic-Testing.png',
      },
      {
        name: 'Donor Programs',
        description:
          'Thoroughly screened egg, sperm, and embryo donation programs, including surrogacy options, designed to maximize success and meet diverse patient needs.',
        icon: FiUsers,
        procedures: ['Egg Donation', 'Sperm Donation', 'Embryo Donation', 'Surrogacy Programs'],
        stats: { patients: '950+', success: '68%' },
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Male Infertility',
        description:
          'Comprehensive diagnosis and treatment of male infertility factors with techniques including varicocele surgery, hormone therapy, and lifestyle management.',
        icon: FiTarget,
        procedures: ['Varicocele Surgery', 'TESA/PESA', 'Hormone Therapy', 'Lifestyle Management'],
        stats: { patients: '1,500+', success: '65%' },
        image: '/IVF-&-Fertility-Center/Male-Infertility.png',
      },
    ],
    doctors: [
      {
        name: 'Dr. Priya Sharma',
        specialization: 'Fertility Specialist & IVF Expert',
        experience: '18 years',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.9,
        expertise: ['IVF/ICSI', 'Egg Freezing', 'Fertility Preservation'],
      },
      {
        name: 'Dr. Rahul Verma',
        specialization: 'Reproductive Endocrinologist',
        experience: '15 years',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.8,
        expertise: ['Hormonal Disorders', 'PCOS Management', 'Male Infertility'],
      },
      {
        name: 'Dr. Anjali Patel',
        specialization: 'Embryologist',
        experience: '12 years',
        image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.9,
        expertise: ['Embryo Culture', 'Vitrification', 'PGT'],
      },
      {
        name: 'Dr. Meera Reddy',
        specialization: 'Fertility Counselor',
        experience: '10 years',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.7,
        expertise: ['Emotional Support', 'Treatment Planning', 'Couple Counseling'],
      },
    ],
    technology: [
      {
        name: 'Advanced IVF Laboratory',
        description: 'Class 10000 cleanroom with state-of-the-art incubators.',
        icon: FiMonitor,
      },
      {
        name: 'Time-Lapse Imaging',
        description: 'Embryo monitoring system for continuous observation.',
        icon: FiGlobe,
      },
      {
        name: 'Genetic Testing Platform',
        description: 'NGS-based preimplantation genetic testing.',
        icon: FiTool,
      },
      {
        name: 'Cryopreservation System',
        description: 'Advanced vitrification technology.',
        icon: FiShield,
      },
    ],
    facilities: [
      'Advanced IVF Laboratory (Class 10000)',
      'Andrology Laboratory',
      'Genetic Testing Lab',
      'Cryopreservation Unit',
      'Counseling Rooms',
      'Semen Collection Rooms',
      'Operating Theater for Egg Retrieval',
      'Embryology Research Lab',
    ],
    achievements: [
      'Over 5,000 babies born through IVF',
      '72% IVF success rate (above national average)',
      'First center to introduce Time-Lapse Imaging',
      'ISO certified IVF laboratory',
      'Excellence award in reproductive medicine',
      '1,000+ egg freezing procedures performed successfully',
    ],
    reviews: [
      {
        name: 'Ananya Sharma',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        review:
          'The team at Janani Hospital gave us the hope we had lost. Their expertise and compassionate care are unparalleled. We are forever grateful for our little miracle.',
      },
      {
        name: 'Rahul & Priya Verma',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        review:
          'From the first consultation to the final procedure, the entire process was smooth. The doctors and staff are incredibly supportive. Highly recommended for any couple.',
      },
      {
        name: 'Sunita Reddy',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        review:
          'A very professional and ethical center. They guide you at every step. The state-of-the-art facilities gave us confidence. Thank you, Janani Hospital!',
      },
    ],
    contact: {
      phone: '+91 9876543211',
      email: 'ivf@jananihospital.com',
      location: 'Block B, 2nd Floor, Janani Hospital, Hyderabad',
      hours: 'Mon-Sat: 8 AM - 6 PM | Sun: 9 AM - 2 PM',
    },
    faq: [
      {
        question: 'What is IVF and who is it for?',
        answer:
          "In Vitro Fertilization (IVF) is a process where an egg is combined with sperm outside the body, in a lab. It's a primary treatment for infertility for couples who have been unable to conceive naturally.",
      },
      {
        question: 'What is the success rate of IVF at your center?',
        answer:
          'Our IVF center has a high success rate of 72%, which is above the national average. Success rates can vary based on factors like age and cause of infertility.',
      },
      {
        question: 'How long does one IVF cycle take?',
        answer:
          'A complete IVF cycle typically takes about four to six weeks, from the start of ovarian stimulation until the pregnancy test.',
      },
      {
        question: 'Is the IVF process painful?',
        answer:
          'Most patients experience minimal discomfort. Procedures like egg retrieval are performed under mild sedation to ensure you are comfortable.',
      },
    ],
  };


  return (
    <div className=" bg-gray-50">
      {/* HERO */}
      <section className="relative min-h-[400px] h-[50vh] sm:h-[55vh] md:h-[60vh] pt-24 sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${departmentData.hero})` }}
          aria-label="IVF and Fertility Center Banner"
          role="img"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-white max-w-4xl">

              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-500/30 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-teal-400/50 shadow-xl flex-shrink-0">
                  <SafeIcon icon={FiBaby} className="text-2xl sm:text-3xl md:text-4xl text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                    {departmentData.name}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-teal-100 mt-1 sm:mt-2 font-medium">
                    Leading Fertility Center in Hyderabad
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 max-w-3xl leading-relaxed">
                {departmentData.description}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                <Link
                  to="/appointment"
                  className="bg-white text-teal-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-1.5 sm:space-x-2"
                  aria-label="Book IVF consultation appointment"
                >
                  <SafeIcon icon={FiCalendar} className="text-base sm:text-lg" />
                  <span>Book Consultation</span>
                </Link>
                <a
                  href={`tel:${departmentData.contact.phone}`}
                  className="bg-red-600/20 backdrop-blur-md text-white border-2 border-white/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-600/30 transition-all flex items-center space-x-1.5 sm:space-x-2"
                  aria-label="Call IVF center now"
                >
                  <SafeIcon icon={FiPhone} className="text-base sm:text-lg" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - positioned below hero on mobile, overlapping on desktop */}
      <section className="relative z-10 mt-6 md:-mt-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-y-6">
              {departmentData.overviewStats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center px-2 sm:px-4 ${index > 0 ? 'md:border-l md:border-gray-200' : ''
                    }`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                    <SafeIcon icon={stat.icon} className="text-xl sm:text-2xl" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{stat.number}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose + Tech */}
      <section className="pt-16 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-1.5 h-8 bg-teal-600 rounded-full mr-3" />
                  Why Choose Our IVF Center?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {departmentData.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <SafeIcon icon={FiCheckCircle} className="text-white text-sm" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mr-3">
                    <SafeIcon icon={FiMonitor} className="text-teal-600 text-xl" />
                  </div>
                  Advanced Technology & Equipment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {departmentData.technology.map((tech, index) => (
                    <div
                      key={index}
                      className="group p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200 group-hover:border-teal-300 transition-colors">
                          <SafeIcon icon={tech.icon} className="text-teal-600 text-xl" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 text-sm mb-1">{tech.name}</h4>
                          <p className="text-gray-600 text-xs leading-relaxed">{tech.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-20 border-2 border-teal-100">
                <div className="bg-teal-600 text-white text-center py-3 rounded-xl mb-6">
                  <h3 className="text-lg font-bold">Contact IVF Center</h3>
                  <p className="text-teal-100 text-xs mt-1">We're here to help you</p>
                </div>
                <div className="space-y-4 mb-6">
                  {[
                    { icon: FiPhone, label: 'Department Phone', value: departmentData.contact.phone },
                    { icon: FiMail, label: 'Email Address', value: departmentData.contact.email },
                    { icon: FiMapPin, label: 'Location', value: departmentData.contact.location },
                    { icon: FiClock, label: 'Working Hours', value: departmentData.contact.hours },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={item.icon} className="text-teal-600 text-lg" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">{item.label}</p>
                        <p className="font-bold text-gray-800 text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <Link
                    to="/appointment"
                    className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <SafeIcon icon={FiCalendar} className="text-lg" />
                    <span>Book Consultation</span>
                  </Link>
                  <a
                    href={`tel:${departmentData.contact.phone}`}
                    className="w-full border-2 border-teal-600 text-teal-600 py-3.5 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center space-x-2"
                  >
                    <SafeIcon icon={FiPhone} className="text-lg" />
                    <span>Call Department</span>
                  </a>
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
                  <p className="text-xs text-gray-600 text-center">
                    <span className="font-bold text-teal-700">24/7 Emergency Support</span>{' '}
                    available for existing patients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Comprehensive Fertility Services Tailored For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of fertility treatments, from initial evaluations and fertility preservation options to advanced IVF procedures, all designed to support your unique reproductive journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentData.services.map((service, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-teal-200"
                aria-label={`${service.name} service card`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} service illustration`}
                    className="w-full object-cover h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-teal-900/20" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-teal-700 mb-2">{service.name}</h3>
                  <div className="flex items-center space-x-2 mb-3 p-2 bg-teal-50 rounded-lg">
                    <SafeIcon icon={FiUsers} className="text-teal-600 text-lg" />
                    <span className="text-sm text-gray-700">
                      <span className="font-bold text-teal-700">{service.stats.patients}</span>{' '}
                      Patients Treated
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Key Procedures:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.procedures.slice(0, 3).map((proc, i) => (
                        <span
                          key={i}
                          className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-lg font-medium border border-red-100"
                        >
                          {proc}
                        </span>
                      ))}
                      {service.procedures.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-medium">
                          +{service.procedures.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    to="/appointment"
                    className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    aria-label={`Book consultation for ${service.name}`}
                  >
                    <span>Book Consultation</span>
                    <SafeIcon
                      icon={FiArrowRight}
                      className="text-base group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Patients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read heartfelt stories from families who began their fertility journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departmentData.reviews.map((review, index) => (
              <blockquote
                key={index}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                aria-label={`Review by ${review.name}`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={`Photo of ${review.name}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.review}"</p>
                <div className="text-xs text-gray-500 font-medium flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C14.43,5.73 15.92,6.6 16.78,7.39L18.88,5.3C16.99,3.52 14.86,2.5 12.19,2.5C6.42,2.5 2,7.3 2,12.5C2,17.7 6.42,22.5 12.19,22.5C17.62,22.5 21.75,18.5 21.75,12.81C21.75,12.09 21.64,11.59 21.35,11.1Z" />
                  </svg>
                  Verified on Google
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Achievements */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <SafeIcon icon={FiShield} className="text-teal-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">World-Class Facilities</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {departmentData.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group"
                  >
                    <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <SafeIcon icon={FiCheckCircle} className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium leading-relaxed">
                      {facility}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <SafeIcon icon={FiAward} className="text-teal-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Achievements</h3>
              </div>
              <div className="space-y-3">
                {departmentData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group"
                  >
                    <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <SafeIcon icon={FiStar} className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                FAQs
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our IVF services and fertility treatments
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {departmentData.faq.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-teal-200 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                      <span className="text-teal-700 font-bold text-lg">Q</span>
                    </div>
                    <span className="font-bold text-gray-800 text-base leading-relaxed pt-1">
                      {faq.question}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                      <SafeIcon icon={FiChevronDown} className="text-teal-600" />
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <div
                      className="overflow-hidden"
                      id={`faq-${index}`}
                      role="region"
                      aria-live="polite"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="flex items-start space-x-4 pl-14">
                          <div className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="bg-teal-50 border-2 border-teal-100 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                Our fertility experts are here to help you with personalized guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/appointment"
                  className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiCalendar} className="text-lg" />
                  <span>Schedule Consultation</span>
                </Link>
                <a
                  href={`tel:${departmentData.contact.phone}`}
                  className="bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center space-x-2"
                >
                  <SafeIcon icon={FiPhone} className="text-lg" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IVF;
