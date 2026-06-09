"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wallet, Receipt, Landmark, CreditCard, Calendar, MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const costs = [
  {
    icon: <Receipt className="w-8 h-8 text-emerald-600" />,
    title: "Initial Application Fees",
    amount: "20,000 - 30,000 JPY",
    description: "Non-refundable screening fee paid during initial documentation submission to the school."
  },
  {
    icon: <Landmark className="w-8 h-8 text-emerald-600" />,
    title: "First Year Tuition",
    amount: "700,000 - 900,000 JPY",
    description: "Usually paid after the COE is approved. Many schools allow 6-month installment plans."
  },
  {
    icon: <Wallet className="w-8 h-8 text-emerald-600" />,
    title: "Living Expenses (Monthly)",
    amount: "80,000 - 120,000 JPY",
    description: "Covers rent, food, utilities, and transport. Varies by city (Tokyo is more expensive)."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-emerald-600" />,
    title: "Airfare & Initial Setup",
    amount: "150,000 - 200,000 JPY",
    description: "Flight tickets, initial purchases, SIM card, and emergency cash upon arrival."
  }
];

export default function CostRequirementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Cost & Financial Requirements</h1>
            <p className="text-xl text-emerald-100">
              Transparent breakdown of educational costs and financial documentation required for your Japanese study visa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costs.map((cost, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-emerald-500 relative overflow-hidden text-center"
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {cost.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cost.title}</h3>
                <div className="text-emerald-600 font-extrabold text-lg mb-4">{cost.amount}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{cost.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank/Sponsor Guidance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop" 
                alt="Financial Planning" 
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Bank & Sponsor Guidance</h2>
              <p className="text-gray-600 text-lg mb-8">
                Immigration requires proof that you can sustain yourself in Japan without relying solely on part-time work. Proper documentation is critical.
              </p>
              <ul className="space-y-6">
                {[
                  "Sponsor must be a blood relative (preferably parents).",
                  "Bank statement must show a balance equivalent to 1.5 - 2 Million JPY.",
                  "Annual income of the sponsor should ideally be above 1.5 Million JPY equivalent.",
                  "Clear transaction history showing source of funds is mandatory."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ShieldCheck className="w-6 h-6 text-emerald-500 mr-4 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Help with Financial Documents?</h2>
          <p className="text-lg md:text-xl text-emerald-100 mb-10">Our experts can review your financial documents and guide you to meet immigration standards.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg">
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
