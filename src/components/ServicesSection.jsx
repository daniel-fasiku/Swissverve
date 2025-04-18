import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaMoneyBillWave, FaFileAlt, FaGavel, FaShieldAlt } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaFileAlt size={24} className="text-blue-500" />,
      title: 'Fraud Investigation and Analysis',
    },
    {
      icon: <FaChartLine size={24} className="text-blue-500" />,
      title: 'Cryptocurrency Recovery',
    },
    {
      icon: <FaMoneyBillWave size={24} className="text-blue-500" />,
      title: 'Financial Forensics',
    },
    {
      icon: <FaGavel size={24} className="text-blue-500" />,
      title: 'Legal Support and Consultation',
    },
    {
      icon: <FaShieldAlt size={24} className="text-blue-500" />,
      title: 'Risk Assessment & Prevention',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left side - 28K clients */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-lg p-10 lg:col-span-1"
          >
            <h2 className="text-7xl font-bold text-gray-900 mb-4">28K</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Clients assisted in recovery services
            </h3>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="rounded-full bg-white p-2">{service.icon}</div>
                  <p className="text-gray-700 font-medium">{service.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Process steps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#112C56] text-white rounded-lg p-10 lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#112C56]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">File a Complaint</h4>
                <p className="text-gray-300">
                  Share your fraud experience with us, and we will initiate the recovery process promptly.
                </p>
              </div>
              
              <div>
                <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#112C56]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">Case Evaluation & Investigation</h4>
                <p className="text-gray-300">
                  Our dedicated team meticulously evaluates all provided information and leverages our extensive network and resources to investigate your case thoroughly.
                </p>
              </div>
              
              <div>
                <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#112C56]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">Cyber Analytics & Fund Delivery</h4>
                <p className="text-gray-300">
                  We utilize state-of-the-art technology and resources to address each case efficiently, ensuring timely and effective recovery of your assets.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 