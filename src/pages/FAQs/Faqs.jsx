import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { FiSearch, FiChevronDown, FiChevronUp, FiFilter, FiCheck } from 'react-icons/fi';
import { BsQuestionCircle, BsLightbulb } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Faqs = () => {
  // States
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [flippedCards, setFlippedCards] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [popularQuestions] = useState([0, 10, 14]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Refs
  const searchInputRef = useRef(null);
  const filterRef = useRef(null);

  // Categories for FAQs
  const categories = ['All', 'Recovery', 'Process', 'Security', 'Payments', 'Cryptocurrency', 'Binary Options', 'Property Fraud'];

  // FAQ data with categories
  const faqData = [
    {
      question: "How long does it take to complete a recovery?",
      answer: "The duration of the recovery process is dependent on the type of asset being recovered and the complexity of the case. Typically, the recovery process can take anywhere from 3-5 business days. If you have any specific questions or concerns about asset recovery, please contact us for more information.",
      category: "Recovery"
    },
    {
      question: "Is the recovery process different depending on my location?",
      answer: "The chances of getting your assets back depend on the nature and complexity of your case, the type and value of your assets, and the services required. The location where you live does not have a direct impact on the chances of getting your assets back.",
      category: "Process"
    },
    {
      question: "How will I receive my assets after they are recovered?",
      answer: "The way you receive your assets after they are recovered depends on the type and value of your assets, and the services required. The asset recovery company will work with you to determine the best way to return your assets to you.",
      category: "Recovery"
    },
    {
      question: "How does Donald Gallagher Consultants protect my personal and financial data?",
      answer: "We take information privacy policies and practices very seriously. All our employees are trained on the importance of data privacy and are aware of the company's policies and procedures. We have implemented strict security measures to protect our clients' data from unauthorized access, disclosure, alteration, or destruction.",
      category: "Security"
    },
    {
      question: "What is the cost of the recovery service?",
      answer: "The expenses for our services fluctuate contingent upon the nature and intricacy of your case, the sort and value of your recovered asset, and the services required. We offer different charge structures designed to suit your needs including flat fees, hourly rates, and contingency fees depending on the complexity and risk of your case.",
      category: "Payments"
    },
    {
      question: "Why should you trust us with your asset security?",
      answer: "We are different from other options because we have a team of experts who have years of experience in the industry. We use the latest technology and tools to help our clients recover their assets quickly and efficiently. We also offer a wide range of services that are tailored to meet the unique needs of each client.",
      category: "Security"
    },
    {
      question: "Where are your offices located?",
      answer: "Our office is currently located at 102 S200E Ste 100, Salt Lake City, UT 84111, United States. However, since the pandemic, most of our operations have shifted to remote work. We have a team of experts who can assist you with your cryptocurrency recovery needs from anywhere in the world. We use secure and encrypted communication channels to ensure your privacy and safety.",
      category: "Process"
    },
    {
      question: "Do you offer refunds if recovery is unsuccessful?",
      answer: "Our refund policy depends on the payment structure agreed upon. For flat fee services, we may offer partial refunds if recovery is unsuccessful. For contingency-based services, you only pay if we successfully recover your assets. Each case is unique, so we recommend discussing the specific terms during your consultation.",
      category: "Payments"
    },
    {
      question: "What types of assets can you help recover?",
      answer: "We specialize in recovering various digital assets including cryptocurrencies, funds lost in binary options fraud, investment scams, and other types of financial fraud. Our expertise extends to most mainstream cryptocurrencies and digital payment systems.",
      category: "Recovery"
    },
    {
      question: "How do I get started with the recovery process?",
      answer: "To begin the recovery process, simply schedule a free consultation through our website. During this initial consultation, we'll assess your case, gather necessary information, and determine the best approach for recovery. We'll provide transparent information about our process, timeline, and fee structure before you commit.",
      category: "Process"
    },
    {
      question: "How do binary options scams work?",
      answer: "Binary options scams often involve fake trading platforms that manipulate results, refuse to pay out profits, or disappear entirely with deposited funds. Scammers use high-pressure sales tactics, unrealistic profit promises, and fake testimonials to lure victims. They may also manipulate software to ensure trades fail, or create barriers to prevent withdrawals.",
      category: "Binary Options"
    },
    {
      question: "How can I avoid being scammed by binary options sites and brokers?",
      answer: "Research brokers thoroughly and check for proper regulation from recognized financial authorities. Be wary of unsolicited contact, promises of guaranteed returns, or pressure tactics. Use only regulated platforms, start with small investments, and be skeptical of bonus offers with strict withdrawal conditions. Document all communications and transactions, and never share personal banking details via email or unsecured channels.",
      category: "Binary Options"
    },
    {
      question: "How do I know if I'm a victim of property fraud?",
      answer: "Warning signs include unexpected foreclosure notices, mortgage statements for loans you didn't take out, and unfamiliar names on your property tax bill. You may also discover unknown liens or mortgages during title searches, receive mail addressed to unknown people at your property address, or find that your property taxes have been paid by someone else. Regular monitoring of your credit report and property records can help detect fraud early.",
      category: "Property Fraud"
    },
    {
      question: "How can I protect my property from title fraud?",
      answer: "Protect your property by regularly checking land registry records, obtaining title insurance, safeguarding personal information, and registering for fraud alerts with your local property registry. Consider placing attorney restrictions on your title that require additional verification before transfers, and scrutinize all property-related mail, especially for unfamiliar names or mortgage statements. For added protection, some jurisdictions offer title lock services that notify you of any filing activity on your property.",
      category: "Property Fraud"
    },
    {
      question: "What is liquidity mining and how do scammers exploit it?",
      answer: "Liquidity mining is a legitimate DeFi process where users provide cryptocurrency to liquidity pools and earn rewards. Scammers exploit this by creating fake platforms that promise extremely high returns, manipulating token prices, or performing 'rug pulls' where developers abandon projects after collecting investments. They often use social engineering techniques to trick users into connecting their wallets to malicious smart contracts that drain their funds.",
      category: "Cryptocurrency"
    },
    {
      question: "What are the warning signs of cryptocurrency investment fraud?",
      answer: "Warning signs include promises of guaranteed high returns with little or no risk, pressure to recruit friends and family, complicated or secretive investment strategies, difficulties withdrawing your money, and unlicensed or unregistered sellers. Be wary of unsolicited offers, especially those requiring immediate action, and investment opportunities with unclear business models or that lack proper documentation like white papers or transparent team information.",
      category: "Cryptocurrency"
    },
    {
      question: "Is it possible to recover from cryptocurrency scams?",
      answer: "Yes, recovery is possible in many cases, but the process requires specialized expertise. Our team uses blockchain analytics to trace transactions, works with exchanges to freeze suspicious accounts, and employs legal mechanisms to recover funds. The recovery rate varies based on how quickly the scam is reported, the type of scam, and the exchanges involved. We've successfully helped clients recover assets from various types of cryptocurrency scams by leveraging our technical knowledge and industry relationships.",
      category: "Cryptocurrency"
    },
    {
      question: "How long does property fraud recovery typically take?",
      answer: "Recovery timeframes vary widely based on the fraud's complexity, local legal processes, and how quickly the fraud was detected. Simple cases may resolve in 6-12 months, while complex international property fraud can take 2-5 years or longer. Early detection significantly improves recovery chances and shortens timeframes. Our recovery specialists work to expedite the process through established relationships with authorities and financial institutions, but patience is essential as property laws are designed to move deliberately to protect all parties' rights.",
      category: "Property Fraud"
    }
  ];

  // Filter FAQs based on search term and active category
  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredFaqs.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredFaqs.length / cardsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top of FAQ section
      const faqSection = document.getElementById('faq-grid');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Handle card flip
  const handleCardFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Handle outside clicks for filter dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Reset filters and pagination
  const handleReset = () => {
    setSearchTerm('');
    setActiveCategory('All');
    setFlippedCards({});
    setCurrentPage(1);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Animations
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
        stiffness: 50
      }
    }
  };

  const flipVariants = {
    front: {
      rotateY: 0,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    },
    back: {
      rotateY: 180,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 inline-block relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#112C56] to-[#FC6A03]">
              Frequently Asked Questions
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#112C56] to-[#FC6A03] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Find answers to the most common questions about our services, recovery process, and more.
            Can't find what you're looking for? Feel free to contact us directly.
          </motion.p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-12 relative"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search questions or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 text-white border-gray-200 focus:border-[#112C56] focus:outline-none transition-colors"
                />
              </div>

              {/* Filter Button & Dropdown */}
              <div className="relative" ref={filterRef}>
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center px-5 py-3 bg-gradient-to-r from-[#112C56] to-[#294d83] text-white rounded-xl hover:opacity-90 transition-opacity"
                >
                  <FiFilter className="mr-2" />
                  <span>Filter: {activeCategory}</span>
                  {showFilter ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
                </button>

                {showFilter && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg z-50 py-2 border border-gray-100"
                  >
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveCategory(category);
                          setShowFilter(false);
                        }}
                        className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-50 ${activeCategory === category ? 'text-[#FC6A03] font-medium' : 'text-gray-700'}`}
                      >
                        {activeCategory === category && <FiCheck className="mr-2" />}
                        {category}
                      </button>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button
                        onClick={handleReset}
                        className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                      >
                        <BiReset className="mr-2" />
                        Reset Filters
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Search Stats */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <span>
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} found
              </span>
              {(searchTerm || activeCategory !== 'All') && (
                <button
                  onClick={handleReset}
                  className="text-[#FC6A03] hover:underline flex items-center"
                >
                  <BiReset className="mr-1" /> Clear filters
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popular Questions Section - Only visible when no search/filter */}
      {!searchTerm && activeCategory === 'All' && (
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-[#112C56] mb-8 flex items-center"
            >
              <BsLightbulb className="mr-3 text-[#FC6A03]" />
              Popular Questions
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {popularQuestions.map((qIndex) => (
                <motion.div
                  key={`popular-${qIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: qIndex * 0.1 }}
                  className="bg-gradient-to-br from-[#112C56]/5 to-[#FC6A03]/5 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById(`faq-${qIndex}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      setTimeout(() => {
                        handleCardFlip(qIndex);
                      }, 500);
                    }
                  }}
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-[#112C56] to-[#FC6A03] p-3 rounded-full text-white mr-4 flex-shrink-0">
                      <BsQuestionCircle />
                    </div>
                    <h3 className="font-medium text-[#112C56] line-clamp-3">{faqData[qIndex].question}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Cards */}
      <div id="faq-grid" className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {filteredFaqs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCards.map((faq, _i) => {
                  const originalIndex = faqData.findIndex(item => item.question === faq.question);
                  const isFlipped = flippedCards[originalIndex];

                  return (
                    <motion.div
                      id={`faq-${originalIndex}`}
                      key={originalIndex}
                      variants={itemVariants}
                      className="relative w-full h-[280px] perspective-1000"
                    >
                      <motion.div
                        className={`absolute inset-0 rounded-2xl backface-hidden cursor-pointer ${isFlipped ? 'pointer-events-none' : ''}`}
                        animate={isFlipped ? "back" : "front"}
                        variants={flipVariants}
                        onClick={() => handleCardFlip(originalIndex)}
                      >
                        <div className="absolute inset-0 bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                          <div className="mb-4 flex justify-between items-start">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#112C56] to-[#294d83] flex items-center justify-center text-white">
                                <span className="text-xl font-bold">Q</span>
                              </div>
                              <span className="ml-4 px-3 py-1 text-xs rounded-full bg-[#FC6A03]/10 text-[#FC6A03] font-medium">
                                {faq.category}
                              </span>
                            </div>
                            <div className="text-gray-400 text-sm italic">Click to flip</div>
                          </div>
                          <h3 className="text-xl font-bold text-[#112C56] mb-4">{faq.question}</h3>
                          <div className="mt-auto text-right">
                            <span className="inline-block bg-gradient-to-r from-[#112C56] to-[#FC6A03] text-white px-4 py-2 rounded-full text-sm">
                              See Answer
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className={`absolute inset-0 rounded-2xl backface-hidden cursor-pointer transform rotate-y-180 ${!isFlipped ? 'pointer-events-none' : ''}`}
                        animate={isFlipped ? "front" : "back"}
                        variants={flipVariants}
                        onClick={() => handleCardFlip(originalIndex)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 flex flex-col">
                          <div className="mb-4 flex justify-between items-start">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FC6A03] to-[#fd8a3a] flex items-center justify-center text-white">
                                <span className="text-xl font-bold">A</span>
                              </div>
                              <span className="ml-4 px-3 py-1 text-xs rounded-full bg-[#112C56]/10 text-[#112C56] font-medium">
                                Answer
                              </span>
                            </div>
                            <div className="text-gray-400 text-sm italic">Click to flip</div>
                          </div>
                          <div className="overflow-y-scroll scroll-smooth flex-1 pr-2  [&::-webkit-scrollbar]:h-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
                            <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
                          </div>
                          <div className="mt-4 text-right">
                            <span className="inline-block bg-gradient-to-r from-[#FC6A03] to-[#112C56] text-white px-4 py-2 rounded-full text-sm">
                              Back to Question
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center">
                  <button 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`mx-1 p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#112C56] hover:bg-blue-50'}`}
                  >
                    <FaChevronLeft />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`mx-1 w-10 h-10 rounded-full ${
                        currentPage === i + 1 
                          ? 'bg-gradient-to-r from-[#112C56] to-[#FC6A03] text-white' 
                          : 'bg-white text-[#112C56] hover:bg-gray-100'
                      } font-medium transition-colors`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`mx-1 p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[#112C56] hover:bg-blue-50'}`}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSearch className="text-3xl text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#112C56] mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any FAQ matching your search. Try different keywords or browse all questions.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gradient-to-r from-[#112C56] to-[#FC6A03] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                View All Questions
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#112C56] to-[#294d83] rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-10 md:p-16 relative">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FC6A03] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#FC6A03] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
                <p className="text-gray-200">
                  Our team is ready to answer any questions you might have about our services and recovery process. Contact us today for a free consultation.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-[#112C56] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add custom CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        .transform.rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Faqs;
