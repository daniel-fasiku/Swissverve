import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaSearchDollar, FaHandHoldingUsd } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BsCheckCircleFill } from 'react-icons/bs';

const LiquidityMiningScam = () => {
  const [expanded, setExpanded] = useState(null);
  
  // Fade-in animation for sections
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // Staggered children animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Stats counter animation
  const [counters, setCounters] = useState({
    victims: 0,
    losses: 0,
    recovery: 0
  });
  
  useEffect(() => {
    const targetValues = {
      victims: 32000,
      losses: 1400,
      recovery: 89
    };
    
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCounters({
        victims: Math.floor(progress * targetValues.victims),
        losses: Math.floor(progress * targetValues.losses),
        recovery: Math.floor(progress * targetValues.recovery)
      });
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, []);
  
  // Accordion toggle function
  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  
  const scamTypes = [
    {
      title: "Fake Liquidity Mining Platforms",
      content: "Fraudsters create convincing fake platforms that mimic legitimate DeFi protocols. These platforms promise high returns for providing liquidity but are designed to steal your crypto assets once you connect your wallet or make a deposit."
    },
    {
      title: "Rug Pulls",
      content: "Developers create seemingly legitimate DeFi projects, encourage users to provide liquidity, then suddenly withdraw all funds and disappear. These scams often involve creating initial hype and marketing campaigns to attract a large number of victims before executing the rug pull."
    },
    {
      title: "Yield Farming Traps",
      content: "Scammers offer unrealistically high APY (Annual Percentage Yield) rewards to lure investors. These protocols may work initially to build trust but are programmed to eventually restrict withdrawals or steal funds through hidden backdoors in the smart contracts."
    },
    {
      title: "Token Price Manipulation",
      content: "Malicious actors artificially inflate token prices through wash trading and other manipulative tactics to create FOMO (Fear Of Missing Out). Once enough liquidity providers join, they dump their tokens, causing values to crash and leaving investors with worthless assets."
    }
  ];
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-r from-[#0b1f3d] to-[#112C56] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Abstract background elements */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-[#FC6A03] opacity-20 top-20 left-20"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-blue-300 opacity-20 bottom-10 right-32"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut" 
          }}
        />
        
        <div className="container mx-auto mt-16 md:mt-0 px-6 z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Liquidity Mining Scam <br />
            <span className="text-[#FC6A03]">Recovery Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lost funds in a liquidity mining or yield farming scam? Our specialized team of crypto recovery experts can help you trace, document, and recover your stolen assets.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact">
              <button className="bg-gradient-to-r from-[#FC6A03] to-[#e55d00] hover:from-[#e55d00] hover:to-[#d45500] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105">
                Get Help Now
              </button>
            </Link>
          </motion.div>
        </div>
        
        {/* Animated arrow indicating scroll */}
        <motion.div 
          className="absolute bottom-10 hidden sm:block left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
      
      {/* What is Liquidity Mining Scam Section */}
      <motion.section 
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Understanding <span className="text-[#112C56]">Liquidity Mining Scams</span></h2>
              <p className="text-lg text-gray-600 mb-6">
                Liquidity mining scams target cryptocurrency investors seeking passive income through DeFi (Decentralized Finance) protocols. These scams exploit the technical complexity of liquidity pools and yield farming to deceive victims.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Fraudsters create sophisticated schemes that promise high yields for providing liquidity to token pairs, but are designed to steal your assets through various deceptive methods including smart contract exploits, exit scams, and impersonation of legitimate platforms.
              </p>
              <div className="flex items-center mb-4">
                <BsCheckCircleFill className="text-green-500 mr-3 text-xl" />
                <p className="text-gray-700">Complex smart contracts that hide malicious code</p>
              </div>
              <div className="flex items-center mb-4">
                <BsCheckCircleFill className="text-green-500 mr-3 text-xl" />
                <p className="text-gray-700">Unrealistic APY promises exceeding 1,000%</p>
              </div>
              <div className="flex items-center">
                <BsCheckCircleFill className="text-green-500 mr-3 text-xl" />
                <p className="text-gray-700">Fake partnerships with established DeFi protocols</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-br from-blue-50 to-gray-100 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Red Flags to Watch For</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <HiOutlineLightBulb className="text-[#112C56] text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Unaudited Protocols</h4>
                    <p className="text-gray-600">Be wary of protocols that haven't undergone security audits by reputable firms.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <RiMoneyDollarCircleLine className="text-[#FC6A03] text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Too-Good-To-Be-True Returns</h4>
                    <p className="text-gray-600">Excessively high APY offers are major warning signs of potential scams.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaShieldAlt className="text-[#112C56] text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Anonymous Teams</h4>
                    <p className="text-gray-600">Lack of transparent team information increases the risk of exit scams.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Statistics Section with Counter Animation */}
      <section className="py-16 bg-[#112C56] text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">The Scope of the Problem</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Liquidity mining scams have resulted in massive financial losses across the DeFi ecosystem
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-900 to-[#112C56] rounded-xl p-8 text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-200 mb-2">Victims Worldwide</h3>
              <p className="text-5xl font-bold text-white mb-2">{counters.victims.toLocaleString()}+</p>
              <p className="text-gray-300">Individuals affected by liquidity mining scams globally</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-900 to-[#112C56] rounded-xl p-8 text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-200 mb-2">Financial Impact</h3>
              <p className="text-5xl font-bold text-white mb-2">${counters.losses}M+</p>
              <p className="text-gray-300">Lost to liquidity mining scams in the last year</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-900 to-[#112C56] rounded-xl p-8 text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-200 mb-2">Success Rate</h3>
              <p className="text-5xl font-bold text-white mb-2">{counters.recovery}%</p>
              <p className="text-gray-300">Of our clients receive partial or full fund recovery</p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Common Types of Liquidity Mining Scams */}
      <motion.section 
        className="py-20 px-6 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Types of <span className="text-[#112C56]">Liquidity Mining Scams</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different tactics used by scammers can help you protect your investments
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {scamTypes.map((type, index) => (
              <motion.div 
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div 
                  className={`border ${expanded === index ? 'border-[#FC6A03] bg-orange-50' : 'border-gray-200 bg-white'} rounded-xl overflow-hidden shadow-sm transition-all duration-300`}
                >
                  <button 
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
                    <svg 
                      className={`w-6 h-6 text-[#FC6A03] transform transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${expanded === index ? 'max-h-96 py-4' : 'max-h-0'}`}
                  >
                    <p className="text-gray-600">{type.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Our Recovery Process */}
      <motion.section 
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our <span className="text-[#112C56]">Recovery Process</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized team employs a systematic approach to trace and recover assets lost to liquidity mining scams
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              variants={fadeIn}
            >
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#112C56] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
              <div className="pt-6">
                <FaSearchDollar className="text-5xl text-[#FC6A03] mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Investigation</h3>
                <p className="text-gray-600">
                  We perform a thorough blockchain analysis to trace the flow of funds and identify the attack vectors used by scammers. Our team documents all relevant transactions and smart contract interactions.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              variants={fadeIn}
            >
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#112C56] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
              <div className="pt-6">
                <FaShieldAlt className="text-5xl text-[#FC6A03] mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Legal Strategy</h3>
                <p className="text-gray-600">
                  Our legal experts develop a tailored recovery strategy based on the specific circumstances of your case, including jurisdictional considerations and available legal remedies for DeFi-related crimes.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              variants={fadeIn}
            >
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#112C56] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
              <div className="pt-6">
                <FaHandHoldingUsd className="text-5xl text-[#FC6A03] mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Recovery Action</h3>
                <p className="text-gray-600">
                  We engage with exchanges, law enforcement, and regulatory bodies to freeze and recover stolen assets. When necessary, we pursue legal action against identifiable perpetrators and facilitate negotiated settlements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-r from-[#0b1f3d] to-[#112C56] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Recover Your Stolen Crypto?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't let scammers get away with your hard-earned assets. Our team has helped victims recover millions in stolen cryptocurrency. Contact us today for a free consultation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link to="/contact">
              <button className="bg-[#FC6A03] text-white hover:bg-orange-600 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105 flex items-center">
                Contact Us Now
                <FaArrowRight className="ml-2" />
              </button>
            </Link>
            
            <Link to="/case-studies">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105">
                View Success Stories
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default LiquidityMiningScam;    