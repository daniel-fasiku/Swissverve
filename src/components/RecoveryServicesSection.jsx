import React from 'react';
import { FaNetworkWired, FaChartBar, FaUserShield, FaArrowRight } from 'react-icons/fa';

const RecoveryServicesSection = () => {
  const servicesData = [
    {
      icon: <FaNetworkWired size={40} className="text-[#112C56]" />,
      title: 'Fraud Recovery',
      description: 'Data breaches enable fraud by exposing personal and financial information, allowing criminals to harm individuals, businesses, and public services.',
      number: '01'
    },
    {
      icon: <FaChartBar size={40} className="text-[#112C56]" />,
      title: 'Anti Money Laundering Schemes',
      description: 'Money laundering threatens national security, prosperity, and international reputation. High-end laundering, involving large illicit funds through financial sectors, undermines global financial integrity. We focus on combating illicit finances from both domestic and international criminal activity.',
      number: '02'
    },
    {
      icon: <FaUserShield size={40} className="text-[#112C56]" />,
      title: 'Bribery, corruption and sanctions evasion',
      description: 'Bribery, corruption, and sanction evasion threaten national security, prosperity, and reputation. We work globally to investigate offenders, recover illicit funds, and return them to victims.',
      number: '03'
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="animate-fadeIn">
            <h2 className="inline-block bg-gray-100 text-[#112C56] px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4">OUR SERVICES</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Recovery services we offer</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg min-h-[400px] sm:min-h-[500px] lg:h-[500px] p-5 sm:p-6 md:p-8 hover:shadow-lg transition-shadow relative animate-fadeInUp"
            >
              <div className="mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{service.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base mb-8">{service.description}</p>
              
              {/* Background number - hidden on very small screens */}
              <div className="hidden sm:block text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 absolute bottom-4 right-4 z-0">
                {service.number}
              </div>
              
              {/* Button - adjusted for mobile */}
              <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 z-10">
                <button className="bg-[#112C56] hover:bg-[#FC6A03] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors">
                  <FaArrowRight className="text-sm sm:text-base" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecoveryServicesSection; 