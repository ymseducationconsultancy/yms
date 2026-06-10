'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import TwoToneHeading from '../TwoToneHeading';
import AnimatedCard from '../AnimatedCard';

export default function ParentAssurance() {
  const points = [
    { title: "Transparent Cost Guidance", desc: "Clear breakdown of tuition fees, living expenses, and hidden costs so you can plan finances accurately without surprises.", icon: "account_balance_wallet" },
    { title: "Sponsor Responsibility", desc: "Detailed explanation of what it means to be a financial sponsor and how to prepare the necessary income and tax documents.", icon: "supervisor_account" },
    { title: "Safety & Dormitory", desc: "Assistance with securing safe, affordable, and supervised student dormitories near the school.", icon: "security" },
    { title: "Japan Rules & Regulations", desc: "Briefing on Japanese laws, part-time work limits (28 hrs/week), and cultural norms to keep students out of trouble.", icon: "gavel" },
    { title: "Direct Communication", desc: "We maintain open lines of communication with parents even after the student reaches Japan.", icon: "support_agent" }
  ];

  return (
    <SectionWrapper id="parent-assurance" bgColor="bg-[#f0f4f8]" className="py-24 relative z-10 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <TwoToneHeading firstText="Assurance" secondText="For Parents" className="text-4xl md:text-5xl" />
        <p className="text-[#334155] max-w-2xl mx-auto mt-4 text-lg">
          Sending your child abroad is a big step. We provide the transparency and safety guidelines you need for peace of mind.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {points.map((point, index) => (
          <AnimatedCard 
            key={index} 
            delay={index * 0.1} 
            className="p-8 bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-[#E8192C]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#ffdad7] text-[#E8192C] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined">{point.icon}</span>
              </div>
              <h3 className="text-[18px] font-bold font-nunito text-[#1B2A6B] leading-tight">{point.title}</h3>
            </div>
            <p className="text-[#475569] text-[15px] leading-relaxed">{point.desc}</p>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
