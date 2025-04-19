import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Faqs from './pages/FAQs/Faqs';
import ConsultationPage from './pages/ConsultationPage/ConsultationPage';
import BinaryOptionsFraud from './pages/ServicesPage/BinaryOptionsFraud';
import CryptoCurrencyFraud from './pages/ServicesPage/CryptoCurrencyFraud';
import InvestmentFraud from './pages/ServicesPage/InvestmentFraud';
import LiquidityMiningScam from './pages/ServicesPage/LiquidityMiningScam';
import PropertyAndAssetScam from './pages/ServicesPage/PropertyAndAssetScam';
import ScrollTool from './components/ScrollTool';
import Chargebacks from "./pages/ServicesPage/Chargebacks";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ScrollTool />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/binary-options-fraud" element={<BinaryOptionsFraud />} />
            <Route path="/services/cryptocurrency-fraud" element={<CryptoCurrencyFraud />} />
            <Route path="/services/investment-fraud" element={<InvestmentFraud />} />
            <Route path="/services/liquidity-mining-scam" element={<LiquidityMiningScam />} />
            <Route path="/services/property-asset-scam" element={<PropertyAndAssetScam />} />
            <Route path="/services/chargebacks" element={<Chargebacks />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/consultation" element={<ConsultationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
