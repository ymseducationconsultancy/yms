'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import TwoToneHeading from '@/components/TwoToneHeading';
import AnimatedCard from '@/components/AnimatedCard';

interface Testimonial {
  id: number;
  name: string;
  program: string;
  university: string;
  quote: string;
  rating: number;
  photo: string;
}

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ram Bahadur',
    program: 'Language Program',
    university: 'YAMASA Institute',
    quote: 'YMS Education helped me achieve my dream of studying in Japan. Their language classes and transparent visa processing were exceptional.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&fit=crop'
  },
  {
    id: 2,
    name: 'Sita Thapa',
    program: 'Undergraduate',
    university: 'Tokyo University',
    quote: 'The counselors are very honest and supportive. They guided me through every step and thoroughly prepared me for interviews.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop'
  },
  {
    id: 3,
    name: 'Sulav Shrestha',
    program: 'Vocational Program',
    university: 'Kawahara E-Business College',
    quote: 'I highly recommend YMS Education. Their guidance is rooted in reality, and their support is genuinely reliable.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop'
  }
];

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch('/api/testimonials?published=1');
        if (res.ok) {
          const data = await res.json();
          setTestimonials(data.testimonials || []);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    }
    fetchTestimonials();
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-dm-sans)] bg-[#f8fafc]">
      
      {/* --- Section 1: Hero Section --- */}
      <section className="relative w-full min-h-[90vh] pt-24 pb-16 md:pt-32 px-5 md:px-[80px] overflow-hidden bg-white flex items-center">
        {/* Subtle background abstract shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#f8fafc] to-transparent opacity-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#f8fafc] to-transparent opacity-50 rounded-full translate-y-1/4 -translate-x-1/4 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#ffdad7]/50 px-4 py-2 rounded-full border border-[#E8192C]/20 w-max">
              <span className="material-symbols-outlined text-[#E8192C] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="text-[12px] font-bold text-[#1B2A6B] uppercase tracking-wider">Nepal's Trusted Japan Education Partner</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-[64px] leading-[1.1] font-bold tracking-tight">
              <span className="text-[#1B2A6B] block mb-2">Empowering Dreams,</span>
              <span className="text-[#E8192C] block">Enriching Futures</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#475569] max-w-lg mt-6">
              Your dedicated partner in navigating the journey to study in Japan. We provide expert guidance, transparent processes, and unwavering support to turn your academic aspirations into reality.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="bg-[#E8192C] text-white px-8 py-3.5 rounded-lg shadow-md hover:bg-[#1B2A6B] hover:shadow-lg transition-all duration-300 font-bold text-[14px]">
                Book Free Counseling
              </Link>
              <Link href="/about" className="bg-white border border-gray-300 text-gray-600 hover:text-[#1B2A6B] hover:border-[#1B2A6B] px-8 py-3.5 rounded-lg shadow-sm transition-all duration-300 font-bold text-[14px] flex items-center gap-2">
                Learn More
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Content - Image Area */}
          <motion.div 
            className="relative w-full aspect-[4/3] lg:aspect-[5/4] mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
              {/* Abstract blue shape behind the image inside the container */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#1B2A6B] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
              <div className="absolute bottom-20 left-0 w-32 h-32 bg-[#E8192C] rounded-full -translate-x-1/2 opacity-80 z-0"></div>
              
              <Image 
                src="/images/hero-image.png"
                alt="Students in Japan" 
                fill
                className="object-cover object-top z-10 relative"
                priority
              />
              
              {/* Bottom Red Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#E8192C]/90 to-transparent z-20"></div>
            </div>
            
            {/* Floating COE Success Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-5 right-8 bg-white px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2.5 z-30"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="text-[11px] font-black text-[#1B2A6B] tracking-widest uppercase">COE Success 2026</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Quick Trust Bar --- */}
      <section className="bg-[#1B2A6B] py-8 relative z-20 shadow-xl">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'balance', text: 'Honest Counseling' },
              { icon: 'money_off', text: 'Transparent Fees' },
              { icon: 'task', text: 'Dedicated Visa Support' },
              { icon: 'school', text: 'Experienced Teachers' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center gap-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="material-symbols-outlined text-3xl text-[#0097A7]">{item.icon}</span>
                <span className="font-bold text-sm md:text-base tracking-wide">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Why Choose YMS --- */}
      <SectionWrapper id="why-choose-yms" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <TwoToneHeading firstText="Why Choose" secondText="YMS Education?" className="text-4xl md:text-5xl" />
          <p className="text-[#475569] max-w-2xl mx-auto mt-6 text-lg">
            We prioritize your future over everything else. No false promises—just realistic guidance and dedicated support.
          </p>
        </div>
        
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Ethical & Honest Approach",
              desc: "We provide realistic assessments and clear facts. We do not make unverified claims or false promises regarding placements or visa guarantees.",
              icon: "health_and_safety"
            },
            {
              title: "End-to-End Transparency",
              desc: "From the first counseling session to tuition fee breakdowns and application processes, you are fully informed at every step.",
              icon: "visibility"
            },
            {
              title: "Quality Language Education",
              desc: "Master Japanese with structured classes, mock tests, and native-level instruction tailored for your success in Japan.",
              icon: "language"
            }
          ].map((feature, idx) => (
            <AnimatedCard key={idx} delay={idx * 0.1} className="p-8 bg-[#f8fafc] border border-gray-100 hover:border-[#E8192C] transition-colors rounded-3xl group">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-[#1B2A6B] group-hover:text-[#E8192C] group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1B2A6B] mb-4">{feature.title}</h3>
              <p className="text-[#475569] leading-relaxed">{feature.desc}</p>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-[#f0f4f8] p-8 rounded-3xl border-l-4 border-[#1B2A6B]">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-[#1B2A6B] mb-2">Message from the CEO</h4>
              <blockquote className="italic text-[#475569] text-lg">
                "Our goal is not just to send students to Japan, but to ensure they succeed and build a solid foundation for their future. We believe in providing the right guidance based on reality."
              </blockquote>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* --- Section 4: Complete Japan Study Process (8 steps) --- */}
      <SectionWrapper id="study-process" className="bg-[#f8fafc] py-24">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <TwoToneHeading firstText="Complete Japan" secondText="Study Process" className="text-4xl md:text-5xl" />
          <p className="text-[#475569] mt-6 text-lg">Your step-by-step roadmap to studying in Japan.</p>
        </div>
        
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Initial Counseling", desc: "Understanding your academic background and goals." },
              { step: "02", title: "Program Selection", desc: "Choosing the right school and region in Japan." },
              { step: "03", title: "Language Prep", desc: "Enrolling in our Japanese classes (N5-N3)." },
              { step: "04", title: "Interview Prep", desc: "Mock sessions for school and embassy interviews." },
              { step: "05", title: "Documentation", desc: "Thorough compilation and translation of documents." },
              { step: "06", title: "COE Application", desc: "Applying for the Certificate of Eligibility." },
              { step: "07", title: "Visa Processing", desc: "Final embassy procedures and visa stamping." },
              { step: "08", title: "Pre-Departure", desc: "Orientation and support before you fly." }
            ].map((s, idx) => (
               <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="absolute -right-4 -top-4 text-[80px] font-black text-gray-50 opacity-50 group-hover:text-[#E8192C]/5 transition-colors duration-500 font-[family-name:var(--font-playfair)]">
                  {s.step}
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-[#1B2A6B] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Step {s.step}</span>
                  <h3 className="text-lg font-bold text-[#1B2A6B] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#475569]">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* --- Section 5: Japanese Language Classes --- */}
      <SectionWrapper id="language-classes" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/images/gallery/college-1.jpg" alt="Japanese Language Class" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B]/80 to-transparent flex flex-col justify-end p-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <h3 className="text-white text-xl font-bold mb-2">Expert Instructors</h3>
                <p className="text-gray-200 text-sm">Interactive, modern classrooms with a focus on real-world communication.</p>
              </div>
            </div>
          </motion.div>
          
          <div>
            <TwoToneHeading firstText="Japanese" secondText="Language Classes" className="text-4xl md:text-5xl mb-6" />
            <p className="text-[#475569] text-lg mb-8">
              A strong foundation in Japanese is crucial for your academic and professional success. We offer comprehensive courses tailored for standardized tests and daily communication.
            </p>
            
            <div className="space-y-6">
              {[
                { level: "JLPT N5 / NAT 5Q", desc: "Beginner level focusing on basic conversation, hiragana, katakana, and foundational kanji." },
                { level: "JLPT N4 / NAT 4Q", desc: "Pre-intermediate level for understanding basic daily situations and essential grammar." },
                { level: "JLPT N3 / NAT 3Q", desc: "Intermediate level enabling reading and understanding of everyday Japanese materials." }
              ].map((course, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 bg-[#ffdad7] rounded-full flex items-center justify-center text-[#E8192C] flex-shrink-0 font-bold">
                    {course.level.split(' ')[1]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1B2A6B]">{course.level}</h4>
                    <p className="text-[#475569] text-sm mt-1">{course.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/language-class" className="inline-block mt-8 bg-[#1B2A6B] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#E8192C] transition-colors">
              VIEW CLASS SCHEDULE
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* --- Section 6: Study in Japan Programs --- */}
      <SectionWrapper id="programs" className="bg-[#1B2A6B] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0097A7]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E8192C]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-[1280px] mx-auto text-center relative z-10 mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">Study in Japan <span className="text-[#0097A7]">Programs</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Whether you are starting with language basics or aiming for a university degree, we connect you to the right institution.
          </p>
        </div>
        
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Language School Programs",
              desc: "Immerse yourself in Japan to master the language. Perfect for students planning to enter university or vocational college later.",
              icon: "forum"
            },
            {
              title: "Vocational College (Senmon Gakko)",
              desc: "Acquire specialized, practical skills in IT, hospitality, business, and more, preparing you directly for employment.",
              icon: "build"
            },
            {
              title: "University / Undergraduate",
              desc: "Pursue higher education at reputable Japanese universities with diverse faculties and global recognition.",
              icon: "account_balance"
            }
          ].map((prog, idx) => (
            <AnimatedCard key={idx} delay={idx * 0.1} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all text-center">
              <span className="material-symbols-outlined text-5xl text-[#0097A7] mb-6">{prog.icon}</span>
              <h3 className="text-xl font-bold text-white mb-4">{prog.title}</h3>
              <p className="text-gray-300">{prog.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* --- Section 7: Cost & Requirements --- */}
      <SectionWrapper id="requirements" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto">
          <TwoToneHeading firstText="Cost &" secondText="Requirements" className="text-4xl md:text-5xl text-center mb-16" />
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-[#f8fafc] p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1B2A6B] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#E8192C]">fact_check</span>
                General Requirements
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span className="text-[#475569]"><strong>Academic Record:</strong> Completion of 12 years of education (10+2 or equivalent) with respectable grades.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span className="text-[#475569]"><strong>Language Proficiency:</strong> JLPT N5, NAT 5Q, or equivalent basic Japanese knowledge.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span className="text-[#475569]"><strong>Financial Sponsorship:</strong> Valid proof of financial support from sponsors (usually parents) to cover tuition and living expenses.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span className="text-[#475569]"><strong>Study Gap:</strong> Acceptable study gaps vary, but must be justified with proper work experience or language study documents.</span>
                </li>
              </ul>
            </div>
            
            {/* Cost Overview */}
            <div className="bg-[#f8fafc] p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1B2A6B] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#E8192C]">payments</span>
                Transparent Costing
              </h3>
              <p className="text-[#475569] mb-6">
                We believe in 100% financial transparency. We do not charge hidden consultancy fees.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <h4 className="font-bold text-[#1B2A6B]">School Tuition Fees</h4>
                  <p className="text-sm text-[#475569] mt-1">Varies strictly based on the school and region. You pay exactly what the school invoices directly to their account.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <h4 className="font-bold text-[#1B2A6B]">Processing Fees</h4>
                  <p className="text-sm text-[#475569] mt-1">Standard documentation and translation fees apply. We provide a full receipt for every service.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <h4 className="font-bold text-[#1B2A6B]">Living Expenses</h4>
                  <p className="text-sm text-[#475569] mt-1">We provide realistic estimates for accommodation and daily living costs so you are fully prepared.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* --- Section 8: COE & Visa Documentation Support --- */}
      <SectionWrapper id="documentation" className="bg-[#f0f4f8] py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <TwoToneHeading firstText="COE & Visa" secondText="Documentation" className="text-4xl md:text-5xl mb-6" />
            <p className="text-[#475569] text-lg mb-8">
              Japanese immigration is rigorous. A single mistake in paperwork can lead to refusal. Our expert documentation officers meticulously review, translate, and organize your files.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Academic Translation", desc: "Precise translation of Nepali academic documents to Japanese." },
                { title: "Financial Auditing", desc: "Guidance on presenting clean, verifiable financial statements." },
                { title: "Statement of Purpose", desc: "Assistance in writing a compelling and truthful study motive." },
                { title: "Pre-Screening", desc: "Multiple review checks before final submission to immigration." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#1B2A6B]">
                  <h4 className="font-bold text-[#1B2A6B] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#475569]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2A6B] to-[#0097A7] rounded-full opacity-10 animate-pulse"></div>
              <Image src="/images/gallery/certification-1.jpg" alt="Documentation Support" fill className="object-cover rounded-[3rem] shadow-2xl p-2 bg-white" />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* --- Section 9: Partner Schools / Japan Network --- */}
      <SectionWrapper id="partners" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <TwoToneHeading firstText="Our Japan Network" secondText="& Partner Schools" className="text-4xl md:text-5xl" />
          <p className="text-[#475569] mt-6 text-lg max-w-2xl mx-auto">
            We partner directly with highly reputed educational institutions across Japan, ensuring quality education and robust student support systems.
          </p>
        </div>
        
        <div className="max-w-[1280px] mx-auto overflow-hidden relative">
          {/* Fading edges for marquee */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex w-max animate-marquee space-x-12 px-6 items-center py-8">
            {/* Set 1 */}
            <Image src="/images/partners/yamasa-logo.png" alt="YAMASA" width={140} height={70} className="object-contain mix-blend-multiply flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/egao-logo.png" alt="EGAO" width={140} height={70} className="object-contain mix-blend-multiply flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/nepal-manpower-logo.png" alt="NEPAL MANPOWER" width={140} height={70} className="object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/remnant-logo.png" alt="REMNANT" width={150} height={70} className="object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/kawahara-logo.png" alt="KAWAHARA" width={155} height={70} className="object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/aichi-logo.png" alt="AICHI" width={140} height={70} className="object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            
            {/* Set 2 (Duplicate for seamless scroll) */}
            <Image src="/images/partners/yamasa-logo.png" alt="YAMASA" width={140} height={70} className="object-contain mix-blend-multiply flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/egao-logo.png" alt="EGAO" width={140} height={70} className="object-contain mix-blend-multiply flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/nepal-manpower-logo.png" alt="NEPAL MANPOWER" width={140} height={70} className="object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/remnant-logo.png" alt="REMNANT" width={150} height={70} className="object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/kawahara-logo.png" alt="KAWAHARA" width={155} height={70} className="object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/partners/aichi-logo.png" alt="AICHI" width={140} height={70} className="object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </SectionWrapper>

      {/* --- Section 10: For Parents --- */}
      <SectionWrapper id="for-parents" className="bg-[#1B2A6B] py-24 text-white relative">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#0097A7] font-bold tracking-widest text-sm uppercase mb-4">A Note to Guardians</h2>
            <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">Peace of Mind <span className="text-[#E8192C]">for Parents</span></h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Sending your child abroad is a significant decision. We assure you that our responsibility does not end when they board the flight. Through our network in Japan, we provide continuous guidance regarding their academics, well-being, and career.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-[#0097A7]">security</span>
                <span className="font-semibold">Safe and Verified Institutions</span>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-[#0097A7]">support_agent</span>
                <span className="font-semibold">Post-Arrival Coordination in Japan</span>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-[#0097A7]">update</span>
                <span className="font-semibold">Transparent Communication & Updates</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/images/gallery/event-3.jpg" alt="Parents Orientation" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* --- Section 11: Success Stories --- */}
      <SectionWrapper id="success-stories" className="bg-[#f8fafc] py-24">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <TwoToneHeading firstText="Student" secondText="Success Stories" className="text-4xl md:text-5xl" />
          <p className="text-[#475569] mt-6 text-lg">Real experiences from students who trusted YMS Education.</p>
        </div>
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {(testimonials.length > 0 ? testimonials.slice(0, 3) : FALLBACK_TESTIMONIALS).map((t, index) => (
            <AnimatedCard 
              key={t.id || index} 
              delay={index * 0.1} 
              className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating || 5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                ))}
              </div>

              <blockquote className="text-[#475569] leading-relaxed italic mb-8 flex-grow text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  {t.photo ? (
                    <Image src={t.photo} alt={t.name} fill className="object-cover" />
                  ) : (
                    <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-gray-400">person</span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#1B2A6B]">{t.name}</h3>
                  <p className="text-xs text-[#E8192C] font-bold uppercase tracking-wider mt-1">
                    {t.university || t.program}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* --- Section 12: FAQ + Contact CTA --- */}
      <SectionWrapper id="faq-contact" className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto">
          <TwoToneHeading firstText="Frequently Asked" secondText="Questions" className="text-4xl md:text-5xl text-center mb-16" />
          
          <div className="max-w-3xl mx-auto space-y-4 mb-20">
            {[
              { q: "Do you guarantee a 100% visa success rate?", a: "No honest consultancy can guarantee a 100% visa success rate, as the final decision rests solely with Japanese Immigration. However, our meticulous documentation and preparation significantly increase your chances of approval." },
              { q: "How much does it cost to study in Japan?", a: "Costs vary depending on the school and region. On average, the initial payment (including 6-12 months of tuition, admission fee, and dormitory) ranges between specific amounts that we will outline clearly during counseling. We charge zero hidden fees." },
              { q: "Do I need to know Japanese before applying?", a: "Yes, you generally need a basic understanding of Japanese (JLPT N5 or NAT 5Q equivalent) to apply for a student visa. We provide these classes at our center." },
              { q: "Can I work part-time while studying?", a: "Yes, international students are permitted to work up to 28 hours per week with special permission, and up to 40 hours during long school holidays." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 bg-[#f8fafc] hover:bg-gray-50 flex justify-between items-center transition-colors"
                >
                  <span className="font-bold text-[#1B2A6B] text-lg">{faq.q}</span>
                  <span className="material-symbols-outlined text-[#0097A7] transform transition-transform duration-300" style={{ transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0)' }}>
                    expand_more
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 py-0 bg-white text-[#475569] leading-relaxed overflow-hidden"
                    >
                      <div className="py-5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {/* Final CTA */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1B2A6B] to-[#0F172A] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8192C] rounded-full blur-[100px] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                Get honest advice, transparent processing, and dedicated support for your study in Japan. Schedule your free counseling session today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#E8192C] hover:bg-white hover:text-[#E8192C] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg text-lg flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">event_available</span>
                  Book Free Appointment
                </Link>
                <a href="tel:+9770144600" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 text-lg flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">call</span>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}
