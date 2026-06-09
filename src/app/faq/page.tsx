"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "How long does the Japanese student visa process take?",
    answer: "The entire process usually takes about 4 to 6 months. This includes document preparation, school interview, COE application processing by immigration (2-3 months), and final visa stamping."
  },
  {
    question: "Can I work while studying in Japan?",
    answer: "Yes. International students with a valid student visa and 'Permission to Engage in Activity other than that Permitted under the Status of Residence Previously Granted' can work up to 28 hours per week during term time, and up to 40 hours per week during long school holidays."
  },
  {
    question: "What is the minimum educational requirement?",
    answer: "You need to have completed 12 years of formal education (equivalent to 10+2 high school graduation) to be eligible to apply for a student visa in Japan."
  },
  {
    question: "How much bank balance is required?",
    answer: "Your sponsor (usually parents) must show a bank balance equivalent to approximately 1.5 to 2 Million JPY to prove financial capability to support your tuition and living expenses."
  },
  {
    question: "Do I need to know Japanese before applying?",
    answer: "Yes, immigration requires proof of basic Japanese language proficiency. You need an N5 equivalent certificate from standardized tests like NAT, JLPT, or JFT, or proof of 150 hours of Japanese language study."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200"
          >
            Find answers to the most common questions about studying in Japan.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:bg-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Still have questions?</h2>
          <p className="text-lg md:text-xl text-blue-200 mb-10">Don't hesitate to reach out. Our counselors are ready to help you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
              <Calendar className="w-5 h-5" /> Book Free Counseling
            </button>
            <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
