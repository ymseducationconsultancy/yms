'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Footer() {
  const pathname = usePathname();

  // Don't show footer on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-[#0097A7] border-t-[8px] border-[#E8192C] text-white mt-auto">
      <motion.div 
        className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-24 pt-16 pb-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="flex items-center">
              <Image 
                src="/images/yms-logo-transparent.png" 
                alt="YMS Education Logo" 
                width={155} 
                height={40} 
                className="object-contain" 
              />
            </div>
            <p className="font-nunito-sans text-white/90 text-sm leading-relaxed">
              Empowering Dreams, Enriching Futures. Honest counseling, language preparation, and comprehensive visa support for your journey to Japan.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8192C] transition-colors">
                <span className="material-symbols-outlined">thumb_up</span>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8192C] transition-colors">
                <span className="material-symbols-outlined">play_arrow</span>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h4 className="font-nunito font-bold text-lg border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-noto-sans text-sm">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors hover:underline">About Us</Link></li>
              <li><Link href="/study-in-japan" className="text-white/80 hover:text-white transition-colors hover:underline">Study in Japan</Link></li>
              <li><Link href="/language-class" className="text-white/80 hover:text-white transition-colors hover:underline">Language Classes</Link></li>
              <li><Link href="/partner-schools" className="text-white/80 hover:text-white transition-colors hover:underline">Partner Schools</Link></li>
              <li><Link href="/for-parents" className="text-white/80 hover:text-white transition-colors hover:underline">For Parents</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h4 className="font-nunito font-bold text-lg border-b border-white/20 pb-2">Resources</h4>
            <ul className="flex flex-col gap-3 font-noto-sans text-sm">
              <li><Link href="/coe-visa-support" className="text-white/80 hover:text-white transition-colors hover:underline">COE / Visa Support</Link></li>
              <li><Link href="/cost-and-requirements" className="text-white/80 hover:text-white transition-colors hover:underline">Cost & Requirements</Link></li>
              <li><Link href="/life-in-japan" className="text-white/80 hover:text-white transition-colors hover:underline">Life in Japan</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-white transition-colors hover:underline">FAQ</Link></li>
              <li><Link href="/testimonials" className="text-white/80 hover:text-white transition-colors hover:underline">Success Stories</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors hover:underline">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h4 className="font-nunito font-bold text-lg border-b border-white/20 pb-2">Contact Us</h4>
            <ul className="flex flex-col gap-4 font-noto-sans text-sm">
              <li className="flex items-start gap-3 text-white/90">
                <span className="material-symbols-outlined text-[#E8192C]">location_on</span>
                <span>New Baneshwor, Kanti Galli,<br/>Opposite to Pani Tanki, 44600</span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <span className="material-symbols-outlined text-[#E8192C]">call</span>
                <span>01-5921908 / 9767220276</span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <span className="material-symbols-outlined text-[#E8192C]">mail</span>
                <a href="mailto:educationyms@gmail.com" className="hover:text-white hover:underline">educationyms@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 flex justify-center items-center"
        >
          <p className="text-sm text-white/60 font-noto-sans text-center">
            &copy; {new Date().getFullYear()} YMS Education Consultancy Pvt. Ltd. All rights reserved.
          </p>
        </motion.div>
        
        {/* End Line */}
        <div className="mt-8 border-b border-white/20 w-full" />
      </motion.div>
    </footer>
  );
}
