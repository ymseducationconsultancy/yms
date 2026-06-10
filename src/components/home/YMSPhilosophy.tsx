'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import TwoToneHeading from '../TwoToneHeading';

export default function YMSPhilosophy() {
  return (
    <SectionWrapper id="yms-philosophy" className="py-32 relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A6B] to-[#0F172A] z-0"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8192C]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0097A7]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto text-center relative z-10 px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 border border-white/20 text-white/80 text-xs font-bold rounded-full tracking-[0.2em] mb-8 uppercase backdrop-blur-sm">
            Our Core Philosophy
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black mb-10 text-white font-[family-name:var(--font-noto-sans-jp)] tracking-wider leading-tight">
            <span className="block text-[#E8192C] mb-4">我慢すること、</span>
            <span className="block text-[#0097A7] mb-4">頑張ること、</span>
            <span className="block text-white">続けること。</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8192C] via-[#0097A7] to-transparent mx-auto mb-10"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 font-nunito font-semibold max-w-3xl mx-auto leading-relaxed">
            "Success in Japan requires <span className="text-white border-b-2 border-[#E8192C]">patience</span>, <span className="text-white border-b-2 border-[#0097A7]">hard work</span>, and <span className="text-white border-b-2 border-white">consistency</span>."
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
