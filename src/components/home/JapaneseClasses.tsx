'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionWrapper from '../SectionWrapper';
import TwoToneHeading from '../TwoToneHeading';

export default function JapaneseClasses() {
  const classes = [
    { title: "N5 Foundation", desc: "Start from scratch. Master hiragana, katakana, and basic daily conversations.", level: "Beginner" },
    { title: "N4 Preparation", desc: "Build on N5. Expand vocabulary and grammar for more complex communication.", level: "Pre-Intermediate" },
    { title: "N3 Preparation", desc: "Advanced grammar and reading comprehension for academic settings in Japan.", level: "Intermediate" },
    { title: "JLPT / NAT / J.TEST", desc: "Intensive mock tests and targeted practice to pass essential language exams.", level: "Exam Prep" },
    { title: "School Interview", desc: "Specialized coaching to answer university and language school interview questions.", level: "Specialized" },
    { title: "Conversation Practice", desc: "Role-playing scenarios for part-time jobs, shopping, and navigating life in Japan.", level: "Practical" }
  ];

  return (
    <SectionWrapper id="japanese-classes" bgColor="bg-[#f0f4f8]" className="py-24 relative z-10 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <TwoToneHeading firstText="Comprehensive" secondText="Japanese Classes" className="text-4xl md:text-5xl" />
        <p className="text-[#334155] max-w-2xl mx-auto mt-4 text-lg">
          Taught by expert instructors, our classes are designed to ensure your success in Japan.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {classes.slice(0, 3).map((cls, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute top-0 right-0 bg-[#E8192C] text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
              {cls.level}
            </div>
            
            {/* Decorative background circle */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gray-50 rounded-full group-hover:bg-[#1B2A6B]/5 transition-colors z-0"></div>
            
            <h3 className="text-xl font-bold font-nunito text-[#1B2A6B] mb-3 relative z-10 group-hover:text-[#E8192C] transition-colors">{cls.title}</h3>
            <p className="text-[#475569] leading-relaxed relative z-10">{cls.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/services" className="inline-block px-10 py-4 bg-white border-2 border-[#1B2A6B] text-[#1B2A6B] rounded-full font-bold shadow-sm hover:bg-[#1B2A6B] hover:text-white transition-colors">
          SEE ALL
        </Link>
      </div>
    </SectionWrapper>
  );
}
