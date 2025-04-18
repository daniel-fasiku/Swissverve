import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Peter Russo',
      location: 'MONACO',
      text: "They were very understanding, no judgement. Easy to get a hold of. Good communication at all times. My case manager were fantastic. I have been able to get half of what I lost back. This service has been a life saver. I started this journey in September of 2021 and continue to work with this company..."
    },
    {
      id: 2,
      name: 'Rosie Pearson',
      location: 'Houston, TX',
      text: "Donald Gallagher Consultants are the absolutely best! they are always there for me from the start to the end of each of the process. They are so knowledgeable and understand the system so well. The service was professional and generous. I'm still waiting for a refund from the bank. It's in the process..."
    },
    {
      id: 3,
      name: 'Yan Shui',
      location: 'Beijing',
      text: "I lost over €60,000 to an investment fraud platform. They tricked me into trading with them and took all my life savings. No one could help me. I contacted Donald Gallagher Consultants. I was doubtful, but a former client convinced me. It took a month of working on my case and i started seeing results..."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Illustration */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://img.freepik.com/free-vector/customer-feedback-concept-illustration_114360-298.jpg?w=740&t=st=1713626135~exp=1713626735~hmac=ad74ac7cf05e63a5ede3fbea20df5f8ddd1eba0c341ee13a8b90b4a0d7de8af7" 
                  alt="Customer Feedback Illustration" 
                  className="max-w-full h-auto"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FC6A03] text-white p-3 rounded-full">
                  <FaQuoteRight size={24} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="md:w-1/2 md:pl-12">
            <motion.div
              key={testimonials[currentTestimonial].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Awesome opportunities</h2>
              
              <div className="mb-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 mr-1" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-8">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors focus:outline-none"
                >
                  <FaArrowLeft className="text-gray-600" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-3 rounded-full bg-[#112C56] hover:bg-blue-800 transition-colors focus:outline-none"
                >
                  <FaArrowRight className="text-white" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 