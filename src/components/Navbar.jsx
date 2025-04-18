import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <div className="relative group">
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                !isHomePage || scrolled ? 'text-[#112C56] hover:text-[#FC6A03]' : 'text-white hover:text-[#FC6A03]'
              }`}
            >
              Services
            </Link>
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
          className="hidden md:block bg-[#1E40AF] hover:bg-[#FC6A03] text-white font-semibold px-6 py-2 rounded-md transition-colors"
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
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
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
              <Link 
                to="/services" 
                className="text-[#112C56] hover:text-[#FC6A03] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
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
                className="bg-[#1E40AF] hover:bg-[#FC6A03] text-white font-semibold px-6 py-2 rounded-md transition-colors inline-block"
                onClick={toggleMenu}
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 