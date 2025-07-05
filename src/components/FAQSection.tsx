
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How to Subscribe to an IPO?",
      answer: [
        "Step 1: Login to your respective service provider.",
        "Step 2: Click on the IPO button.",
        "Step 3: Select the IPO you want to bid and enter the relevant details.",
        "Step4: Your subscription will be completed once you make the payment or give permission."
      ]
    },
    {
      question: "Should I buy an IPO first day?",
      answer: "It depends on various factors including company fundamentals, market conditions, and your investment strategy."
    },
    {
      question: "How do you know if an IPO is good?",
      answer: "Research the company's financials, business model, management team, and market position before investing."
    },
    {
      question: "How to check IPO start date?",
      answer: "Check the official IPO calendar on our website or SEBI's official announcements."
    },
    {
      question: "What is issue size?",
      answer: "Issue size refers to the total amount of capital a company aims to raise through the IPO."
    },
    {
      question: "How many shares in a lot?",
      answer: "The number of shares in a lot varies by IPO and is specified in the IPO prospectus."
    },
    {
      question: "How is the lot size calculated?",
      answer: "Lot size is determined by the company and SEBI based on the share price and minimum investment amount."
    },
    {
      question: "Who decides the IPO price band?",
      answer: "The IPO price band is decided by the company in consultation with merchant bankers and underwriters."
    },
    {
      question: "What is IPO GMP?",
      answer: "GMP (Grey Market Premium) is the premium at which IPO shares are traded in the grey market before listing."
    },
    {
      question: "How many lots should I apply for IPO?",
      answer: "You can apply for multiple lots based on your investment capacity and the IPO's lot size restrictions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions?</h2>
      <p className="text-gray-600 mb-8">Find answers to common questions that come in your mind related to IPO.</p>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-blue-600 transform transition-transform ${
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
