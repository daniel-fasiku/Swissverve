import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaShieldAlt, FaFileAlt, FaChartLine, FaChevronDown, FaChevronUp, FaBuilding, FaGlobe, FaBitcoin, FaArrowRight } from 'react-icons/fa';

const InvestmentFraud = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const controls = useAnimation();
  const statsControls = useAnimation();
  
  // Animate stats counters
  useEffect(() => {
    statsControls.start({
      scale: [0.5, 1],
      opacity: [0, 1],
      transition: { duration: 0.5, ease: "easeOut" }
    });
  }, [statsControls]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Fraud types for accordions
  const fraudTypes = [
    {
      title: "Investment Fraud is more convincing than you can ever imagine",
      content: (
        <>
          <p className="mb-4">Your story is probably like many others. You have worked hard and saved money to plan for your future. So instead of "playing the market" yourself, you engage a financial advisor to help protect your nest egg.</p>
          <p>You probably felt at ease with your decision to hire a financial advisor. Your financial advisor is a fiduciary, and, accordingly, they owe you a duty of care. This is someone you believe you can trust with your savings and rely on to make the right decisions for you and your family. Most financial advisors are honest, hardworking, and caring professionals who try their best for their clients. Notwithstanding their strict ethical rules, some investment advisors cannot resist the temptation of making money the easy way. Below are the five types of investment fraud commonly employed by shady financial advisors.</p>
        </>
      )
    },
    {
      title: "Promissory Notes",
      content: (
        <>
          <p className="mb-4">In an environment of low interest rates, the promise of high interest promissory notes may tempt investors, especially seniors and others living on a fixed income.</p>
          <p className="mb-4">A promissory note is a written promise to pay (or repay) a specified sum of money at a stated time in the future or upon demand. Promissory notes generally pay interest, either periodically before maturity of the note or at the time of maturity. Companies may sell promissory notes to raise capital, and usually offer them only to sophisticated or institutional investors. But not all promissory notes are sold in this way.</p>
          <p className="mb-4">Promissory notes may be offered and sold to retail investors. Such notes must be registered with the Securities and Exchange Commission and/or the state(s) in which they are sold or qualify for an exemption from securities registration. Most promissory notes sold to the general public also must be sold by securities salespeople who have the appropriate securities license or registration from their state securities agency.</p>
          <p className="mb-4">Promissory notes from legitimate issuers can provide reasonable investment returns at an acceptable level of risk, although state securities regulators have identified an unfortunately high number of promissory note frauds. Individuals considering investing in a promissory note should thoroughly research the investment – and the people promoting it. Investors should be cautious about promissory notes with durations of nine months or less, as these notes generally do not require federal or state securities registration.</p>
          <p>Such short-term notes have been the source of most (though not all) of the fraudulent activity involving promissory notes identified by state securities regulators. These short-term debt instruments may be offered by little-known (or perhaps even nonexistent) companies and extend promises of high returns – perhaps over 15 percent monthly – at little to no risk. But if an investment sounds too good to be true, it probably is.</p>
        </>
      )
    },
    {
      title: "Ponzi/Pyramid Schemes",
      image: "https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: (
        <>
          <p className="mb-4">The most famous example of investment fraud involves Bernie Madoff. The NASDAQ chairman executed the largest Ponzi scheme in history — a con that spanned at least 17 years and led to $170 billion in restitution. Madoff received a 150-year prison sentence for his crimes. But investment scams have changed, especially as hedge funds and cryptocurrency exchanges explore new investment vehicles. For example, Virgil Sigma Fund LP and VQR Multistrategy Fund LP advertised arbitrage opportunities in crypto markets that embezzled over $54 million.</p>
          <p className="mb-4">In an environment of low interest rates, the promise of high interest promissory notes may tempt investors, especially seniors and others living on a fixed income.</p>
          <p>A promissory note is a written promise to pay (or repay) a specified sum of money at a stated time in the future or upon demand. Promissory notes generally pay interest, either periodically before maturity of the note or at the time of maturity. Companies may sell promissory notes to raise capital, and usually offer them only to sophisticated or institutional investors. But not all promissory notes are sold in this way.</p>
        </>
      )
    },
    {
      title: "Real Estate Investments",
      content: (
        <>
          <p className="mb-4">The promise of earning quick money through investments related to real estate continues to lure investors. Real estate investment scams are a perennial investor trap.</p>
          <p className="mb-4">State securities regulators caution investors about real estate investment seminars, especially those marketed aggressively as an alternative to more traditional retirement planning strategies involving stocks, bonds and mutual funds. Attendees at these seminars may hear testimonials from people claiming to have doubled or tripled their income through seemingly simple real estate investments. But these claims may be nothing more than hot air. Two of the most popular investment pitches involve so-called "hard-money lending" and "property flipping." Hard-money lending is a term used to refer to real estate investments financed through means other than traditional bank borrowing. (This type of loan gets its name from the fact that it would be "hard to get" from a traditional lending source.)</p>
          <p className="mb-4">Some firms or wealthy individuals specialize in making hard-money loans, as these loans can command comparatively high interest rates. But borrowers may seek to obtain such loans from retail investors as well. Investors may be tempted by the opportunity to earn greater rates of return by participating on a hard-money loan and may (or may not) appreciate the potential risks, including as to the borrower's credit, the expected stability of income from the investment, or time constraints.</p>
          <p className="mb-4">There are three players in a hard-money transaction: the investor, the lender and the borrower.</p>
          <p className="mb-4">Private lenders raise money from investors to lend to borrowers. If funds from different investors are combined, the investment vehicle used to purchase the property is a "pooled investment," which is a security and, as such, is subject to the protections and disclosure requirements of securities laws and regulations.</p>
          <p className="mb-4">While traditional loans are based on the ability of the borrower to repay using indicators such as credit scores and income, hard-money loans are based primarily on the value of the property with which they are secured, which the borrower already owns or is acquiring with the loan. If the borrower defaults, the lender may be able to seize the asset and try to sell it; however, it may be harder for the investor to recoup the loan depending on how it is structured.</p>
          <p>Property flipping is the practice of purchasing distressed real estate, refurbishing it, and then immediately re-selling it in hopes of earning a profit. A property flipper can use its own money to finance the flip or can seek financing from others. Property flipping financed through borrowed funds or outside investments can be done entirely lawfully, but it can also be a source for fraud.</p>
        </>
      )
    },
    {
      title: "Social Media/Internet Investment Fraud",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: (
        <>
          <p className="mb-4">Social networking through the internet allows people to connect to one another more quickly and easily than ever before. Investment promoters increasingly are logging on to find investors ... and their money.</p>
          <p className="mb-4">A social network is a group of individuals (or organizations) who are connected through common interests, hobbies, lifestyles, relationships, faith or other beliefs. Platforms such as Facebook, Twitter, LinkedIn, eHarmony and other online social networks and communities have made it faster and easier for users to meet, interact and establish connections with other users anywhere in the world.</p>
          <p className="mb-4">While social networking helps connect people with others who share similar interests or views, con artists infiltrate these social networks looking for victims. By joining and actively participating in a social network or community, the con artist builds credibility and gains the trust of other members of the group. In online social networks, a con artist can establish this trust and credibility more quickly. The scammer has immediate access to potential victims through their online profiles, which may contain sensitive personal information such as their dates or places of birth, phone numbers, home addresses, religious and political views, employment histories, and even personal photographs.</p>
          <p className="mb-4">The con artist takes advantage of how easily people share background and personal information online and uses it to make a skillful and highly targeted pitch. The scam can spread rapidly through a social network as the con artist gains access to the friends and colleagues of the initial target. Online investment fraud has many of the same characteristics as offline investment fraud. Learn to recognize these red flags:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Promises of high returns with no risk. Many online scams promise unreasonably high short-term profits. Guarantees of returns around 2 percent a day, 14 percent a week or 40 percent a month are too good to be true. Remember that risk and reward go hand-in-hand.</li>
            <li>Offshore operations. Many scams are headquartered offshore, making it more difficult for regulators to shut down the scam and recover investors' funds.</li>
            <li>E-Currency sites. If you have to open an e-currency account to transfer money, use caution. These sites may not be regulated, and the con artists use them to cover up the money trail.</li>
            <li>Recruit your friends. Most cons will offer bonuses if you recruit your friends into the scheme.</li>
            <li>Professional websites with little to no information. These days anyone can put up a website. Scam sites may look professional, but they offer little to no information about the company's management, location or details about the investment.</li>
            <li>No written information. Online scam promoters often fail to provide a prospectus or other form of written information detailing the risks of the investment and procedures to get your money out.</li>
          </ul>
        </>
      )
    },
    {
      title: "Cryptocurrency Investment Frauds",
      content: (
        <>
          <p className="mb-4">Cryptocurrencies are digital currencies. Bitcoin is the most well-known form of digital currency. In Australia, cryptocurrency is not treated as 'money' or a 'financial product' and you have less protection if you invest and it turns out be a scam or you lose a lot of money.</p>
          <p className="mb-4">It is very difficult to identify legitimate cryptocurrency investments from scams. Scammers take advantage of the hype and the less regulated environment to 'invest' in Bitcoin or another cryptocurrency on your behalf. Before you invest you should ask yourself if you are willing to lose some or all of the money you have invested and know that if you go ahead you are investing with little or no protections behind you.</p>
          <p className="mb-4">Cryptocurrency investment scammers are convincing. They may advertise or post on social media offering great returns from cryptocurrency trading. If you click on the advertisement or post, the scammer will contact you or you will be directed to a fake website. The scammer will offer to make an investment on your behalf, or provide details of an app or website through which you can invest.</p>
          <p className="mb-4">Cryptocurrency scammers also commonly use platforms such as Discord and Telegram to contact people. The scammers will encourage you to buy cryptocurrency through an exchange or request you send money to a company for them to do so on your behalf. They will then claim to either trade on your behalf, or coach you through making trades yourself. You will be able to see the profits you have made on a webpage, app or custom MetaTrader platform.</p>
          <p>The data you can see will be fake and will show you profiting (or losing as a way to get you to invest more money). Eventually you will be unable to withdraw any money. The scammers will make excuses for delays in withdrawals, you are banned from the platform or the trading platform is closed. When you try and find out what has happened, the scammers cannot be contacted and your money is gone.</p>
        </>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0b1f3d] to-[#112C56] py-20 md:py-32 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#FC6A03] rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
            <motion.div 
              className="md:w-1/2 mt-10 md:mt-0 mb-10 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
            >
              <motion.div variants={fadeIn}>
                <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase mb-4">OUR SERVICE</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Investment Fraud</h1>
                <p className="text-lg text-gray-200 mb-8">
                  We help victims of investment scams recover their funds through our specialized legal and technical expertise.
                </p>
                <motion.div 
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href="/consultation" 
                    className="inline-block bg-[#FC6A03] text-white py-3 px-8 rounded-md font-medium hover:bg-orange-600 transition duration-300"
                  >
                    Free Consultation
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-[#FC6A03] rounded-full opacity-70"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.7, 0.4, 0.7]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-xl shadow-2xl backdrop-blur-sm"
                  whileHover={{ rotate: [0, 1, 0, -1, 0], transition: { duration: 0.5 } }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Investment Fraud" 
                    className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-60"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.6, 0.3, 0.6]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.p 
              variants={fadeIn} 
              className="text-gray-700 mb-6"
              whileInView={{ 
                textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 1px 2px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"],
                transition: { duration: 3, repeat: Infinity }
              }}
            >
              Investment scams involve promises of big payouts, quick money or guaranteed returns. Always be suspicious of any investment opportunities that promise a high return with little or no risk – if it seems too good to be true, it probably is – and is highly likely to be a scam. Investment fraud in 2022 is a real and serious problem, and it happens more than you realize.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#112C56] to-[#1E3A8A]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div
              className="col-span-1 flex flex-col items-center text-center text-white"
              animate={statsControls}
            >
              <motion.div
                className="text-8xl font-bold text-[#FC6A03]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.1, color: "#ffffff", transition: { duration: 0.2 } }}
              >
                20
              </motion.div>
              <motion.div 
                className="text-2xl font-medium mt-2"
                whileHover={{ color: "#FC6A03" }}
              >
                Years of Experience
              </motion.div>
            </motion.div>

            <motion.div 
              className="col-span-2 grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <motion.div 
                  className="w-32 h-32 rounded-full border-4 border-[#FC6A03] mx-auto flex items-center justify-center"
                  animate={{
                    borderColor: ["#FC6A03", "#3182CE", "#FC6A03"],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  <span className="text-4xl font-bold text-white">99%</span>
                </motion.div>
                <h3 className="text-xl font-medium text-white mt-4">Success Rate</h3>
              </motion.div>
              
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <motion.div 
                  className="w-32 h-32 rounded-full border-4 border-[#FC6A03] mx-auto flex items-center justify-center"
                  animate={{
                    borderColor: ["#FC6A03", "#3182CE", "#FC6A03"],
                    transition: { duration: 3, repeat: Infinity, delay: 1 }
                  }}
                >
                  <span className="text-4xl font-bold text-white">99%</span>
                </motion.div>
                <h3 className="text-xl font-medium text-white mt-4">Recovered in 2024</h3>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#112C56] mb-4">Our Work Process</h2>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-[#e6f7ff] flex items-center justify-center text-[#112C56] text-xl font-bold mb-6 relative"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(17, 44, 86, 0.3)" }}
                >
                  <span>01</span>
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-[#112C56]"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-[#112C56] mb-3"
                  whileHover={{ color: "#FC6A03", scale: 1.05 }}
                >
                  File a Complaint
                </motion.h3>

                <motion.p 
                  className="text-gray-600"
                  whileHover={{ color: "#112C56" }}
                >
                  We attend to every case with a state-of-the-art technology and resources for efficient service delivery.
                </motion.p>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-[#e6f7ff] flex items-center justify-center text-[#112C56] text-xl font-bold mb-6 relative"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(17, 44, 86, 0.3)" }}
                >
                  <span>02</span>
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-[#112C56]"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-[#112C56] mb-3"
                  whileHover={{ color: "#FC6A03", scale: 1.05 }}
                >
                  Case Evaluation & Investigation
                </motion.h3>

                <motion.p 
                  className="text-gray-600"
                  whileHover={{ color: "#112C56" }}
                >
                  Our team investigates every information provided and put our contact & resources to use.
                </motion.p>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-[#e6f7ff] flex items-center justify-center text-[#112C56] text-xl font-bold mb-6 relative"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(17, 44, 86, 0.3)" }}
                >
                  <span>03</span>
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-[#112C56]"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                  />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-[#112C56] mb-3"
                  whileHover={{ color: "#FC6A03", scale: 1.05 }}
                >
                  Cyber Analytics & Fund Delivery
                </motion.h3>

                <motion.p 
                  className="text-gray-600"
                  whileHover={{ color: "#112C56" }}
                >
                  We attend to every case with a state-of-the-art technology and resources for efficient service delivery.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Types Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#112C56] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Common Investment Fraud Types
          </motion.h2>
          
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {fraudTypes.map((fraud, index) => (
              <motion.div 
                key={index}
                className="w-full border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeIn}
              >
                <motion.button
                  className={`w-full flex justify-between items-center p-4 md:p-6 text-left bg-white hover:bg-gray-50 transition ${
                    activeAccordion === index ? 'border-b border-gray-200' : ''
                  }`}
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <motion.h3 
                    className="text-lg max-w-[250px] md:max-w-none font-semibold text-[#112C56]"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    {fraud.title}
                  </motion.h3>
                  <motion.div
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full ${activeAccordion === index ? 'bg-[#112C56]' : 'bg-gray-200'} flex items-center justify-center flex-shrink-0 ml-4`}
                  >
                    {activeAccordion === index ? (
                      <FaChevronUp className="text-white text-xs" />
                    ) : (
                      <FaChevronDown className="text-white text-xs" />
                    )}
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeAccordion === index ? 'auto' : 0,
                    opacity: activeAccordion === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 md:p-6 bg-white">
                    {fraud.image && (
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img 
                          src={fraud.image} 
                          alt={fraud.title} 
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </motion.div>
                    )}
                    <div className="text-gray-700 prose prose-lg">
                      {fraud.content}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#112C56] text-white overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
          animate={{
            x: [0, 10, 0],
            y: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Victim of Investment Fraud?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              If you find yourself facing this problem, our team can help. Our Investment Fraud recovery service offers something very different thanks to our world-class expertise.
            </p>
            <motion.a 
              href="/consultation" 
              className="inline-flex items-center bg-[#FC6A03] text-white py-3 px-8 rounded-md font-medium hover:bg-orange-600 transition duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                textShadow: "0 0 5px rgba(255,255,255,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Consultation <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Final Information Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 mb-6">
              Our ethical cyber security specialists were some of the most notorious in the world, accessing the private information of billionaires on the Forbes 400 list, and the strong computer skills and decryption experience provided by Donald Gallagher Consultants is unparalleled. You can rest assured that your recovery Investment problem is in the best of hands. Just give us a call to provide us with information about your problems with Investment Fraud related claims to find out how we can help you.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentFraud;
