import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaExclamationTriangle, FaMoneyBillWave, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
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

const BinaryOptionsFraud = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do binary options scams work?",
      answer: "Binary options scams often involve fake trading platforms that manipulate results, refuse to pay out profits, or disappear entirely with deposited funds. Scammers use high-pressure sales tactics, unrealistic profit promises, and fake testimonials to lure victims. They may also manipulate software to ensure trades fail, or create barriers to prevent withdrawals."
    },
    {
      question: "Tips to avoid being scammed by binary options sites and brokers",
      answer: "Research brokers thoroughly and check for proper regulation from recognized financial authorities. Be wary of unsolicited contact, promises of guaranteed returns, or pressure tactics. Use only regulated platforms, start with small investments, and be skeptical of bonus offers with strict withdrawal conditions. Document all communications and transactions, and never share personal banking details via email or unsecured channels."
    },
    {
      question: "How to get your money back from a binary options scam",
      answer: "Document all communications and transactions with the broker. File complaints with relevant financial regulatory authorities in your country and the broker's registered location. Consider chargeback requests if you paid by credit card, or consult with a specialized fraud recovery service like Swissverve. Legal action may be necessary, but outcomes depend on jurisdiction and the scammer's location. Act quickly, as recovery becomes more difficult with time."
    },
    {
      question: "Why are binary options risky?",
      answer: "Binary options are risky due to their all-or-nothing nature, short time frames that promote gambling-like behavior, and a statistical disadvantage where the odds favor the broker. Many platforms lack proper regulation, and the industry has attracted numerous scammers. The simplified trading format often disguises complex financial instruments, leading many inexperienced traders to lose money."
    },
    {
      question: "Is it possible to recover money lost to binary options fraud?",
      answer: "Yes, recovery is possible in many cases, though success rates vary based on specific circumstances. The recovery process typically involves documenting the fraud, filing complaints with financial authorities, pursuing chargeback options through payment providers, and sometimes legal action. Professional fraud recovery services like Swissverve can significantly improve your chances by navigating complex financial systems and using specialized tools and expertise."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#0b1f3d] to-[#112C56] text-white overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#FC6A03] rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col mt-10 md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
            >
              <motion.h4 
                className="text-[#FC6A03] text-lg font-medium mb-2"
                variants={fadeIn}
              >
                OUR SERVICE
              </motion.h4>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={fadeIn}
              >
                Binary Options Fraud
              </motion.h1>
              <motion.p 
                className="text-lg md:pr-10"
                variants={fadeIn}
              >
                We help victims of binary options scams recover their funds through strategic 
                recovery operations and specialized financial expertise.
              </motion.p>
              <motion.div 
                className="mt-8"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/consultation" 
                  className="inline-block bg-[#FC6A03] text-white py-3 px-8 rounded-md font-medium hover:bg-orange-600 transition duration-300"
                >
                  Get Free Consultation
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <div className="w-full max-w-md relative">
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
                  whileHover={{ 
                    rotate: [0, 2, 0, -2, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <img 
                    src="https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg" 
                    alt="Binary Options Fraud Protection" 
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

      {/* Explanation Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#112C56] mb-8 "
              variants={fadeIn}
            >
              Understanding Binary Options Fraud
            </motion.h2>
            <motion.div 
              className="prose prose-lg max-w-none"
              variants={staggerContainer}
            >
              <motion.p 
                className="mb-6"
                variants={fadeIn}
              >
                Binary options are financial products where traders bet on whether an asset's price will rise or fall within a specific time frame. While legitimate binary options exist, the industry has become rife with fraud, particularly through unregulated online platforms targeting inexperienced investors.
              </motion.p>
              <motion.p 
                className="mb-6"
                variants={fadeIn}
              >
                These fraudulent operations promise high returns with minimal risk, but in reality, they manipulate trading algorithms, refuse withdrawals, and employ aggressive sales tactics to extract maximum funds from victims. By the time investors realize they've been defrauded, recovering their money seems impossible without specialized help.
              </motion.p>
              <motion.p
                variants={fadeIn}
              >
                At Swissverve, we specialize in recovering funds lost to binary options fraud through our expertise in financial forensics, regulatory procedures, and cross-border fund recovery operations.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#112C56] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Service Process
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-16 h-16 bg-[#112C56] rounded-full flex items-center justify-center mb-6 text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaShieldAlt size={24} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-[#112C56]">Case Assessment</h3>
              <p className="text-gray-700">
                We thoroughly analyze your case, collecting all relevant documentation and evidence of the fraud. Our experts evaluate recovery possibilities based on the specifics of your situation.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-16 h-16 bg-[#FC6A03] rounded-full flex items-center justify-center mb-6 text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaExclamationTriangle size={24} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-[#112C56]">Strategic Recovery</h3>
              <p className="text-gray-700">
                Our team implements a customized recovery strategy, which may include regulatory complaints, payment disputes, legal actions, or direct negotiation with the fraudulent entity.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-16 h-16 bg-[#112C56] rounded-full flex items-center justify-center mb-6 text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaMoneyBillWave size={24} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-[#112C56]">Fund Recovery</h3>
              <p className="text-gray-700">
                We work diligently to trace and recover your funds, keeping you informed throughout the process. Once successful, we facilitate the secure return of your money.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#112C56] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-4 border-b border-gray-200 pb-4"
                variants={fadeIn}
                custom={index}
              >
                <motion.button
                  className="flex justify-between items-center w-full text-left font-medium text-lg text-[#112C56] py-3"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ color: "#FC6A03" }}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={activeIndex === index ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndex === index ? 
                      <FaChevronUp className="text-[#FC6A03]" /> : 
                      <FaChevronDown className="text-[#FC6A03]" />
                    }
                  </motion.div>
                </motion.button>
                <motion.div 
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="py-3 text-gray-700">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#112C56] text-white overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
          animate={{
            x: [0, 10, 0],
            y: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Recover Your Funds?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't let binary options fraudsters keep your hard-earned money. Our expert team is ready to help you recover what's rightfully yours.
          </motion.p>
          <motion.a 
            href="/consultation" 
            className="inline-flex items-center bg-[#FC6A03] text-white py-3 px-8 rounded-md font-medium hover:bg-orange-600 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Recovery Process <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default BinaryOptionsFraud;
