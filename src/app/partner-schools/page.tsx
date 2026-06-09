"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, School, Star, Calendar, MessageCircle, Phone, ArrowRight, ExternalLink } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const schools = [
  {
    name: "Tokyo International Language Academy",
    location: "Shinjuku, Tokyo",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop",
    features: ["JLPT N1/N2 Focus", "University Prep Course", "Dormitory Available"],
    status: "Premium Partner"
  },
  {
    name: "Osaka Japanese Language School",
    location: "Namba, Osaka",
    image: "https://images.unsplash.com/photo-1590559899731-a382839ceef2?q=80&w=1000&auto=format&fit=crop",
    features: ["Conversation Focus", "Cultural Activities", "Affordable Living"],
    status: "Direct Tie-up"
  },
  {
    name: "Fukuoka Global Education Center",
    location: "Hakata, Fukuoka",
    image: "https://images.unsplash.com/photo-1596700389332-69025078516c?q=80&w=1000&auto=format&fit=crop",
    features: ["Job Support", "IT & Business Japanese", "Low Cost of Living"],
    status: "Exclusive Partner"
  },
  {
    name: "Nagoya Institute of Languages",
    location: "Sakae, Nagoya",
    image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=1000&auto=format&fit=crop",
    features: ["Engineering Prep", "Part-time Job Assistance", "Modern Campus"],
    status: "Direct Tie-up"
  }
];

export default function PartnerSchoolsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Partner Schools</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              We represent top-tier Japanese language institutes across major cities in Japan to provide you with the best educational experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {schools.map((school, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={school.image} 
                    alt={school.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" /> {school.status}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-indigo-600 mb-3 font-semibold">
                    <MapPin className="w-5 h-5" /> {school.location}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{school.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {school.features.map((feature, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-md font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="text-indigo-600 font-bold flex items-center gap-2 hover:text-indigo-800 transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Find the Perfect School for You</h2>
          <p className="text-lg md:text-xl text-indigo-200 mb-10">Not sure which city or school fits your goals? Let our counselors guide you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg">
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
