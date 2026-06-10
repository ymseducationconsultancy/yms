'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import TwoToneHeading from '../TwoToneHeading';

export default function DocumentationSupport() {
  const docs = [
    { title: "Academic Certificates", icon: "school" },
    { title: "Sponsor Documents", icon: "support" },
    { title: "Bank Statements", icon: "account_balance" },
    { title: "Income Source", icon: "payments" },
    { title: "Asset Formation", icon: "real_estate_agent" },
    { title: "Gap Explanation", icon: "history_edu" },
    { title: "Refused Case Support", icon: "rule" }
  ];

  return (
    <SectionWrapper id="documentation-support" bgColor="bg-white" className="py-24 relative z-10 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <TwoToneHeading firstText="Flawless" secondText="Documentation Support" className="text-4xl md:text-5xl" />
        <p className="text-[#334155] max-w-2xl mx-auto mt-4 text-lg">
          We meticulously review and prepare every single document required for your Certificate of Eligibility (COE) and Visa.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {docs.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 text-center hover:bg-[#1B2A6B] hover:text-white transition-colors duration-300 group shadow-sm flex flex-col items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="material-symbols-outlined text-3xl text-[#0097A7] group-hover:text-white transition-colors">
              {item.icon}
            </span>
            <h3 className="font-bold font-nunito text-[15px] leading-snug">{item.title}</h3>
          </motion.div>
        ))}
        
        {/* Fill the empty slot with a call to action or logo */}
        <motion.div
          className="bg-gradient-to-br from-[#E8192C] to-[#b91020] rounded-xl p-6 text-center text-white shadow-lg flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 7 * 0.05 }}
        >
          <span className="material-symbols-outlined text-3xl text-white">verified</span>
          <h3 className="font-bold font-nunito text-[15px] leading-snug">100% Transparency</h3>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
