'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import TwoToneHeading from './TwoToneHeading';

const faqs = [
  {
    question: "What is the age limit for studying in Japan?",
    answer: "Generally, students should be 18 years or older. While there is no strict upper limit, applicants with a significant gap in their studies must provide a valid explanation or proof of relevant work experience."
  },
  {
    question: "Are study gaps accepted?",
    answer: "Yes, study gaps of up to 5 years are usually acceptable, provided you have a valid reason, such as relevant work experience, and can provide the necessary documentation."
  },
  {
    question: "What GPA is required?",
    answer: "Typically, a minimum of a passing grade (often around a 2.0 GPA or equivalent) in your highest level of education is required by most Japanese language schools and institutions."
  },
  {
    question: "How much does it cost to study in Japan?",
    answer: "The initial cost generally ranges from 10 to 15 Lakhs NPR. This usually includes 1 year of tuition fees, 6 months of dormitory accommodation, processing fees, and airfare."
  },
  {
    question: "What Japanese language level is required?",
    answer: "A minimum of N5 level proficiency (or equivalent NAT/J.TEST) or a certificate showing 150 hours of Japanese language study is generally required to apply for the Certificate of Eligibility (COE)."
  },
  {
    question: "What is a COE?",
    answer: "A Certificate of Eligibility (COE) is a document issued by the Japanese Immigration Bureau. It is a mandatory requirement before you can apply for a student visa at the Embassy of Japan."
  },
  {
    question: "How do I get a student visa?",
    answer: "Once your COE is approved and issued in Japan, we will guide you through submitting your visa application to the Embassy of Japan in Nepal."
  },
  {
    question: "Who can be my sponsor?",
    answer: "Typically, your parents or close blood relatives (like siblings) can sponsor you. They must have a stable source of income and be able to provide the necessary financial documents."
  },
  {
    question: "What are the bank balance requirements?",
    answer: "Your sponsor must show a bank balance equivalent to approximately 2 to 3 million JPY (around 25-30 Lakhs NPR) to prove they can support your studies and living expenses."
  },
  {
    question: "Can I work part-time in Japan?",
    answer: "Yes! International students with a student visa can work up to 28 hours per week during regular school terms, and up to 40 hours per week during long holidays (like summer or winter break)."
  },
  {
    question: "What documents are required?",
    answer: "Common documents include your academic transcripts and certificates, sponsor's income proof, bank statements, a relationship certificate, and your Japanese language proficiency certificate."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" bgColor="bg-gray-50" className="py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <TwoToneHeading firstText="Frequently Asked" secondText="Questions" className="text-4xl md:text-5xl mb-4" />
          <p className="text-[#334155] text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about studying in Japan, the application process, and requirements.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-[#1B2A6B] text-lg pr-8">{faq.question}</span>
                <span className={`material-symbols-outlined text-[#0097A7] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-1 text-[#334155] leading-relaxed border-t border-gray-50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
