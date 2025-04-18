import React from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#112C56] mb-4">About Our Company</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're dedicated to helping victims of financial fraud recover their assets and bring perpetrators to justice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#112C56] mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Our mission is to provide top-notch financial recovery services and support to victims of fraud and scams. 
              We understand the devastation that financial fraud can cause, and we're committed to helping our clients 
              recover their assets while navigating the complex legal and financial landscape.
            </p>
            <p className="text-gray-700">
              With a team of experienced professionals and a proven track record of success, we work tirelessly to 
              investigate cases, trace funds, and implement recovery strategies tailored to each client's unique situation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Team Meeting" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <div className="py-12 bg-gray-50 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#112C56] mb-4">Why Choose Us</h2>
              <p className="text-gray-600">Our proven expertise in financial recovery sets us apart</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-[#FC6A03] text-5xl font-bold mb-4">20+</div>
                <h3 className="text-xl font-semibold text-[#112C56] mb-2">Years of Experience</h3>
                <p className="text-gray-600">
                  With over two decades in the industry, we've developed unmatched expertise in complex financial recovery cases.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-[#FC6A03] text-5xl font-bold mb-4">99%</div>
                <h3 className="text-xl font-semibold text-[#112C56] mb-2">Success Rate</h3>
                <p className="text-gray-600">
                  Our high success rate demonstrates our commitment to resolving even the most challenging cases.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-[#FC6A03] text-5xl font-bold mb-4">3900+</div>
                <h3 className="text-xl font-semibold text-[#112C56] mb-2">Successful Recoveries</h3>
                <p className="text-gray-600">
                  We've helped thousands of clients recover their assets and get their lives back on track.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
