"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Banknote, Briefcase, Heart, Calendar, MessageCircle, Phone, CheckCircle2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ForParentsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-[#1E293B] text-white py-24 overflow-hidden rounded-b-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Information for Parents</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We understand that sending your child abroad is a big decision. Here is everything you need to know to ensure their success and safety in Japan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Safety */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Unmatched Safety</h3>
              <p className="text-slate-600 leading-relaxed">
                Japan consistently ranks as one of the top 10 safest countries globally. With extremely low crime rates, excellent public transport, and a culture of respect, your child can confidently navigate day-to-day life securely.
              </p>
            </motion.div>

            {/* Part Time rules */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Part-Time Work Rules</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                International students are legally permitted to work <strong>28 hours per week</strong> (up to 40 hours during long school holidays). This helps students cover living expenses and gain practical experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Strict adherence to 28-hr rule</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Cannot work in nightlife industry</li>
              </ul>
            </motion.div>

            {/* Financial Responsibility */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 md:col-span-2"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/3">
                   <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                    <Banknote className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Sponsor Responsibilities</h3>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    As a sponsor, your role is pivotal. The Japanese Immigration Bureau requires proof that parents can support their child's tuition and living costs, ensuring they don't overwork to survive.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-1">Financial Backing</h4>
                      <p className="text-sm text-slate-600">Provide bank balance and income proof.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-1">Tuition Support</h4>
                      <p className="text-sm text-slate-600">Assistance with initial year's fees.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Secure Your Child's Future</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10">Schedule a dedicated session with our experts to discuss your child's pathway to Japan.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg">
              <Calendar className="w-5 h-5" /> Book Parent Counseling
            </button>
            <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
              <Phone className="w-5 h-5" /> Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
