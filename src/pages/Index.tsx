
import React from 'react';
import Header from '@/components/Header';
import IPOSection from '@/components/IPOSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <IPOSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
