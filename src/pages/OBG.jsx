import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
    FiArrowLeft, FiHeart, FiBaby, FiActivity, FiUsers, FiShield, FiTarget, FiCheckCircle,
    FiPhone, FiMail, FiMapPin, FiClock, FiCalendar, FiArrowRight, FiStar, FiAward,
    FiMonitor, FiGlobe, FiTool, FiChevronDown,
} = FiIcons;

const OBG = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFaq = (index) => setActiveIndex(activeIndex === index ? null : index);

    const departmentData = {
        name: 'Obstetrics & Gynecology',
        hero: '/Obstetrics&Gynecology.webp',
        description: 'Our Obstetrics & Gynecology department provides comprehensive women\'s healthcare with advanced maternity care, gynecological treatments, and specialized reproductive health services.',
        overviewStats: [
            { icon: FiBaby, number: '5K+', label: 'Deliveries' },
            { icon: FiUsers, number: '8K+', label: 'Women Treated' },
            { icon: FiAward, number: '99%', label: 'Success Rate' },
            { icon: FiClock, number: '24/7', label: 'Maternity Care' }
        ],
        highlights: ['Advanced High-Risk Pregnancy Management', 'Minimally Invasive Gynecological Surgery', 'Comprehensive Prenatal & Postnatal Care', 'State-of-the-Art NICU Facility', 'Expert Fertility & Reproductive Health', 'Emergency Obstetric Services'],
        services: [
            { name: 'Normal & Cesarean Delivery', description: 'Comprehensive delivery care with expert obstetric management for both normal and cesarean births in a safe environment.', icon: FiBaby, procedures: ['Normal Delivery', 'Cesarean Section', 'VBAC', 'Water Birth'], stats: { patients: '2.5K+', success: '99%' }, image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { name: 'High-Risk Pregnancy', description: 'Specialized care for high-risk pregnancies with advanced monitoring and expert management throughout pregnancy.', icon: FiShield, procedures: ['Preeclampsia Management', 'Gestational Diabetes', 'Multiple Pregnancy', 'Placenta Complications'], stats: { patients: '1.8K+', success: '97%' }, image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { name: 'Gynecological Surgery', description: 'Minimally invasive and traditional gynecological procedures for various women\'s health conditions and disorders.', icon: FiActivity, procedures: ['Hysterectomy', 'Ovarian Cyst Removal', 'Fibroid Surgery', 'Endometriosis Treatment'], stats: { patients: '2K+', success: '98%' }, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { name: 'Fertility Treatment', description: 'Comprehensive fertility evaluation and treatment options for couples facing conception challenges and reproductive issues.', icon: FiHeart, procedures: ['Fertility Assessment', 'Ovulation Induction', 'IUI Procedures', 'Fertility Counseling'], stats: { patients: '1.5K+', success: '65%' }, image: 'https://images.unsplash.com/photo-1581093458791-9d42e1c36ab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { name: 'Prenatal Care', description: 'Complete antenatal care with regular monitoring, screening tests, and health guidance throughout pregnancy journey.', icon: FiMonitor, procedures: ['Regular Check-ups', 'Ultrasound Scans', 'Genetic Screening', 'Birth Planning'], stats: { patients: '3K+', success: '99%' }, image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            { name: 'Women\'s Health Screening', description: 'Comprehensive preventive healthcare screening for early detection and prevention of women\'s health issues.', icon: FiTarget, procedures: ['Pap Smears', 'Mammography', 'Bone Density Tests', 'HPV Screening'], stats: { patients: '2.5K+', success: '95%' }, image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
        ],
        doctors: [
            { name: 'Dr. Kavitha Reddy', specialization: 'Senior Obstetrician & Gynecologist', experience: '20 years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.9, expertise: ['High-Risk Pregnancy', 'Gynec Surgery', 'Fertility Care'] },
            { name: 'Dr. Anjali Sharma', specialization: 'Maternal-Fetal Medicine Specialist', experience: '15 years', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.8, expertise: ['High-Risk Obstetrics', 'Fetal Medicine', 'Genetic Counseling'] },
            { name: 'Dr. Priya Menon', specialization: 'Reproductive Endocrinologist', experience: '12 years', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.7, expertise: ['Fertility Treatment', 'PCOS Management', 'Hormone Therapy'] },
            { name: 'Dr. Sunitha Kumar', specialization: 'Gynecologic Oncologist', experience: '18 years', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', rating: 4.8, expertise: ['Gynecologic Cancer', 'Minimally Invasive Surgery', 'Oncology Care'] }
        ],
        technology: [
            { name: 'Advanced 4D Ultrasound', description: 'High-resolution 4D imaging for detailed fetal monitoring and assessment.', icon: FiMonitor },
            { name: 'Fetal Heart Monitor', description: 'Continuous fetal heart rate monitoring during labor and delivery.', icon: FiHeart },
            { name: 'Laparoscopic Equipment', description: 'State-of-the-art minimally invasive surgical instruments.', icon: FiTool },
            { name: 'Advanced NICU Setup', description: 'Level 3 NICU with ventilators and specialized neonatal care equipment.', icon: FiShield }
        ],
        facilities: ['Level 3 NICU with 24/7 Neonatologist', 'Advanced Labor & Delivery Suites', 'High-Risk Pregnancy Monitoring Unit', 'Dedicated Cesarean Operation Theaters', 'Lactation Support Center', 'Postnatal Recovery Rooms', 'Genetic Counseling Center', 'Women\'s Health Screening Center'],
        achievements: ['Over 5000 successful deliveries', '99% maternal safety rate', 'Level 3 NICU certification', 'Baby-friendly hospital initiative certified', 'Excellence in women\'s healthcare award', 'Leading center for high-risk pregnancies'],
        reviews: [
            { name: 'Meera Patel', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "Dr. Kavitha and her team made my high-risk pregnancy journey so comfortable. The care and attention I received was exceptional. My baby and I are both healthy thanks to their expertise." },
            { name: 'Radhika Sharma', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "The delivery experience was amazing. The staff was so supportive and the facilities are world-class. I felt safe and cared for throughout my stay." },
            { name: 'Anita Reddy', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, review: "From prenatal care to delivery, everything was perfect. The doctors are highly skilled and the nursing staff is compassionate. Highly recommended for expectant mothers." }
        ],
        contact: { phone: '+91 9876543217', email: 'obg@jananihospital.com', location: 'Block C, 3rd Floor', hours: '24/7 Maternity Care | OPD: Mon-Sat 9 AM - 6 PM' },
        faq: [
            { question: 'What facilities do you have for normal delivery?', answer: 'Our maternity ward has modern labor rooms with advanced monitoring equipment, birthing beds, and immediate access to operation theaters if needed. We also offer options like water birth and have 24/7 anesthesia services available.' },
            { question: 'Do you handle high-risk pregnancies?', answer: 'Yes, we specialize in high-risk pregnancy management with maternal-fetal medicine specialists, advanced monitoring equipment, and a Level 3 NICU. We handle conditions like preeclampsia, gestational diabetes, multiple pregnancies, and other complications.' },
            { question: 'What gynecological procedures do you perform?', answer: 'We perform both minimally invasive and traditional gynecological surgeries including hysterectomy, ovarian cyst removal, fibroid surgery, endometriosis treatment, and various fertility-related procedures.' },
            { question: 'Is your NICU equipped for premature babies?', answer: 'Yes, our Level 3 NICU is fully equipped to handle premature babies and critically ill newborns. We have ventilators, incubators, and specialized equipment with 24/7 neonatologist coverage.' }
        ]
    };

    return (
        <div className=" bg-gray-50">
            <section className="relative h-[60vh] min-h-[450px] bg-slate-900">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${departmentData.hero})` }}
                />
                <div className="absolute inset-0 bg-black opacity-60 z-10" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="text-white max-w-4xl">
                            <Link to="/" className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-4 transition-colors group">
                                <SafeIcon icon={FiArrowLeft} className="text-sm group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Back to Home</span>
                            </Link>
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-16 h-16 bg-teal-500/30 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-teal-400/50 shadow-xl">
                                    <SafeIcon icon={FiBaby} className="text-4xl text-white" />
                                </div>
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{departmentData.name}</h1>
                                    <p className="text-lg text-teal-100 mt-2 font-medium">Comprehensive Women's Healthcare</p>
                                </div>
                            </div>
                            <p className="text-lg text-white/95 max-w-3xl leading-relaxed">{departmentData.description}</p>
                            <div className="flex flex-wrap gap-3 mt-6">
                                <Link to="/appointment" className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2">
                                    <SafeIcon icon={FiCalendar} className="text-lg" />
                                    <span>Book Consultation</span>
                                </Link>
                                <a href={`tel:${departmentData.contact.phone}`} className="bg-red-600/20 backdrop-blur-md text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-red-600/30 transition-all flex items-center space-x-2">
                                    <SafeIcon icon={FiPhone} className="text-lg" />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 -mt-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
                            {departmentData.overviewStats.map((stat, index) => (
                                <div key={index} className={`text-center px-4 ${index > 0 ? 'md:border-l md:border-gray-200' : ''}`}>
                                    <div className="w-12 h-12 mx-auto mb-3 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                                        <SafeIcon icon={stat.icon} className="text-2xl" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-800">{stat.number}</p>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-16 pb-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-1.5 h-8 bg-teal-600 rounded-full mr-3"></span>
                                    Why Choose Our OBG Department?
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {departmentData.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm">
                                            <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <SafeIcon icon={FiCheckCircle} className="text-white text-sm" />
                                            </div>
                                            <span className="text-gray-700 text-sm font-medium leading-relaxed">{highlight}</span>
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
                                        <div key={index} className="group p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md">
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

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-20 border-2 border-teal-100">
                                <div className="bg-teal-600 text-white text-center py-3 rounded-xl mb-6">
                                    <h3 className="text-lg font-bold">Contact OBG Department</h3>
                                    <p className="text-teal-100 text-xs mt-1">We're here to help you</p>
                                </div>
                                <div className="space-y-4 mb-6">
                                    {[
                                        { icon: FiPhone, label: 'Department Phone', value: departmentData.contact.phone },
                                        { icon: FiMail, label: 'Email Address', value: departmentData.contact.email },
                                        { icon: FiMapPin, label: 'Location', value: departmentData.contact.location },
                                        { icon: FiClock, label: 'Working Hours', value: departmentData.contact.hours }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
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
                                    <Link to="/appointment" className="w-full bg-teal-600 text-white py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        <SafeIcon icon={FiCalendar} className="text-lg" />
                                        <span>Book Consultation</span>
                                    </Link>
                                    <a href={`tel:${departmentData.contact.phone}`} className="w-full border-2 border-teal-600 text-teal-600 py-3.5 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center space-x-2">
                                        <SafeIcon icon={FiPhone} className="text-lg" />
                                        <span>Call Department</span>
                                    </a>
                                </div>
                                <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
                                    <p className="text-xs text-gray-600 text-center">
                                        <span className="font-bold text-teal-700">24/7 Emergency Support</span> available for maternity care
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <div className="inline-block mb-4">
                            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Our Services</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Comprehensive Women's Healthcare</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From pregnancy care to gynecological treatments, we provide complete women's health services with expert care.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {departmentData.services.map((service, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-teal-200">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-teal-900/20" />
                                    <div className="absolute top-3 right-3">
                                        <div className="bg-white rounded-xl px-3 py-1.5 shadow-lg">
                                            <div className="text-xs text-gray-500 font-medium">Success Rate</div>
                                            <div className="text-lg font-bold text-teal-600">{service.stats.success}</div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-teal-900/90 backdrop-blur-sm p-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                                                <SafeIcon icon={service.icon} className="text-white text-lg" />
                                            </div>
                                            <h3 className="text-white font-bold text-base flex-1">{service.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center space-x-2 mb-3 p-2 bg-teal-50 rounded-lg">
                                        <SafeIcon icon={FiUsers} className="text-teal-600 text-lg" />
                                        <span className="text-sm text-gray-700">
                                            <span className="font-bold text-teal-700">{service.stats.patients}</span> Patients Treated
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-gray-500 mb-2">KEY PROCEDURES:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.procedures.slice(0, 3).map((proc, i) => (
                                                <span key={i} className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-lg font-medium border border-red-100">{proc}</span>
                                            ))}
                                            {service.procedures.length > 3 && (
                                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-medium">+{service.procedures.length - 3} more</span>
                                            )}
                                        </div>
                                    </div>
                                    <Link to="/appointment" className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        <span>Book Consultation</span>
                                        <SafeIcon icon={FiArrowRight} className="text-base group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <div className="inline-block mb-4">
                            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Our Team</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Women's Health Experts</h2>
                        <p className="text-gray-600">Meet our team of renowned specialists dedicated to comprehensive women's healthcare</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {departmentData.doctors.map((doctor, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
                                <div className="relative overflow-hidden h-48">
                                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1 shadow">
                                        <SafeIcon icon={FiStar} className="text-yellow-400 text-xs" />
                                        <span className="text-xs font-bold">{doctor.rating}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-bold text-gray-800">{doctor.name}</h3>
                                    <p className="text-teal-600 font-semibold text-xs mt-0.5">{doctor.specialization}</p>
                                    <p className="text-gray-500 text-xs mt-1">{doctor.experience}</p>
                                    <div className="mt-2 mb-3">
                                        <div className="flex flex-wrap gap-1">
                                            {doctor.expertise.slice(0, 2).map((exp, idx) => (
                                                <span key={idx} className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded text-xs font-medium">{exp}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link to="/appointment" className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition-all flex items-center justify-center space-x-1 text-xs">
                                        <SafeIcon icon={FiCalendar} className="text-xs" />
                                        <span>Book Now</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <div className="inline-block mb-4">
                            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">Testimonials</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Patients Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Real stories from mothers and women who experienced exceptional care with our OBG team.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {departmentData.reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center mb-4">
                                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
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
                                    <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C14.43,5.73 15.92,6.6 16.78,7.39L18.88,5.3C16.99,3.52 14.86,2.5 12.19,2.5C6.42,2.5 2,7.3 2,12.5C2,17.7 6.42,22.5 12.19,22.5C17.62,22.5 21.75,18.5 21.75,12.81C21.75,12.09 21.64,11.59 21.35,11.1Z" /></svg>
                                    Verified on Google
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group">
                                        <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                            <SafeIcon icon={FiCheckCircle} className="text-white text-sm" />
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium leading-relaxed">{facility}</span>
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
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-sm group">
                                        <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                            <SafeIcon icon={FiStar} className="text-white text-sm" />
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium leading-relaxed">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <div className="inline-block mb-4">
                            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">FAQs</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our obstetrics and gynecology services</p>
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
                                >
                                    <div className="flex items-start space-x-4 flex-1">
                                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                                            <span className="text-teal-700 font-bold text-lg">Q</span>
                                        </div>
                                        <span className="font-bold text-gray-800 text-base leading-relaxed pt-1">{faq.question}</span>
                                    </div>
                                    <div
                                        className="ml-4"
                                    >
                                        <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                                            <SafeIcon icon={FiChevronDown} className="text-teal-600" />
                                        </div>
                                    </div>
                                </button>
                                {activeIndex === index && (
                                    <div
                                        className="overflow-hidden"
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
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <div className="bg-teal-50 border-2 border-teal-100 rounded-2xl p-8 max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Still have questions?</h3>
                            <p className="text-gray-600 mb-4">Our women's health specialists are here to help you with personalized guidance</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Link to="/appointment" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2">
                                    <SafeIcon icon={FiCalendar} className="text-lg" />
                                    <span>Schedule Consultation</span>
                                </Link>
                                <a href={`tel:${departmentData.contact.phone}`} className="bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center space-x-2">
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

export default OBG;