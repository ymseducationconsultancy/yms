'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import TwoToneHeading from '../TwoToneHeading';
import AnimatedCard from '../AnimatedCard';

export default function WhyChooseYMS() {
  const reasons = [
    {
      title: "Japan-Focused Counseling",
      desc: "Specialized, honest advice tailored exclusively for studying and building a career in Japan.",
      icon: "explore",
      color: "text-[#E8192C]",
      bg: "bg-[#ffdad7]",
      border: "border-t-[#E8192C]"
    },
    {
      title: "Practical Japanese Training",
      desc: "Intensive language classes by native and expert teachers focusing on real-world communication.",
      icon: "record_voice_over",
      color: "text-[#1B2A6B]",
      bg: "bg-[#a7b5fe]/30",
      border: "border-t-[#1B2A6B]"
    },
    {
      title: "Transparent Document Checking",
      desc: "Flawless paperwork handling with complete transparency to ensure high visa success rates.",
      icon: "fact_check",
      color: "text-[#0097A7]",
      bg: "bg-[#97f0ff]/50",
      border: "border-t-[#0097A7]"
    },
    {
      title: "Parent-Friendly Guidance",
      desc: "Clear explanations of costs, rules, and safety to give parents complete peace of mind.",
      icon: "family_restroom",
      color: "text-[#E8192C]",
      bg: "bg-[#ffdad7]",
      border: "border-t-[#E8192C]"
    },
    {
      title: "Support After Arrival",
      desc: "Our Japan-based coordinators help you settle in, find housing, and secure part-time jobs.",
      icon: "flight_land",
      color: "text-[#1B2A6B]",
      bg: "bg-[#a7b5fe]/30",
      border: "border-t-[#1B2A6B]"
    },
    {
      title: "High Visa Success Rate",
      desc: "A proven track record of securing high visa approval rates through meticulous preparation.",
      icon: "verified",
      color: "text-[#0097A7]",
      bg: "bg-[#97f0ff]/50",
      border: "border-t-[#0097A7]"
    }
  ];

  return (
    <SectionWrapper id="why-choose-yms" bgColor="bg-[#f8fafc]" className="py-24 relative z-10">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <TwoToneHeading firstText="Why Choose" secondText="YMS Education" className="text-4xl md:text-5xl" />
        <p className="text-[#334155] max-w-2xl mx-auto mt-4 text-lg">
          We are dedicated to providing the most reliable pathway from Nepal to Japan.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {reasons.map((reason, index) => (
          <AnimatedCard 
            key={index} 
            delay={index * 0.1} 
            className={`p-8 text-center flex flex-col items-center shadow-lg bg-white border-t-4 ${reason.border} hover:-translate-y-2 transition-transform duration-300`}
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${reason.bg} ${reason.color}`}>
              <span className="material-symbols-outlined text-4xl">{reason.icon}</span>
            </div>
            <h3 className="text-xl font-bold font-nunito text-[#1B2A6B] mb-4">{reason.title}</h3>
            <p className="text-[#334155] leading-relaxed">{reason.desc}</p>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
