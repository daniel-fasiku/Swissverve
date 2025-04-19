import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Service dropdown items
  const serviceItems = [
    { name: 'Binary Options Fraud', path: '/services/binary-options-fraud' },
    { name: 'Cryptocurrency Fraud', path: '/services/cryptocurrency-fraud' },
    { name: 'Investment Fraud', path: '/services/investment-fraud' },
    { name: 'Liquidity Mining Scam', path: '/services/liquidity-mining-scam' },
    { name: 'Property And Asset Scam', path: '/services/property-asset-scam' },
    { name: 'Chargebacks', path: '/services/chargebacks' },
  ];

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        !isHomePage || scrolled || isOpen ? 'bg-white shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-12 h-12 bg-[#112C56] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-base">Swiss</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors ${
              !isHomePage || scrolled ? 'text-[#112C56] hover:text-[#FC6A03]' : 'text-white hover:text-[#FC6A03]'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors ${
              !isHomePage || scrolled ? 'text-[#112C56] hover:text-[#FC6A03]' : 'text-white hover:text-[#FC6A03]'
            }`}
          >
            About Us
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center font-medium transition-colors focus:outline-none ${
                !isHomePage || scrolled ? 'text-[#112C56] group-hover:text-[#FC6A03]' : 'text-white group-hover:text-[#FC6A03]'
              }`}
            >
              Services <FaChevronDown className="ml-1 h-3 w-3 transform group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-white z-50 hidden group-hover:block">
              <div className="py-2">
                {serviceItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-3 text-sm text-[#112C56] hover:bg-blue-50 hover:text-[#FC6A03] transition duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link 
            to="/contact" 
            className={`font-medium transition-colors ${
              !isHomePage || scrolled ? 'text-[#112C56] hover:text-[#FC6A03]' : 'text-white hover:text-[#FC6A03]'
            }`}
          >
            Contact
          </Link>
          <Link 
            to="/faqs" 
            className={`font-medium transition-colors ${
              !isHomePage || scrolled ? 'text-[#112C56] hover:text-[#FC6A03]' : 'text-white hover:text-[#FC6A03]'
            }`}
          >
            FAQs
          </Link>
        </div>

        {/* Consultation Button */}
        <Link 
          to="/consultation" 
          className={`hidden md:block ${isHomePage ? 'bg-[#1E40AF]' : 'bg-[#112C56]'} hover:bg-[#FC6A03] text-white font-semibold px-6 py-2 rounded-md transition-colors`}
        >
          Free Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden focus:outline-none ${
            !isHomePage || scrolled || isOpen ? 'text-[#112C56]' : 'text-white'
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="md:hidden bg-white px-4 py-2 shadow-lg"
          >
            <div className="flex flex-col space-y-4 py-3">
              <Link 
                to="/" 
                className="text-[#112C56] hover:text-[#FC6A03] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-[#112C56] hover:text-[#FC6A03] font-medium transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between text-[#112C56] hover:text-[#FC6A03] font-medium transition-colors focus:outline-none"
                >
                  Services 
                  <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 pl-4 border-l-2 border-blue-100">
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block py-2 text-[#112C56] hover:text-[#FC6A03] text-sm transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className="text-[#112C56] hover:text-[#FC6A03] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/faqs" 
                className="text-[#112C56] hover:text-[#FC6A03] font-medium transition-colors"
                onClick={toggleMenu}
              >
                FAQs
              </Link>
              <Link 
                to="/consultation" 
                className="bg-[#112C56] hover:bg-[#FC6A03] text-white font-semibold px-6 py-2 rounded-md transition-colors inline-block"
                onClick={toggleMenu}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 