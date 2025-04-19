import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Binance from '../../assets/binance.png';
import Blockchain from '../../assets/22.png';
import MoonPay from '../../assets/33.png';
import CryptoCom from '../../assets/44.png';
import CashApp from '../../assets/55.png';
import Coinbase from '../../assets/66.png';
import Meta from '../../assets/77.png';
import Luno from '../../assets/88.png';

const AboutUsPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Donald Gallagher',
      position: 'CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      name: 'Gary Low',
      position: 'Director',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      name: 'Maria Klass',
      position: 'Senior Associate',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    },
    {
      name: 'Timo Imani',
      position: 'Recovery Consultant',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'File a Complaint',
      description: 'We attend to every case with state-of-the-art technology and resources for efficient service delivery.'
    },
    {
      number: '02',
      title: 'Case Evaluation & Investigation',
      description: 'Our team investigates all provided information and puts our contacts & resources to use.'
    },
    {
      number: '03',
      title: 'Cyber Analytics & Fund Delivery',
      description: 'We employ cutting-edge technology to track and recover your funds through secure channels.'
    }
  ];

  // Partner brands
  const partners = [
    { name: 'Binance', logo: Binance },
    { name: 'Blockchain', logo: Blockchain },
    { name: 'MoonPay', logo: MoonPay },
    { name: 'Crypto.com', logo: CryptoCom },
    { name: 'Cash App', logo: CashApp },
    { name: 'Coinbase', logo: Coinbase },
    { name: 'Meta', logo: Meta },
    { name: 'Luno', logo: Luno },
  ];

  // Testimonials data
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
            className="text-center md:text-left"
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

        {/* Our Work Process */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#112C56] mb-4"
            >
              Our Work Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We follow a structured approach to maximize the chances of recovery and ensure transparency throughout the process.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center opacity-20">
                  <span className="text-6xl font-bold text-[#112C56]">{step.number}</span>
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-[#112C56] mb-6">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center cursor-pointer text-[#FC6A03] font-semibold"
                  >
                    Learn more <FaArrowRight className="ml-2" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-[#112C56] px-4 py-2 rounded-full text-sm font-semibold uppercase mb-4">Our Team</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#112C56] mb-4"
            >
              Meet the talented team behind our company
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Our team of specialists combines decades of experience in financial investigation, 
              cybersecurity, and legal expertise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4 mb-4">
                        <motion.div 
                          whileHover={{ scale: 1.2 }}
                          className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-[#112C56] cursor-pointer"
                        >
                          <FaLinkedin size={20} />
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.2 }}
                          className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-[#112C56] cursor-pointer"
                        >
                          <FaTwitter size={20} />
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.2 }}
                          className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-[#112C56] cursor-pointer"
                        >
                          <FaEnvelope size={20} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#112C56]">{member.name}</h3>
                  <p className="text-[#FC6A03]">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#112C56] hover:bg-[#FC6A03] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
            >
              View All Team Members
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Partners Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-8 bg-[#112C56] rounded-2xl mb-24 overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-[#112C56] opacity-90"></div>
            <div className="absolute top-0 left-0 w-24 h-24 bg-[#FC6A03] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FC6A03] rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase mb-4"
              >
                Our Partners
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-4"
              >
                We've Worked With Largest Brands
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white rounded-xl p-6 flex items-center justify-center h-32 md:h-36"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-12 max-w-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block bg-blue-50 text-[#112C56] px-4 py-2 rounded-full text-sm font-semibold uppercase mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#112C56] mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Hear from our satisfied clients about their experience with our recovery services
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-xl shadow-lg relative"
              >
                <div className="absolute top-8 right-8 text-5xl text-[#FC6A03] opacity-20">"</div>
                <p className="text-gray-700 mb-6 relative z-10">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#112C56] font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#112C56]">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
