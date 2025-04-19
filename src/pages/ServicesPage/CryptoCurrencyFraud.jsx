import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaExclamationTriangle, FaMoneyBillWave, FaArrowRight, FaChevronDown, FaChevronUp, FaLock, FaUserSecret } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
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

const CryptocurrencyFraud = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const fraudTypes = [
    {
      title: "Only scammers demand payment in cryptocurrency",
      content: "No legitimate business is going to demand you send cryptocurrency in advance – not to buy something, and not to protect your money. That's always a scam."
    },
    {
      title: "Only scammers will guarantee profits or big returns",
      content: "Don't trust people who promise you can quickly and easily make money in the crypto market. Guaranteed returns are always a red flag for fraud."
    },
    {
      title: "Never mix online dating and investment advice",
      content: "If you meet someone on a dating site or app, and they want to show you how to invest in crypto, or asks you to send them crypto, that's a scam."
    },
    {
      title: "ICO scams",
      content: "Initial coin offerings (ICOs) are an important element of the cryptocurrency ecosystem, providing a strategic opportunity for investors to get in on the ground floor of a particular asset while enabling cryptocurrency startups to secure the requisite levels of funding to launch their coins or tokens. Typically, the anatomy of an ICO scam is quite simple and involves: 1) creating a token, 2) hyping it via false and/or misleading claims, 3) providing limited or opaque information, and, finally, 4) diverting the funding in order to use it for other purposes."
    },
    {
      title: "P2P transactions",
      content: "As their name suggests, peer-to-peer transactions can often involve removing the intermediary (in the case of crypto, the exchange platform) from the trading equation, leaving you free to buy and sell crypto directly. While there is nothing inherently wrong with this approach, it does result in certain levels of exposure, which can increase your chances of inadvertently falling prey to scammers. As with most things, caution is key."
    },
    {
      title: "Phishing",
      content: "Remember that e-mail from our Nigerian friend promising millions at the beginning of this article? That's a classic phishing scam in which the sender attempts to reel you in by tricking you into providing private information that can then be used to compromise your financial accounts and personal identity. However, Nigerian lawyers and princes flush with millions in recent cash don't have the market cornered when it comes to phishing scams. The crypto space is swimming in phishing scams and scammers constantly develop new methods of attack."
    },
    {
      title: "Clone sites",
      content: "In 1996, Dolly the sheep was the first mammal to have been cloned successfully from an adult cell—the same animal but nevertheless an entirely different one. Clone sites operate under the same principle—a site that seems the same, but is completely fake. Scammers will take a legitimate site and clone it, hoping that unsuspecting traders won't be able to spot the differences before entering and uploading their personal information. One way to avoid this scam is to pay close attention to the website's URL. If there are any anomalies, then you might very well have identified a phishing site."
    },
    {
      title: "Fake exchanges",
      content: "However, there's more to phishing scams than spoofing websites. In 2017, for example, the South Korean government and local financial authorities warned investors about the emergence of fake cryptocurrency and Bitcoin exchanges. The fake exchange \"BitKRX\" was named after Korea Exchange (KRX), the largest financial trading platform in South Korea, which had been established by KOSDAQ, South Korea Futures Exchange and South Korea Stock Exchange. According to one estimate, there are approximately 643 crypto exchanges currently in operation. That's a lot of exchanges, and choosing the safe and secure one can be confusing."
    },
    {
      title: "Fake support teams",
      content: "Scammers often pose as support personnel from legitimate exchanges or wallet services. They may contact you offering help or claim there's an issue with your account. They'll then ask for your credentials or direct you to a fake website where you'll input your information, giving them access to your funds. Always verify who you're speaking with and never share sensitive information with unsolicited contacts."
    },
    {
      title: "Voice scams or vishing (and smishing)",
      content: "Vishing is just like phishing, you're thinking to yourself. Well, you're partially right. Vishing is phishing using a phone, but scammers can deploy high-tech methods such as automated voice simulators and harvesting information that might have been leaked on the dark web. Some vishing scammers will not contact you directly, but rather your phone company. After finding out your phone number and even your identification number and address thanks to something as benign as a stolen invoice, the attacker contacts the company to transfer your line to a new SIM card, which they control."
    },
    {
      title: "Social media \"gifts\" or \"giveaways\"",
      content: "\"Giveaway gangs\" are thriving. During the first three months of 2021 alone, they've already hauled in more than $18million (analysts estimate the total for 2020 was in the region of $16million), with tens of thousands of people falling victim to these scams annually. Earlier this year in March, the BBC covered the case of a German man from Cologne named \"Sebastian,\" who clicked on a Twitter notification from what he thought was Elon Musk's account. His click landed him on a professional-looking website with the giveaway already underway. Fearing that he might miss out on the opportunity to double his holdings, he sent 10 Bitcoin. And waited. And waited. As the sweepstakes timer wound down to zero, Sebastian was forced to face the reality of the situation: the Tweet, website and sweepstakes were all one big scam."
    },
    {
      title: "Pump and dump schemes",
      content: "A coin or token is hyped by a group of individuals through an e-mail blast and social media such as Telegram, Facebook and Twitter. Fearing that they might miss out (FOMO) on this incredible opportunity, traders rush to buy up the coins, thereby driving the price up until the coins are eventually dumped by the group of scammers. A crash ensues, with the value of the asset plummeting. Pump and dump schemes have attracted a great deal of attention in the crypto sphere."
    },
    {
      title: "Crypto trading signals",
      content: "99% of crypto signal providers are fake, and beginning traders should be especially wary. Crypto trading signals groups are targeting you in particular because of your limited experience, hoping that you'll trade your hard-earned coin for an \"easy\" or \"certain\" pathway to trading success. First they'll gain your interest and trust and then charge you a monthly subscription fee for their \"service.\" Not only will you not learn anything from having others spoon-feed you information or strategies, but you're also opening yourself up to things like pump and dump scams. You also have little idea where these groups are actually getting their information and have no way of determining if their performance record has been manipulated."
    },
    {
      title: "Fake crypto apps",
      content: "Apps have become one of the latest ways that scammers can get their digital hands on your crypto wallet. \"Phillipe Christodoulou wanted to check his bitcoin balance last month, so he searched the App Store on his iPhone for \"Trezor,\" the maker of a small hardware device he uses to store his cryptocurrency. Up popped the company's padlock logo set against a bright green background. The app was rated close to five stars. He downloaded it and typed in his credentials. In less than a second, nearly all of his life savings — 17.1 bitcoin worth $600,000 at the time — was gone. The app was a fake, designed to trick people into thinking it was a legitimate app.\""
    },
    {
      title: "Cloud mining scams",
      content: "Unless you have access to geothermal energy (yes, we're looking at you, readers from Iceland), then mining crypto might make you consider taking out a loan to pay your electricity bill. One company, Mining Max, saw an opportunity to scam investors and set up a pyramid scheme to carry out its fraud. South Korean authorities, however, caught on to the scam, indicting over two dozen company employees, who were accused of \"embezzling about $250 million from 18,000 investors in 54 countries, including the United States, South Korea, China and Japan.\""
    },
    {
      title: "DeFi \"rug pulls\"",
      content: "Last but certainly not least in our list of crypto scams are DeFi rug pulls. Can't tell a rug pull from a Persian rug? Well, according to CipherTrace, rug pulls were crypto's top fraud scheme in 2020. This type of attack is specific to decentralized finance exchanges (DEXs) in which a vulnerability to the smart contract is exploited (the vulnerability means that the contract can be bought but never sold). As a result, the token loses all of its value. As CipherTrace's report indicates, \"Half of all 2020 crypto hacks were of DeFi protocols—a pattern that was virtually negligible in all prior years—and nearly 99% of major fraud volume in the second half of 2020 stemmed from DeFi protocols performing 'rug pulls' and other exit scams in a pattern eerily reminiscent of the 2017 ICO craze. In a rug pull, which is similar to a pump and dump, some investors will liquidate the entire DeFi pool, leaving the remaining token holders with no liquidity and unable to trade, wiping out the remaining value.\""
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
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col mt-10 md:flex-row items-center gap-10 justify-between">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <motion.div variants={fadeIn}>
                <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase mb-4">OUR SERVICE</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Cryptocurrency Fraud</h1>
                <p className="text-lg text-gray-200 mb-8">
                  We help victims of cryptocurrency scams recover their funds through advanced cybersecurity techniques and legal expertise.
                </p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <a href="/consultation" className="bg-[#FC6A03] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg inline-block transition-colors text-center">
                    Free Consultation
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
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
                  whileHover={{ rotate: [0, 2, 0, -2, 0], transition: { duration: 0.5 } }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Cryptocurrency Fraud" 
                    className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -righmotion.div-16 bg-blue-400 rounded-full opacity-60"
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
              Cryptocurrency is a type of digital currency that generally exists only electronically. You usually use your phone, computer, or a cryptocurrency ATM to buy cryptocurrency. Bitcoin and Ether are well-known cryptocurrencies, but there are many different cryptocurrencies, and new ones keep being created. People use cryptocurrency for many reasons — quick payments, to avoid transaction fees that traditional banks charge, or because it offers some anonymity. Others hold cryptocurrency as an investment, hoping the value goes up. You can buy cryptocurrency through an exchange, an app, a website, or a cryptocurrency ATM. Some people earn cryptocurrency through a complex process called "mining," which requires advanced computer equipment to solve highly complicated math puzzles.
            </motion.p>
            <motion.p variants={fadeIn} className="text-gray-700">
              Cryptocurrency is stored in a digital wallet, which can be online, on your computer, or on an external hard drive. A digital wallet has a wallet address, which is usually a long string of numbers and letters. If something happens to your wallet or your cryptocurrency funds — like your online exchange platform goes out of business, you send cryptocurrency to the wrong person, you lose the password to your digital wallet, or your digital wallet is stolen or compromised. Scammers are always finding new ways to steal your money using cryptocurrency. To steer clear of a crypto con, here are some things to know.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#112C56] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Work Process
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden"
              variants={fadeIn}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 bg-gray-100 rounded-bl-lg px-3 py-1">
                <span className="text-[#112C56] font-bold">01</span>
              </div>
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaShieldAlt className="text-[#112C56] text-2xl" />
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3"
                whileHover={{ scale: 1.05, color: "#FC6A03", transition: { duration: 0.2 } }}
              >
                File a Complaint
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ color: "#112C56" }}
              >
                We attend to every case with a state-of-the-art technology and resources for efficient service delivery.
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden"
              variants={fadeIn}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 bg-gray-100 rounded-bl-lg px-3 py-1">
                <span className="text-[#112C56] font-bold">02</span>
              </div>
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaUserSecret className="text-[#112C56] text-2xl" />
              </motion.div>
              <motion.h3 className="text-xl font-bold text-gray-900 mb-3">Case Evaluation & Investigation</motion.h3>
              <p className="text-gray-600">
                Our team investigates every information provided and put our contact & resources to use.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden"
              variants={fadeIn}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 bg-gray-100 rounded-bl-lg px-3 py-1">
                <span className="text-[#112C56] font-bold">03</span>
              </div>
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaMoneyBillWave className="text-[#112C56] text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cyber Analytics & Fund Delivery</h3>
              <p className="text-gray-600">
                We utilize advanced cybersecurity techniques to trace and recover your cryptocurrency, delivering it back to you securely.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fraud Types Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#112C56] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Common Cryptocurrency Fraud Types
          </motion.h2>
          
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {fraudTypes.map((item, index) => (
              <motion.div 
                key={index}
                className="border w-full border-gray-200 rounded-lg overflow-hidden"
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
                    {item.title}
                  </motion.h3>
                  <motion.div
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full ${activeAccordion === index ? 'bg-[#112C56]' : 'bg-gray-200'} flex items-center justify-center`}
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
                  <div className="p-4 md:p-6 bg-white text-gray-700">
                    {item.content}
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
              Victim of Cryptocurrency Fraud?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              If you find yourself facing this problem, our team can help. Our Cryptocurrency recovery service offers something very different thanks to our world-class cybersecurity experts and legal professionals.
            </p>
            <motion.a 
              href="/consultation" 
              className="inline-flex items-center bg-[#FC6A03] text-white py-3 px-8 rounded-md font-medium hover:bg-orange-600 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              Our ethical cyber security specialists were some of the most notorious in the world, accessing the private information of billionaires on the Forbes 400 list, and the strong computer skills and decryption experience provided by our team is unparalleled. You can rest assured that your recovery cryptocurrency problem is in the best of hands. Just give us a call to provide us with information about your problems with cryptocurrency or fraud related claims to find out how we can help you.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CryptocurrencyFraud;
