import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaShieldAlt, FaSearch, FaArrowRight, FaCheck, FaExclamationTriangle, FaMoneyBillWave } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { GiHouseKeys } from 'react-icons/gi';
import { HiDocumentText } from 'react-icons/hi';
import { MdSecurity } from 'react-icons/md';

const PropertyAndAssetScam = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Property scam types for tabs
  const scamTypes = [
    {
      title: "Title Fraud",
      icon: <HiDocumentText className="text-3xl" />,
      content: [
        "Although relatively rare, one of the most devastating frauds for property owners is title fraud. This type of fraud starts with identity theft.",
        "The scammer will use false documents to pose as the property owner, registers forged documents transferring a property to his or her name, and then gets a new mortgage against the property.",
        "After securing a mortgage or line of credit, the criminal takes the cash and leaves the owner on the hook for future payments.",
        "Homes that are free and clear of mortgages are often targeted as they have fewer complications and tend to be held by older people who may be less aware about how to guard against identity theft."
      ]
    },
    {
      title: "Rental Scams",
      icon: <BiBuildingHouse className="text-3xl" />,
      content: [
        "Rental scams involve fraudsters posing as property owners or managers and advertising non-existent rental properties or properties they don't own.",
        "They typically ask for upfront payments like security deposits or first month's rent before showing the property.",
        "Red flags include unusually low rental prices, requests for wire transfers or cash, refusal to meet in person, and pressure to pay before seeing the property.",
        "These scams are particularly common in high-demand rental markets and target people who need housing quickly or are renting from out of state."
      ]
    },
    {
      title: "Foreclosure Relief Scams",
      icon: <GiHouseKeys className="text-3xl" />,
      content: [
        "These scams target homeowners who are struggling to pay their mortgage and facing potential foreclosure.",
        "Fraudsters promise to save the home or reduce mortgage payments in exchange for upfront fees.",
        "Common tactics include false loan modification offers, phantom help, and rent-to-buy schemes that ultimately strip the homeowner of their equity.",
        "Scammers may also manipulate distressed homeowners into transferring their deed while making empty promises about allowing them to stay in the home."
      ]
    },
    {
      title: "Investment Property Fraud",
      icon: <FaMoneyBillWave className="text-3xl" />,
      content: [
        "Investment property fraud involves misrepresenting real estate investments to attract buyers or investors.",
        "Scammers may inflate property values, falsify rental income projections, or create entirely fictional development projects.",
        "Foreign investment properties are particularly susceptible, as investors cannot easily visit and verify the property details.",
        "Timeshare scams are a subset that often involve high-pressure sales tactics, misrepresented properties, and hidden fees."
      ]
    },
    {
      title: "Mortgage Fraud",
      icon: <FaHome className="text-3xl" />,
      content: [
        "Mortgage fraud involves deliberately misrepresenting information on mortgage applications to obtain larger loans than would otherwise be approved.",
        "This can include income inflation, employment fabrication, identity theft, straw buyers, and appraisal fraud.",
        "Property flipping schemes that artificially inflate property values through false appraisals and multiple rapid transactions are a common form of mortgage fraud.",
        "Both individuals and organized criminal groups participate in mortgage fraud, costing financial institutions billions annually."
      ]
    }
  ];

  // Recovery process steps
  const recoverySteps = [
    {
      title: "Investigation",
      icon: <FaSearch />,
      description: "We conduct a thorough investigation to trace property ownership records, identify fraudulent transactions, and collect evidence of the scam."
    },
    {
      title: "Legal Action",
      icon: <HiDocumentText />,
      description: "Our legal team prepares the necessary documentation and initiates appropriate legal proceedings to challenge fraudulent transfers."
    },
    {
      title: "Asset Recovery",
      icon: <FaHome />,
      description: "We work with authorities and financial institutions to freeze fraudulent accounts and recover stolen funds or property rights."
    },
    {
      title: "Protection Plan",
      icon: <MdSecurity />,
      description: "We implement safeguards to protect your property from future fraud attempts, including title monitoring and identity protection."
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "How do I know if I'm a victim of property fraud?",
      answer: "Warning signs include unexpected foreclosure notices, mortgage statements for loans you didn't take out, and unfamiliar names on your property tax bill. You may also discover unknown liens or mortgages during title searches, receive mail addressed to unknown people at your property address, or find that your property taxes have been paid by someone else. Regular monitoring of your credit report and property records can help detect fraud early."
    },
    {
      question: "How can I protect my property from title fraud?",
      answer: "Protect your property by regularly checking land registry records, obtaining title insurance, safeguarding personal information, and registering for fraud alerts with your local property registry. Consider placing attorney restrictions on your title that require additional verification before transfers, and scrutinize all property-related mail, especially for unfamiliar names or mortgage statements. For added protection, some jurisdictions offer title lock services that notify you of any filing activity on your property."
    },
    {
      question: "What is the recovery process for property scam victims?",
      answer: "The recovery process typically begins with filing police reports and fraud complaints with relevant authorities including the FBI and FTC. You'll need to contact your mortgage lender, notify credit bureaus, and engage legal representation specialized in real estate fraud. Document everything meticulously, including all communications and paperwork related to the fraud. Recovery may involve court proceedings to nullify fraudulent transfers, which can take months or years depending on case complexity. Professional recovery services like ours can significantly improve outcomes by navigating complex legal procedures and financial systems."
    },
    {
      question: "How long does it take to recover from property fraud?",
      answer: "Recovery timeframes vary widely based on the fraud's complexity, local legal processes, and how quickly the fraud was detected. Simple cases may resolve in 6-12 months, while complex international property fraud can take 2-5 years or longer. Early detection significantly improves recovery chances and shortens timeframes. Our recovery specialists work to expedite the process through established relationships with authorities and financial institutions, but patience is essential as property laws are designed to move deliberately to protect all parties' rights."
    }
  ];

  // Toggle FAQ expansion
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0b1f3d] to-[#112C56] pt-32 pb-20 md:py-36 overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-[#FC6A03] rounded-full opacity-10 -translate-x-20 -translate-y-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full opacity-10 translate-x-10 translate-y-40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={slideIn}
            >
              <motion.div variants={fadeIn}>
                <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase mb-4">OUR SERVICE</div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Property and Asset <span className="text-[#FC6A03]">Scam Recovery</span></h1>
                <p className="text-lg text-gray-200 mb-8">
                  We help victims of property fraud and asset scams recover their investments and protect their wealth through specialized legal and technical expertise.
                </p>
                <motion.div 
                  className="mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/consultation" 
                    className="inline-block bg-[#FC6A03] text-white py-3 px-8 rounded-md font-medium hover:bg-orange-600 transition duration-300"
                  >
                    Free Consultation
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-[#FC6A03] rounded-full opacity-70"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.7, 0.4, 0.7]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-xl shadow-2xl backdrop-blur-sm"
                  whileHover={{ rotate: [0, 1, 0, -1, 0], transition: { duration: 0.5 } }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                    alt="Property Fraud Protection" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-60"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.6, 0.3, 0.6]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#112C56] mb-6">Protecting Your Most Valuable Assets</h2>
            <p className="text-lg text-gray-600">
              Fraud and investment scams abound at all levels of the real estate market – whether it be a contractor who charges hundreds of dollars for work not done to an "investment agent" who embezzles hundreds of millions – protecting yourself can require a measure of vigilance and legwork, but it can also come down to exercising skepticism and common sense.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 bg-[#112C56] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#112C56] mb-4">Specialized Expertise</h3>
              <p className="text-gray-600">Our team combines legal, financial, and technical knowledge to tackle complex property fraud cases.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 bg-[#FC6A03] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaExclamationTriangle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#112C56] mb-4">Fast Response</h3>
              <p className="text-gray-600">We act quickly to freeze assets, document evidence, and initiate recovery proceedings.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 bg-[#112C56] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#112C56] mb-4">Proven Results</h3>
              <p className="text-gray-600">Our 99% success rate demonstrates our effectiveness in recovering property and assets.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-[#112C56] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <motion.div
              className="col-span-1 flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-8xl font-bold text-[#FC6A03]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.1, color: "#ffffff", transition: { duration: 0.2 } }}
              >
                20
              </motion.div>
              <motion.div 
                className="text-2xl font-medium mt-2"
                whileHover={{ color: "#FC6A03" }}
              >
                Years of Experience
              </motion.div>
            </motion.div>

            <motion.div 
              className="col-span-2 grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <motion.div 
                  className="w-32 h-32 rounded-full border-4 border-[#FC6A03] mx-auto flex items-center justify-center"
                  animate={{
                    borderColor: ["#FC6A03", "#3182CE", "#FC6A03"],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  <span className="text-4xl font-bold text-white">99%</span>
                </motion.div>
                <h3 className="text-xl font-medium text-white mt-4">Success Rate</h3>
              </motion.div>
              
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <motion.div 
                  className="w-32 h-32 rounded-full border-4 border-[#FC6A03] mx-auto flex items-center justify-center"
                  animate={{
                    borderColor: ["#FC6A03", "#3182CE", "#FC6A03"],
                    transition: { duration: 3, repeat: Infinity, delay: 1 }
                  }}
                >
                  <span className="text-4xl font-bold text-white">99%</span>
                </motion.div>
                <h3 className="text-xl font-medium text-white mt-4">Recovered in 2024</h3>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scam Types Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#112C56] mb-4">Common Types of Property Scams</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the different types of property and asset scams can help you protect your investments.
            </p>
          </motion.div>
          
          <div className="mb-10">
            <div className="flex flex-wrap border-b border-gray-200">
              {scamTypes.map((type, index) => (
                <motion.button
                  key={index}
                  className={`px-6 py-3 text-lg font-medium focus:outline-none transition duration-300 ${
                    activeTab === index 
                      ? 'text-[#FC6A03] border-b-2 border-[#FC6A03]' 
                      : 'text-gray-600 hover:text-[#112C56]'
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{type.icon}</span>
                    <span>{type.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 p-6 bg-white rounded-xl shadow-md"
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#112C56] mb-4 flex items-center">
                {scamTypes[activeTab].icon}
                <span className="ml-2">{scamTypes[activeTab].title}</span>
              </h3>
              <div className="text-gray-600 space-y-4">
                {scamTypes[activeTab].content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Recovery Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#112C56] mb-4">Our Work Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We employ a systematic approach to recover your property and assets lost to scams.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {recoverySteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-full ${index % 2 === 0 ? 'bg-[#112C56]' : 'bg-[#FC6A03]'} flex items-center justify-center text-white text-xl mb-6 relative`}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(17, 44, 86, 0.3)" }}
                  >
                    <div className="text-2xl">{step.icon}</div>
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-gray-300"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-bold text-[#112C56] mb-3"
                    whileHover={{ color: "#FC6A03", scale: 1.05 }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-600"
                    whileHover={{ color: "#112C56" }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#112C56] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about property fraud and our recovery services.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className={`border ${expandedFaq === index ? 'border-[#FC6A03] bg-white' : 'border-gray-200 bg-white'} rounded-lg overflow-hidden transition-all duration-300`}
                  whileHover={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                >
                  <button 
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold max-w-[250px] md:max-w-none text-[#112C56]">{faq.question}</h3>
                    <motion.span
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-[#FC6A03] text-2xl`}
                    >
                      {expandedFaq === index ? '−' : '+'}
                    </motion.span>
                  </button>
                  
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ 
                      height: expandedFaq === index ? 'auto' : 0,
                      opacity: expandedFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#0b1f3d] to-[#112C56] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Recover Your Property?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't let scammers get away with your property and assets. Our team of experts is ready to help you recover what's rightfully yours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/consultation" 
              className="inline-flex items-center bg-[#FC6A03] text-white py-3 px-8 rounded-md font-medium hover:bg-orange-600 transition duration-300"
            >
              Get Your Free Consultation <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PropertyAndAssetScam;
