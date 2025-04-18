import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaChartBar, FaUserShield } from 'react-icons/fa';

const RecoveryServicesSection = () => {
  const servicesData = [
    {
      icon: <FaNetworkWired size={40} className="text-blue-500" />,
      title: 'Fraud Recovery',
      description: 'Data breaches enable fraud by exposing personal and financial information, allowing criminals to harm individuals, businesses, and public services.',
      number: '01'
    },
    {
      icon: <FaChartBar size={40} className="text-blue-500" />,
      title: 'Anti Money Laundering Schemes',
      description: 'Money laundering threatens national security, prosperity, and international reputation. High-end laundering, involving large illicit funds through financial sectors, undermines global financial integrity. We focus on combating illicit finances from both domestic and international criminal activity.',
      number: '02'
    },
    {
      icon: <FaUserShield size={40} className="text-blue-500" />,
      title: 'Bribery, corruption and sanctions evasion',
      description: 'Bribery, corruption, and sanction evasion threaten national security, prosperity, and reputation. We work globally to investigate offenders, recover illicit funds, and return them to victims.',
      number: '03'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="inline-block bg-gray-100 text-[#112C56] px-4 py-2 rounded-md text-sm font-semibold uppercase mb-4">OUR SERVICES</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Recovery services we offer</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-8">{service.description}</p>
              <div className="text-8xl font-bold text-gray-100">{service.number}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecoveryServicesSection; 