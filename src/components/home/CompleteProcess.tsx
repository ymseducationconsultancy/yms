'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';
import TwoToneHeading from '../TwoToneHeading';

export default function CompleteProcess() {
  const steps = [
    { step: 1, title: 'Free Counseling', desc: 'Discuss your goals.' },
    { step: 2, title: 'Profile Screening', desc: 'Evaluate profile & documents.' },
    { step: 3, title: 'Language Class', desc: 'Begin Japanese study.' },
    { step: 4, title: 'School Selection', desc: 'Choose the right institution.' },
    { step: 5, title: 'Document Prep', desc: 'Prepare all necessary paperwork.' },
    { step: 6, title: 'COE / Visa', desc: 'Application and visa processing.' },
    { step: 7, title: 'Pre-Departure', desc: 'Final briefings.' },
    { step: 8, title: 'Arrival Support', desc: 'Welcome to Japan!' }
  ];

  return (
    <SectionWrapper id="complete-process" bgColor="bg-white" className="relative z-10 py-24 border-t border-gray-100">
      <div className="text-center mb-16 max-w-[1280px] mx-auto px-5">
        <TwoToneHeading firstText="The Complete" secondText="Process" className="text-4xl md:text-5xl" />
        <p className="text-[#334155] max-w-2xl mx-auto mt-4 text-lg">
          Your step-by-step journey from Nepal to studying in Japan.
        </p>
      </div>
      
      <div className="max-w-[1000px] mx-auto relative py-10 px-5 md:px-0">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
        <div className="absolute left-[39px] top-0 bottom-0 w-1 bg-gray-200 md:hidden"></div>
        
        {steps.map((item, index) => (
          <motion.div 
            key={index}
            className={`relative flex items-center w-full mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            <div className="hidden md:block w-5/12"></div>
            
            <div className="z-20 flex-shrink-0 relative">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E8192C] shadow-[0_0_15px_rgba(232,25,44,0.3)] border-4 border-white flex items-center justify-center text-white font-bold text-lg md:text-xl absolute md:static left-4 -translate-y-1/2 top-1/2 md:translate-y-0">
                {item.step}
              </div>
            </div>
            
            <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold font-nunito text-[#1B2A6B]">{item.title}</h3>
                <p className="text-sm text-[#475569] mt-2">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
