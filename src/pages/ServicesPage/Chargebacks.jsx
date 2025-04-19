import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCreditCard, 
  FaArrowRight, 
  FaStripeS, 
  FaPaypal, 
  FaAmazon, 
  FaCcVisa,
  FaCcMastercard,
  FaClock,
  FaFileAlt,
  FaSyncAlt,
} from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
import { HiDocumentSearch, HiShieldCheck, HiCurrencyDollar } from 'react-icons/hi';

const Chargebacks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSection, setVisibleSection] = useState('');
  const timelineRef = useRef(null);
  const sectionRefs = {
    'hero': useRef(null),
    'what': useRef(null),
    'how': useRef(null),
    'process': useRef(null),
    'testimonials': useRef(null),
  };
  
  // Animated counter
  const [count, setCount] = useState({ years: 0, success: 0, recovered: 0 });
  const targetCount = { years: 20, success: 99, recovered: 99 };
  
  useEffect(() => {
    // Handle scroll events
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is visible
      let currentSection = '';
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = key;
          }
        }
      });
      
      if (currentSection) {
        setVisibleSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Handle counter animation
    const duration = 2000;
    const interval = 20;
    const steps = Math.floor(duration / interval);
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCount({
        years: Math.floor(progress * targetCount.years),
        success: Math.floor(progress * targetCount.success),
        recovered: Math.floor(progress * targetCount.recovered)
      });
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);
  
  // Handle timeline steps
  const handleStepClick = (step) => {
    setActiveStep(step);
    
    // Scroll to the active step
    if (timelineRef.current) {
      const stepElement = timelineRef.current.querySelector(`#step-${step}`);
      if (stepElement) {
        const container = timelineRef.current.querySelector('.timeline-container');
        container.scrollLeft = stepElement.offsetLeft - container.offsetWidth / 2 + stepElement.offsetWidth / 2;
      }
    }
  };
  
  const processTips = [
    {
      title: "Document Everything",
      description: "Keep records of all communications, receipts, and transaction details to support your chargeback claim.",
      icon: <FaFileAlt />
    },
    {
      title: "Act Quickly",
      description: "Most card issuers have time limits for filing chargebacks, typically 60-120 days from the transaction date.",
      icon: <FaClock />
    },
    {
      title: "Be Honest",
      description: "Only request legitimate chargebacks. Fraudulent claims can result in account closure and legal consequences.",
      icon: <HiShieldCheck />
    }
  ];
  
  const timelineSteps = [
    {
      id: 1,
      title: "Initial Contact & Assessment",
      description: "We evaluate your case, collecting all relevant information about the disputed transaction and advising on the best course of action."
    },
    {
      id: 2,
      title: "Evidence Collection",
      description: "Our team gathers documentation and builds a compelling case to support your chargeback claim."
    },
    {
      id: 3,
      title: "Filing & Representation",
      description: "We file the chargeback with your card issuer and represent your interests throughout the process."
    },
    {
      id: 4,
      title: "Merchant Response",
      description: "If the merchant contests the chargeback, we analyze their evidence and prepare a strategic rebuttal."
    },
    {
      id: 5,
      title: "Resolution & Recovery",
      description: "We secure a favorable outcome and ensure your funds are returned, providing guidance on preventing future disputes."
    }
  ];
  
  const faqData = [
    {
      question: "What is a chargeback?",
      answer: "A chargeback is a process where a cardholder disputes a transaction and requests their card issuer to reverse the payment. It's a consumer protection mechanism that returns funds to a payment card after a customer successfully disputes a transaction on their account statement or transactions report."
    },
    {
      question: "When should I request a chargeback?",
      answer: "Chargebacks are appropriate when you've been charged for items you never received, when a merchant has charged you twice for the same transaction, when there's a technical error causing an incorrect charge, or when your card information has been compromised and used fraudulently."
    },
    {
      question: "How long do I have to file a chargeback?",
      answer: "The timeframe for filing a chargeback depends on your card issuer and the reason for the dispute, but it generally ranges from 60 to 120 days from the transaction date. The Fair Credit Billing Act in the US allows chargebacks within 60 days of the billing date."
    },
    {
      question: "How does the chargeback process work?",
      answer: "The chargeback process typically involves these steps: 1) You contact your card issuer to dispute a transaction, 2) The issuing bank reviews your claim and may issue a provisional credit, 3) The merchant's bank is notified and the merchant can provide evidence to contest the chargeback, 4) The issuing bank makes a final decision based on all evidence, 5) If resolved in your favor, the provisional credit becomes permanent."
    }
  ];
  
  return (
    <div className="relative overflow-hidden">
      {/* Floating side navigation */}
      <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col gap-4">
          {Object.keys(sectionRefs).map((section) => (
            <button
              key={section}
              className={`w-3 h-3 rounded-full ${visibleSection === section ? 'bg-[#FC6A03]' : 'bg-gray-300'}`}
              onClick={() => {
                sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Hero Section - Split Design */}
      <section 
        ref={sectionRefs.hero}
        className="min-h-screen flex flex-col md:flex-row"
      >
        <div className="md:w-7/12 bg-gradient-to-br from-[#0b1f3d] to-[#112C56] py-20 px-8 md:px-16 flex items-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 top-20 w-60 h-60 rounded-full bg-[#FC6A03]"></div>
            <div className="absolute right-20 bottom-40 w-40 h-40 rounded-full bg-blue-400"></div>
            <div className="absolute left-1/4 bottom-20 w-20 h-20 rounded-full bg-[#FC6A03]"></div>
          </div>
          
          <div className="relative z-10 mt-10 md:mt-0 max-w-xl">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 text-white text-sm font-medium mb-6">
              <FaCreditCard className="mr-2" />
              <span>DISPUTE RESOLUTION SERVICE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert <span className="text-[#FC6A03]">Chargeback</span> Recovery Services
            </h1>
            
            <p className="text-gray-200 text-lg mb-8">
              We help individuals and businesses navigate the complex chargeback process, maximizing your chances of recovery while minimizing stress and hassle.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/consultation" className="bg-[#FC6A03] hover:bg-orange-600 text-white py-3 px-6 rounded-md inline-flex items-center font-medium transition-colors">
                Free Consultation
                <FaArrowRight className="ml-2" />
              </Link>
              
              <a href="#how-it-works" className="bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-md inline-flex items-center font-medium transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-5/12 bg-gray-50 py-16 px-8 md:px-12 flex items-center">
          <div className="w-full">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-[#112C56] mb-6">Why Choose Our Services?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#112C56]/10 p-3 rounded-xl mr-4">
                    <HiDocumentSearch className="text-[#112C56] text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#112C56]">Expert Knowledge</h3>
                    <p className="text-gray-600">We understand the intricacies of payment disputes and chargeback regulations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FC6A03]/10 p-3 rounded-xl mr-4">
                    <HiShieldCheck className="text-[#FC6A03] text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#112C56]">High Success Rate</h3>
                    <p className="text-gray-600">Our proven strategies have helped recover millions in disputed transactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#112C56]/10 p-3 rounded-xl mr-4">
                    <HiCurrencyDollar className="text-[#112C56] text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#112C56]">No Recovery, No Fee</h3>
                    <p className="text-gray-600">We only charge a fee if we successfully recover your funds.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-500 text-sm mb-4">Trusted by clients worldwide</p>
                <div className="flex flex-wrap items-center gap-6 text-gray-400">
                  <FaStripeS className="text-3xl" />
                  <FaPaypal className="text-3xl" />
                  <FaAmazon className="text-3xl" />
                  <FaCcVisa className="text-3xl" />
                  <FaCcMastercard className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Are Chargebacks Section */}
      <section 
        id="what-are-chargebacks"
        ref={sectionRefs.what}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#112C56] mb-3 text-center">What Are Chargebacks?</h2>
            <div className="w-20 h-1 bg-[#FC6A03] mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6">
                  A chargeback is a charge that is returned to a payment card after a customer successfully disputes an item on their account statement or transactions report. A chargeback may occur on debit cards (and the underlying bank account) or on credit cards.
                </p>
                <p className="text-gray-600 mb-6">
                  Chargebacks can be granted to a cardholder for a variety of reasons, including:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="text-[#FC6A03] mr-2 mt-1">•</div>
                    <span className="text-gray-600">Products or services not received but charged for</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#FC6A03] mr-2 mt-1">•</div>
                    <span className="text-gray-600">Duplicate charges or incorrect amounts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#FC6A03] mr-2 mt-1">•</div>
                    <span className="text-gray-600">Fraudulent transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-[#FC6A03] mr-2 mt-1">•</div>
                    <span className="text-gray-600">Items received but not as described</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  A chargeback differs from a voided charge, which is never fully authorized for settlement, as it returns specified funds taken from an account through a prior purchase.
                </p>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#112C56] to-[#FC6A03] rounded-lg transform rotate-6 origin-bottom-left transition-transform group-hover:rotate-4"></div>
                <div className="bg-white p-1 rounded-lg shadow-xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Credit card payment" 
                    className="rounded-lg shadow w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#FC6A03] text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold rotate-12 group-hover:rotate-0 transition-transform">
                  <BiTransfer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Counter Section */}
      <section className="py-16 bg-[#112C56] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-6xl font-bold mb-2 flex items-center justify-center">
                  <span>{count.years}</span>
                  <span className="text-[#FC6A03] ml-1">+</span>
                </div>
                <p className="text-xl opacity-80">Years Experience</p>
              </div>
              
              <div className="p-6">
                <div className="text-6xl font-bold mb-2 flex items-center justify-center">
                  <span>{count.success}</span>
                  <span className="text-[#FC6A03] ml-1">%</span>
                </div>
                <p className="text-xl opacity-80">Success Rate</p>
              </div>
              
              <div className="p-6">
                <div className="text-6xl font-bold mb-2 flex items-center justify-center">
                  <span>{count.recovered}</span>
                  <span className="text-[#FC6A03] ml-1">%</span>
                </div>
                <p className="text-xl opacity-80">Recovered in 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section 
        id="how-it-works"
        ref={sectionRefs.how}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#112C56] mb-3">How It Works</h2>
            <div className="w-20 h-1 bg-[#FC6A03] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures the best chance of recovering your funds while minimizing your involvement and stress.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto" ref={timelineRef}>
            {/* Timeline navigation */}
            <div className="mb-12 relative">
              
              <div className="timeline-container relative flex items-center gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {timelineSteps.map((step) => (
                  <button
                    key={step.id}
                    id={`step-${step.id}`}
                    className={`relative flex-shrink-0 w-40 pt-8 px-2 flex flex-col items-center ${activeStep === step.id ? 'opacity-100' : 'opacity-50'}`}
                    onClick={() => handleStepClick(step.id)}
                  >
                    <div className={`absolute top-0 left-1/2 w-8 h-8 rounded-full -translate-x-1/2 flex items-center justify-center z-10 ${activeStep === step.id ? 'bg-[#FC6A03] text-white' : 'bg-gray-300 text-gray-700'}`}>
                      {step.id}
                    </div>
                    <h4 className="text-sm font-medium text-center">{step.title}</h4>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Active step description */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h3 className="text-2xl font-bold text-[#112C56] mb-4">
                Step {activeStep}: {timelineSteps[activeStep - 1].title}
              </h3>
              <p className="text-gray-600">
                {timelineSteps[activeStep - 1].description}
              </p>
            </div>
            
            {/* Process tips */}
            <div className="grid md:grid-cols-3 gap-6">
              {processTips.map((tip, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#FC6A03]"
                >
                  <div className="text-[#112C56] text-2xl mb-4">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#112C56] mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section 
        id="faq"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#112C56] mb-3">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#FC6A03] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about chargebacks and our recovery services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <details 
                  key={index}
                  className="group bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
                >
                  <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-[#112C56]">{faq.question}</h3>
                    <div className="w-6 h-6 border-2 border-[#FC6A03] rounded-full flex items-center justify-center group-open:bg-[#FC6A03] transition-colors">
                      <span className="group-open:hidden text-[#FC6A03] font-bold leading-none">+</span>
                      <span className="hidden group-open:block text-white font-bold leading-none">−</span>
                    </div>
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        ref={sectionRefs.testimonials}
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-50 bg-opacity-30">
          <div className="absolute -right-10 top-0 w-60 h-60 bg-[#FC6A03] rounded-full opacity-5"></div>
          <div className="absolute left-20 bottom-20 w-80 h-80 bg-[#112C56] rounded-full opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#112C56] mb-3">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-[#FC6A03] mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FC6A03] relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FC6A03] text-white flex items-center justify-center rounded-full text-xl">
                "
              </div>
              <p className="text-gray-600 mb-6 italic">
                After my credit card was charged for products I never received, I was frustrated by the merchant's lack of response. Swissverve's team handled my case professionally and recovered my funds within 3 weeks. I couldn't be happier with their service!
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#112C56] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  JD
                </div>
                <div>
                  <h4 className="font-medium text-[#112C56]">John Doe</h4>
                  <p className="text-sm text-gray-500">Credit Card Dispute</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FC6A03] relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FC6A03] text-white flex items-center justify-center rounded-full text-xl">
                "
              </div>
              <p className="text-gray-600 mb-6 italic">
                As a small business owner, I was devastated when I discovered I had been charged multiple times for software I never authorized. Swissverve guided me through the chargeback process step by step, and successfully recovered all the unauthorized charges.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#112C56] rounded-full flex items-center justify-center text-white font-bold mr-3">
                  JS
                </div>
                <div>
                  <h4 className="font-medium text-[#112C56]">Jane Smith</h4>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#112C56] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Recover Your Funds?</h2>
              <p className="text-gray-300 max-w-xl">
                Our chargeback experts are ready to help you navigate the complex dispute process and maximize your chances of recovery.
              </p>
            </div>
            
            <Link 
              to="/consultation" 
              className="bg-[#FC6A03] hover:bg-orange-600 text-white py-3 px-8 rounded-md inline-flex items-center font-medium transition-colors whitespace-nowrap flex-shrink-0"
            >
              Free Consultation
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Chargebacks;
