import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Donald Gallagher',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Gary Low',
      position: 'Director',
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
      name: 'Maria Klass',
      position: 'Senior Associate',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Timo Imani',
      position: 'Recovery Consultant',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Patrick McGinley',
      position: 'Recovery Consultant',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'George Baake',
      position: 'Recovery Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'James Brunson',
      position: 'Recovery Consultant',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Ben Forbes',
      position: 'Senior Programmer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="inline-block bg-gray-100 text-[#112C56] px-4 py-2 rounded-md text-sm font-semibold uppercase mb-4">TEAM MEMBERS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the talented team form our company</h3>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.slice(0, 4).map((member, index) => (
            <motion.div key={index} variants={item} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-600">{member.position}</p>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.slice(4, 8).map((member, index) => (
            <motion.div key={index} variants={item} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-600">{member.position}</p>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-5xl font-bold text-[#112C56] mb-2">3926<span className="text-[#FC6A03]">+</span></h3>
            <p className="text-gray-600 uppercase tracking-wider">SUCCESSFUL RECOVERIES</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#112C56] mb-2">124<span className="text-[#FC6A03]">+</span></h3>
            <p className="text-gray-600 uppercase tracking-wider">GLOBAL RECOGNITION</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#112C56] mb-2">56<span className="text-[#FC6A03]">+</span></h3>
            <p className="text-gray-600 uppercase tracking-wider">SOLUTIONS EXPERTS</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#112C56] mb-2">1762<span className="text-[#FC6A03]">+</span></h3>
            <p className="text-gray-600 uppercase tracking-wider">HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 