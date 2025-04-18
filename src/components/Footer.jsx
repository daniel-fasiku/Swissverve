import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#112C56] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-[#112C56] font-bold text-lg absolute inset-0 flex items-center justify-center z-10">Swiss</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">WANT TO CONNECT?</h3>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-[#FC6A03]" />
                <a href="mailto:support@donaldgallagherconsultants.co" className="hover:text-[#FC6A03] transition-colors">
                  support@donaldgallagherconsultants.co
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">CALL US ANYTIME</h3>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-[#FC6A03]" />
                <a href="tel:+18019176347" className="hover:text-[#FC6A03] transition-colors">
                  +1(801)917-6347, +1(708)880-7232
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">OUR LOCATION</h3>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-[#FC6A03] mt-1" />
                <p>
                  102 S200E Ste 100,<br />
                  Salt Lake City, UT 84111,<br />
                  United States
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-[#FC6A03] transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FC6A03] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#FC6A03] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FC6A03] transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="hover:text-[#FC6A03] transition-colors">
                  Binary Options Fraud
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FC6A03] transition-colors">
                  Cryptocurrency Fraud
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FC6A03] transition-colors">
                  Investment Fraud
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FC6A03] transition-colors">
                  Liquidity Mining Scam
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FC6A03] transition-colors">
                  Property and Asset Scam
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FC6A03] transition-colors">
                  Chargebacks
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Join our subscribers list to get the latest news and special offers.</h3>
              
              <form className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 focus:outline-dashed rounded-full text-white pr-12"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-[5px] top-[8px] bg-[#1E40AF] hover:bg-[#FC6A03] transition-colors p-2 rounded-full"
                  >
                    <FaEnvelope className="text-white" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="privacy-policy" className="rounded text-[#FC6A03]" />
                  <label htmlFor="privacy-policy">
                    I agree to the <Link to="/privacy-policy" className="text-[#FC6A03]">privacy policy</Link>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Donald Gallagher Consultants. All rights reserved</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-[#FC6A03] transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-[#FC6A03] transition-colors">Privacy</Link>
            <Link to="/support" className="hover:text-[#FC6A03] transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 