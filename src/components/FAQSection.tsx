
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is an IPO?",
      answer: "An Initial Public Offering (IPO) is when a private company offers its shares to the public for the first time. This allows the company to raise capital from public investors and provides an opportunity for early investors to realize returns on their investment. IPOs are regulated by market authorities and require extensive documentation and due diligence processes to ensure transparency and investor protection."
    },
    {
      question: "How do I apply for an IPO?",
      answer: "You can apply for an IPO through your broker or bank that offers IPO services. You'll need a demat account and trading account to participate. The application process typically involves submitting your bid through online platforms or physical forms, specifying the number of shares and price you're willing to pay. Most IPOs today use the book building process where investors can bid within a specified price range."
    },
    {
      question: "What is the minimum investment required?",
      answer: "The minimum investment depends on the IPO's lot size and price band. Typically, retail investors need to apply for at least one lot, which can range from ₹10,000 to ₹2,00,000. The lot size is predetermined by the company and mentioned in the IPO prospectus. Some IPOs also have different categories for retail investors, high net worth individuals (HNIs), and institutional investors with varying minimum investment requirements."
    },
    {
      question: "How many slots should I apply for IPO?",
      answer: "For retail investors, you can typically apply for 1-2 lots to maximize your chances of allotment, as oversubscribed IPOs use a lottery system for retail category. Applying for more lots doesn't necessarily increase your allotment chances in the retail category. However, if you're eligible for the HNI category (investment above ₹2 lakhs), you might consider applying for more shares as the allotment process differs and is typically proportionate to your application size."
    },
    {
      question: "When do I get the allotted shares?",
      answer: "IPO shares are typically allotted within 6-10 working days after the issue closes. The allotment process includes verification of applications, finalization of the basis of allotment, and credit of shares to successful applicants' demat accounts. You'll receive notifications about your allotment status via email and SMS. Refunds for unsuccessful applications are processed simultaneously, usually within 7-10 working days."
    },
    {
      question: "What happens if I don't get allotted shares?",
      answer: "If you don't receive an allotment, your application money will be refunded to your bank account within 7-10 working days. The refund process is automated and you'll receive notifications about the refund status. In case of partial allotment, you'll receive shares for the allotted quantity and refund for the remaining amount. It's important to ensure your bank account details are correctly linked to avoid any delays in refund processing."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about IPO investments
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 transform transition-transform duration-200">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
