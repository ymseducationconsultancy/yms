"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, UserCheck, Landmark, Clock, Calendar, MessageCircle, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const documents = [
  {
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    title: "Academic Documents",
    description: "Complete set of your educational history.",
    items: [
      "Original Academic Transcripts (SEE/SLC, 10+2, Bachelor's)",
      "Character Certificates from all attended institutions",
      "Provisional or Original Degree Certificates",
      "Language Proficiency Certificate (NAT/JLPT/JFT - minimum N5 equivalent)"
    ]
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-600" />,
    title: "Sponsor Details",
    description: "Proof of financial support from your sponsor (usually parents).",
    items: [
      "Relationship Certificate verifying the sponsor",
      "Occupation Certificate of the sponsor",
      "Income verification (last 3 years of income source)",
      "Tax Clearance Certificates",
      "Sponsorship Letter (signed commitment)"
    ]
  },
  {
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    title: "Bank Documentation",
    description: "Verification of financial capacity to study and live in Japan.",
    items: [
      "Bank Balance Certificate (Minimum equivalent to 1.5 - 2 Million JPY)",
      "Bank Statement (covering the last 3 years of transactions)",
      "Source of funds explanation for major deposits",
      "Education Loan Sanction Letter (if applicable)"
    ]
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Gap Explanation",
    description: "Justification for any breaks in your educational timeline.",
    items: [
      "Work Experience Letters (if employed during gap)",
      "Language Study Certificates (if learning Japanese during gap)",
      "Medical Certificates (if gap was due to health reasons)",
      "Detailed Statement of Purpose (SOP) explaining the gap logically"
    ]
  }
];

export default function CoeVisaDocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544885935-98dd03b09034?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">COE & Visa Documentation</h1>
            <p className="text-xl text-blue-100">
              Your comprehensive guide to preparing a flawless application for your Certificate of Eligibility (COE) and Japanese Student Visa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {doc.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{doc.title}</h3>
                <p className="text-gray-600 mb-6">{doc.description}</p>
                <ul className="space-y-3">
                  {doc.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Application Timeline</h2>
            <p className="text-gray-600">Understanding the steps from document preparation to Visa approval.</p>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {['Document Preparation (1-2 Months)', 'School Application & Interview (2-3 Weeks)', 'COE Application to Immigration (2-3 Months)', 'COE Issuance & Tuition Payment (1-2 Weeks)', 'Visa Application at Embassy (1 Week)'].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <h4 className="font-bold text-lg text-gray-900">{step}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-xl text-blue-200 mb-10">Get in touch with our expert counselors for free, personalized guidance.</p>
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
