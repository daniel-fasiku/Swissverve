import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMethod, setActiveMethod] = useState(null);
  
  // References
  const formRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Animate particles in canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#FFD700', '#FF6347', '#7FFFD4', '#9370DB', '#3CB371'];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.05;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initialize particles
    const init = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };
    
    init();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Phone validation - optional
    if (formData.phone && !/^[+\d\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 4 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        }, 4000);
      }, 1500);
    }
  };
  
  // Contact methods data
  const contactMethods = [
    {
      id: 'phone',
      icon: <FiPhone />,
      title: 'Call Us',
      value: '+1(801)917-6347',
      color: '#FC6A03', // Brand orange
      details: 'Monday to Friday, 9am to 5pm EST'
    },
    {
      id: 'email',
      icon: <FiMail />,
      title: 'Email Us',
      value: 'support@donaldgallagherconsultants.co',
      color: '#112C56', // Brand blue
      details: 'We usually respond within 24 hours'
    },
    {
      id: 'address',
      icon: <FiMapPin />,
      title: 'Visit Us',
      value: '102 S200E Ste 100, Salt Lake City, UT 84111',
      color: '#FC6A03', // Brand orange
      details: 'By appointment only'
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut" 
      }
    }
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-l from-[#112C56]/10 to-transparent pointer-events-none opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-gradient-to-t from-[#FC6A03]/10 to-transparent pointer-events-none opacity-70"></div>
      
      <div className="relative mt-10 lg:mt-16 z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
          {/* Left Column - Header and Contact Info */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#112C56] via-[#294d83] to-[#FC6A03]">
                  Let's Fix Your Problems
                </h1>
                
                <p className="text-gray-600 mb-12 text-lg">
                  Have questions or ready to start your recovery journey? Reach out to us using any of these methods.
                </p>
              </motion.div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {contactMethods.map((method) => (
                  <motion.div
                    key={method.id}
                    variants={itemVariants}
                    className={`p-5 rounded-xl shadow-sm border-l-4 transform transition-all duration-300 ${activeMethod === method.id ? 'scale-105' : 'hover:scale-102'}`}
                    style={{ 
                      borderLeftColor: method.color,
                      background: `linear-gradient(to right, ${method.color}10, white)`
                    }}
                    onMouseEnter={() => setActiveMethod(method.id)}
                    onMouseLeave={() => setActiveMethod(null)}
                  >
                    <div className="flex items-start space-x-4">
                      <div 
                        className="p-3 rounded-full text-white text-xl"
                        style={{ backgroundColor: method.color }}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#112C56] mb-1">{method.title}</h3>
                        <p className="text-gray-700">{method.value}</p>
                        <p className="text-sm text-gray-500 mt-1">{method.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* SVG Decoration */}
              <div className="mt-12 hidden lg:block">
                <svg viewBox="0 0 200 100" className="w-full h-auto opacity-80">
                  <motion.path
                    d="M10,50 Q30,30 50,50 T90,50 T130,50 T170,50 T190,50"
                    fill="transparent"
                    stroke="#112C56"
                    strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.path
                    d="M10,70 Q30,90 50,70 T90,70 T130,70 T170,70"
                    fill="transparent"
                    stroke="#FC6A03"
                    strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#112C56] to-[#294d83] opacity-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-[#FC6A03] to-[#fd8a3a] opacity-10 blur-3xl"></div>
              
              <motion.div
                ref={formRef}
                className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-70 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative z-10 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-[#FC6A03]/20 to-transparent opacity-20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-t from-[#112C56]/20 to-transparent opacity-20 rounded-tr-full"></div>
                
                {isSubmitted ? (
                  <motion.div
                    className="py-20 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FC6A03] to-[#fd8a3a] opacity-20 animate-pulse"></div>
                      <div className="relative flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-[#FC6A03] to-[#fd8a3a] text-white text-3xl">
                        <FiCheckCircle />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#112C56] mb-2">Message Sent!</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Thank you for reaching out. We've received your message and will get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8 flex justify-between items-center">
                      <h2 className="text-3xl font-bold text-[#112C56] relative inline-block">
                        Send a Message
                        <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#112C56] to-[#FC6A03]"></div>
                      </h2>
                      <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-[#112C56] to-[#FC6A03] text-white">
                        <HiOutlineSpeakerphone />
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <motion.div variants={itemVariants}>
                          <label className="block text-[#112C56] font-medium mb-2" htmlFor="name">
                            Your Name <span className="text-[#FC6A03]">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border bg-gradient-to-r from-gray-50 to-white ${errors.name ? 'border-[#FC6A03]' : 'border-gray-200'} focus:border-[#112C56] focus:ring focus:ring-[#112C56]/20 transition-colors`}
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="mt-1 text-[#FC6A03] text-sm">{errors.name}</p>}
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                          <label className="block text-[#112C56] font-medium mb-2" htmlFor="email">
                            Email Address <span className="text-[#FC6A03]">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border bg-gradient-to-r from-gray-50 to-white ${errors.email ? 'border-[#FC6A03]' : 'border-gray-200'} focus:border-[#112C56] focus:ring focus:ring-[#112C56]/20 transition-colors`}
                            placeholder="your@email.com"
                          />
                          {errors.email && <p className="mt-1 text-[#FC6A03] text-sm">{errors.email}</p>}
                        </motion.div>
                      </div>
                      
                      <motion.div variants={itemVariants} className="mb-6">
                        <label className="block text-[#112C56] font-medium mb-2" htmlFor="phone">
                          Phone Number <span className="text-gray-400">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-gradient-to-r from-gray-50 to-white ${errors.phone ? 'border-[#FC6A03]' : 'border-gray-200'} focus:border-[#112C56] focus:ring focus:ring-[#112C56]/20 transition-colors`}
                          placeholder="+1 (123) 456-7890"
                        />
                        {errors.phone && <p className="mt-1 text-[#FC6A03] text-sm">{errors.phone}</p>}
                      </motion.div>
                      
                      <motion.div variants={itemVariants} className="mb-6">
                        <label className="block text-[#112C56] font-medium mb-2" htmlFor="message">
                          Your Message <span className="text-[#FC6A03]">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-gradient-to-r from-gray-50 to-white ${errors.message ? 'border-[#FC6A03]' : 'border-gray-200'} focus:border-[#112C56] focus:ring focus:ring-[#112C56]/20 transition-colors`}
                          placeholder="How can we help you today?"
                        ></textarea>
                        {errors.message && <p className="mt-1 text-[#FC6A03] text-sm">{errors.message}</p>}
                      </motion.div>
                      
                      <motion.div 
                        variants={itemVariants}
                        className="text-right"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`relative overflow-hidden px-8 py-3 rounded-xl text-white font-medium ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#112C56] to-[#FC6A03] hover:from-[#0a1e3d] hover:to-[#e05c02]'}`}
                        >
                          <span className="relative z-10 flex items-center">
                            {isSubmitting ? (
                              <>
                                <span className="inline-block w-4 h-4 mr-2 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <FiSend className="ml-2" />
                              </>
                            )}
                          </span>
                          
                          {/* Button animation */}
                          {!isSubmitting && (
                            <span className="absolute inset-0 overflow-hidden rounded-xl">
                              <span className="absolute inset-0 -translate-x-full hover:translate-x-0 bg-gradient-to-r from-[#0a1e3d] to-[#e05c02] transition-transform duration-500"></span>
                            </span>
                          )}
                        </button>
                      </motion.div>
                    </form>
                  </>
                )}
              </motion.div>
              
              {/* Confidence indicators */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Secure', 'Confidential', 'Fast Response'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-lg p-3 border border-gray-100 shadow-sm flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <span className="text-sm text-gray-600 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Map or business hours section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#112C56] mb-4">Our Business Hours</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#112C56] to-[#FC6A03] mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { day: 'Weekdays', hours: 'Monday - Friday', time: '9:00 AM - 5:00 PM EST' },
              { day: 'Weekends', hours: 'Saturday', time: '10:00 AM - 2:00 PM EST' },
              { day: 'Response Time', hours: '', time: 'Within 24 Hours' }
            ].map((item, index) => (
              <motion.div
                key={item.day}
                className="relative overflow-hidden bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#112C56]/10 to-[#FC6A03]/10 opacity-50"></div>
                <h3 className="text-xl font-bold text-[#112C56] mb-2 relative z-10">{item.day}</h3>
                {item.hours && <p className="text-gray-600 relative z-10">{item.hours}</p>}
                <p className="text-gray-800 font-medium relative z-10">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
