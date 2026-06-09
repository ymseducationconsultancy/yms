"use client";
import React from "react";
import { motion } from "framer-motion";
import { Map, Building, Landmark, Smartphone, HeartPulse, Calendar, MessageCircle, Phone, CheckCircle2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const steps = [
  {
    icon: <Map className="w-8 h-8 text-rose-500" />,
    title: "1. Arrival & Residence Card",
    description: "Upon arriving at the airport (Narita, Haneda, Kansai, etc.), immigration will issue your Residence Card (Zairyu Card). This is your official ID in Japan."
  },
  {
    icon: <Building className="w-8 h-8 text-rose-500" />,
    title: "2. City Office Registration",
    description: "Within 14 days of finding a place to live, you must register your address at the local city/ward office (Kuyakusho/Shiyakusho)."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
    title: "3. National Health Insurance",
    description: "While at the city office, enroll in the National Health Insurance (NHI). It covers 70% of medical bills, making healthcare highly affordable."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-rose-500" />,
    title: "4. Getting a Phone SIM",
    description: "With your registered Residence Card, you can get a Japanese phone number. Essential for opening a bank account and finding part-time jobs."
  },
  {
    icon: <Landmark className="w-8 h-8 text-rose-500" />,
    title: "5. Opening a Bank Account",
    description: "Japan Post Bank (Yucho) is the most foreigner-friendly bank for new students. Required for paying bills and receiving part-time job salaries."
  }
];

export default function LifeInJapanPage() {
  return (
    <div className="min-h-screen bg-rose-50/30">
      {/* Hero Section */}
      <section className="relative bg-rose-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Life in Japan</h1>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto">
              A step-by-step guide to settling down in Japan. From touching down at the airport to starting your everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-rose-100 flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to know more?</h2>
          <p className="text-lg md:text-xl text-rose-200 mb-10">We provide complete post-arrival support to all our students.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-rose-900 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition-colors shadow-lg">
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
