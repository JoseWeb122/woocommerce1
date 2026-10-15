import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('all');

  const faqs: FaqItem[] = [
    {
      category: 'sizing',
      question: 'What does "GSM" mean and how does it affect the feel of a t-shirt or hoodie?',
      answer: 'GSM stands for Grams per Square Meter—a standard textile measurement indicating fabric density and weight. Standard commercial t-shirts are typically 140–160 GSM. Fashion Martinez garments range from 200 GSM (baby tees) up to 280–300 GSM (heavy boxy tees) and 445–450 GSM for our fleece hoodies and stand collar jackets. Higher GSM means a structured, substantial drape that retains its shape throughout the day.'
    },
    {
      category: 'sizing',
      question: 'How do Fashion Martinez silhouettes fit?',
      answer: 'Our core silhouettes are designed with modern streetwear proportions: dropped shoulders, roomy chest volume, and relaxed barrel legs. If you prefer a tailored fit, we recommend sizing down one size. If you enjoy the intentional oversized aesthetic shown in our campaign imagery, order your standard size.'
    },
    {
      category: 'production',
      question: 'How does Fashion Martinez produce its garments?',
      answer: 'Fashion Martinez utilizes Tapstitch on-demand apparel manufacturing. This allows each garment to be made with high precision, pre-shrunk fabrics, and custom dyeing techniques (such as bio-enzyme and snow washes) while preventing textile surplus.'
    },
    {
      category: 'orders',
      question: 'How do I track my order once placed?',
      answer: 'Once your order is manufactured, quality inspected, and handed over to standard courier transit, an automated email dispatch will provide a tracking number so you can monitor your package doorstep delivery.'
    },
    {
      category: 'orders',
      question: 'What shipping options are available?',
      answer: 'Standard Ground delivery (typically 3–5 business days following garment production) and Priority Express delivery (2 business days transit).'
    },
    {
      category: 'returns',
      question: 'What is the return and exchange policy?',
      answer: 'Because our apparel is custom manufactured through Tapstitch on-demand printing, we gladly replace or refund items that arrive with manufacturing defects or shipping damage. Please contact contact@fashionmartinez.com within 14 days of delivery with photos of the issue.'
    },
    {
      category: 'care',
      question: 'How should I wash and care for heavyweight streetwear?',
      answer: 'To preserve the dense cotton handfeel and wash effects (such as snow wash or mineral dye), always machine wash inside-out in cold water (30°C) on a gentle cycle. Air dry flat or tumble dry on low heat. Avoid direct ironing on prints or hardware.'
    }
  ];

  const filteredFaqs = activeTab === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === activeTab);

  return (
    <div className="bg-[#F8F7F4] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
            Support Center
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-neutral-950">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm text-neutral-600 max-w-lg mx-auto">
            Everything you need to know about our fabric weights, sizing cuts, Tapstitch manufacturing, and care advice.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-neutral-200 pb-4">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'sizing', label: 'Sizing & GSM' },
            { id: 'production', label: 'Tapstitch Production' },
            { id: 'orders', label: 'Ordering & Shipping' },
            { id: 'returns', label: 'Returns & Policies' },
            { id: 'care', label: 'Garment Care' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === tab.id
                  ? 'bg-black text-white'
                  : 'bg-white text-neutral-700 hover:text-black border border-neutral-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="bg-white border border-neutral-200 divide-y divide-neutral-200 shadow-xs">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 text-sm sm:text-base hover:bg-neutral-50"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-neutral-400 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-neutral-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-[#F8F7F4]/50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white border border-neutral-200 p-8 text-center shadow-xs">
          <h3 className="font-editorial text-xl font-bold uppercase text-neutral-900">
            Still Have Questions?
          </h3>
          <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
            Our team responds directly at contact@fashionmartinez.com within 1–2 business days.
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Contact Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
