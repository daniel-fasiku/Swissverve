import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-[#112C56] text-white min-h-screen pt-36 lg:pt-32 pb-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            opacity: 0.2
          }}
        />
        {/* Overlay pattern */}
        {/* <div className="absolute left-0 top-0 w-full h-full bg-[#112C56]/80"></div> */}
        
        {/* Wave-like pattern */}
        <div className="absolute left-0 bottom-0 w-full h-1/3">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
            <path fill="#0f2546" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
            <path fill="#1e3a8a" fillOpacity="0.2" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,64C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 flex flex-col items-center justify-center lg:items-start lg:col-span-6"
          >
            <h2 className="text-lg font-semibold uppercase mb-4 tracking-wider">ASSET MANAGEMENT</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Leading <span className="text-blue-400">recovery</span> <br />
              solutions expert.
            </h1>
            <p className="text-gray-300 mb-8 text-center lg:text-left text-lg max-w-xl">
              Your #1 Financial Recovery Firm leading the fight against Unregulated and
              fraudulent Binary Options, FOREX, Crypto Currency, CFD and any other
              scams.
            </p>
            <Link
              to="/consultation"
              className="bg-[#1E40AF] hover:bg-[#FC6A03] text-white font-semibold px-8 py-3 rounded-full transition-colors inline-block"
            >
              Get A Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats cards - desktop only, positioned individually */}
      <div className="hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-5 rounded-lg shadow-xl absolute right-[20%] top-1/3 w-60"
        >
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">$5M</h3>
              <p className="text-gray-600">Recovered in 2024</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-5 rounded-lg shadow-xl absolute right-[5%] top-[60%] w-60"
        >
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">99%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 