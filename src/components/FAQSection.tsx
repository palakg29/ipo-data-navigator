
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How to Subscribe to an IPO?",
      answer: [
        "Step 1: Login to your respective service provider or brokerage account.",
        "Step 2: Navigate to the IPO section and click on the IPO button.",
        "Step 3: Select the IPO you want to bid for and enter the relevant details including number of shares and bid amount.",
        "Step 4: Your subscription will be completed once you make the payment or give permission. Make sure to check your application status after submission.",
        "Note: Always verify your bank account details and ensure sufficient funds are available for the IPO application."
      ]
    },
    {
      question: "Should I buy an IPO first day?",
      answer: "It depends on various factors including company fundamentals, market conditions, and your investment strategy. Research the company's financial health, business model, competitive position, and management quality. Consider waiting for the stock to stabilize post-listing if you're unsure about immediate investment."
    },
    {
      question: "How do you know if an IPO is good?",
      answer: "Research the company's financials, business model, management team, and market position before investing. Look at the company's revenue growth, profitability, debt levels, and competitive advantages. Also consider the IPO pricing, market conditions, and long-term growth prospects of the industry."
    },
    {
      question: "How to check IPO start date?",
      answer: "Check the official IPO calendar on our website, SEBI's official announcements, or your broker's platform. You can also subscribe to IPO alerts and notifications to stay updated about upcoming IPOs and their timeline changes."
    },
    {
      question: "What is issue size?",
      answer: "Issue size refers to the total amount of capital a company aims to raise through the IPO. It's calculated by multiplying the number of shares being offered by the price band. A larger issue size may indicate the company's capital requirements and growth plans."
    },
    {
      question: "How many shares in a lot?",
      answer: "The number of shares in a lot varies by IPO and is specified in the IPO prospectus. Typically, retail investors can apply for a minimum of one lot, and the lot size is determined to make the minimum investment amount reasonable for individual investors."
    },
    {
      question: "How is the lot size calculated?",
      answer: "Lot size is determined by the company in consultation with SEBI based on the share price and minimum investment amount. The goal is to keep the minimum investment accessible to retail investors while maintaining a reasonable number of shares per application."
    },
    {
      question: "Who decides the IPO price band?",
      answer: "The IPO price band is decided by the company in consultation with merchant bankers, underwriters, and market feedback during the book-building process. The final price is determined based on investor demand and market conditions during the IPO period."
    },
    {
      question: "What is IPO GMP?",
      answer: "GMP (Grey Market Premium) is the premium at which IPO shares are traded in the grey market before listing. It indicates market sentiment and expected listing price, though it's not always accurate. GMP can fluctuate based on market conditions and investor interest."
    },
    {
      question: "How many lots should I apply for IPO?",
      answer: "You can apply for multiple lots based on your investment capacity and the IPO's lot size restrictions. Retail investors are typically allowed up to a certain limit, while HNIs and institutions have different categories. Consider your risk tolerance and portfolio allocation before deciding the number of lots."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id="about-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions?</h2>
      <p className="text-gray-600 mb-8">Find answers to common questions that come in your mind related to IPO.</p>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-all duration-300 hover:scale-[1.02]"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === index && (
              <div className="px-6 pb-4">
                {Array.isArray(faq.answer) ? (
                  <ul className="text-gray-600 space-y-2">
                    {faq.answer.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
