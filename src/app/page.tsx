'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import TwoToneHeading from '@/components/TwoToneHeading';
import AnimatedCard from '@/components/AnimatedCard';
import Counter from '@/components/Counter';
import FAQSection from '@/components/FAQSection';
import WhyChooseYMS from '@/components/home/WhyChooseYMS';
import JapaneseClasses from '@/components/home/JapaneseClasses';

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
    quote: 'YMS Education helped me achieve my dream of studying in Japan. Their language classes are top-notch and the visa processing was so smooth.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&fit=crop'
  },
  {
    id: 2,
    name: 'Sita Thapa',
    program: 'Undergraduate',
    university: 'Tokyo University',
    quote: 'The counselors at YMS are very honest and supportive. They guided me through every step of the process and prepared me for embassy interviews.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop'
  },
  {
    id: 3,
    name: 'Sulav Shrestha',
    program: 'Vocational Program',
    university: 'Kawahara E-Business College',
    quote: 'I highly recommend YMS Education to anyone who wants to study in Japan. Their post-arrival support is exceptionally helpful for finding part-time jobs.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop'
  }
];

const FALLBACK_GALLERY_ITEMS = [
  {
    id: 1,
    title: "Language Program Certification",
    subtitle: "Students receiving course completion certificates",
    img: "/images/gallery/certification-1.jpg"
  },
  {
    id: 2,
    title: "JLPT Certificate Distribution",
    subtitle: "Celebrating student successes in the JLPT exam",
    img: "/images/gallery/certification-2.jpg"
  },
  {
    id: 3,
    title: "Interactive Study Sessions",
    subtitle: "A look inside our modern language classrooms",
    img: "/images/gallery/college-1.jpg"
  },
  {
    id: 4,
    title: "Orientation Seminars",
    subtitle: "Students participating in cultural exchange orientations",
    img: "/images/gallery/event-1.jpg"
  },
  {
    id: 5,
    title: "Annual Cultural Festivities",
    subtitle: "Celebrating traditional Japanese cultural events",
    img: "/images/gallery/event-2.jpg"
  },
  {
    id: 6,
    title: "Pre-departure Orientation Program",
    subtitle: "Preparing students for their upcoming academic journey",
    img: "/images/gallery/event-3.jpg"
  }
];

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);

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
    async function fetchGallery() {
      try {
        const res = await fetch('/api/gallery?published=1');
        if (res.ok) {
          const data = await res.json();
          setGalleryItems(data.gallery || []);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    }
    fetchTestimonials();
    fetchGallery();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* --- Section 1: Hero --- */}
      <section className="relative w-full pt-12 pb-12 md:pt-20 md:pb-16 px-5 md:px-[80px] overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image 
            alt="Students walking on campus" 
            className="w-full h-full object-cover object-top opacity-10" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBROzSXZeRSiuG6qtX9NsTXMQvnBsWup7j5-vhWH9Y0S4WUt3kfJuLVdTOgLUVK4oBsZu49y5ns0B-znIzRwUZzflbFqvj5f2xnNIOMqCxyqxLTTHDK4Hp1hFpxZ-AX4xnZEGNlkrStydH2skrVNO-6Zzcv3M_YmyEv7ad3hatrsHzKMZEeGfeDnU-Dxi7QqDwM40HU43ABZN64XnuACuqI4AqLdBT4PCsDYjGO5bb7Zk90uXN--Kr-Huk10f6vqe2A7rAQOir1_Ss"
            fill
            priority={true}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-left space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-[#E8192C]/10 px-4 py-2 rounded-full border border-[#E8192C]/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span className="material-symbols-outlined text-[#E8192C]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-[family-name:var(--font-dm-sans)] text-[14px] font-medium leading-[1.4] tracking-[0.05em] text-[#1B2A6B] uppercase">Nepal&apos;s Trusted Japan Education Partner</span>
            </motion.div>
            
            <motion.h1 
              className="font-[family-name:var(--font-playfair)] text-[36px] md:text-[48px] lg:text-[52px] leading-[1.2] md:leading-[1.1] font-bold tracking-[-0.02em] text-[#1B2A6B]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              Study in Japan with <span className="text-[#E8192C]">Trusted</span> Japanese Language & Visa Support from Nepal
            </motion.h1>
            
            <motion.p 
              className="font-[family-name:var(--font-dm-sans)] text-[16px] md:text-[18px] leading-[1.6] text-[#475569] max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              YMS Education provides Japanese language training, school selection, COE/visa documentation, interview preparation, and post-arrival guidance for students who want to build their future in Japan.
            </motion.p>
            
            <motion.p
              className="font-[family-name:var(--font-dm-sans)] text-[14px] md:text-[16px] leading-[1.6] text-[#1B2A6B] font-bold mt-4 border-l-4 border-[#E8192C] pl-4 bg-[#f0f4f8] py-2 pr-4 rounded-r-lg max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.1 }}
            >
              "Success in Japan requires patience, hard work, and consistency."<br/>
              <span className="text-[#0097A7] font-bold tracking-wide mt-1 block font-noto-sans">我慢すること、頑張ること、続けること。</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Link href="/contact" className="bg-[#E8192C] text-[#ffffff] px-[32px] py-[16px] rounded shadow-md hover:shadow-lg hover:bg-[#1B2A6B] transition-all duration-300 font-[family-name:var(--font-dm-sans)] text-[14px] font-medium leading-[1.4] tracking-[0.05em] text-center">
                Book Free Counseling
              </Link>
              <Link href="/about" className="bg-transparent border border-[#475569] text-[#475569] hover:bg-[#1B2A6B] hover:text-white hover:border-[#1B2A6B] px-[32px] py-[16px] rounded transition-all duration-300 font-[family-name:var(--font-dm-sans)] text-[14px] font-medium leading-[1.4] tracking-[0.05em] flex items-center justify-center gap-2">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </motion.div>
            

          </motion.div>
          
          <motion.div 
            className="flex-1 w-full relative animate-float"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full bg-gray-50">
              <Image 
                alt="Student studying" 
                className="object-cover" 
                src="/images/hero-image.png"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Fading borders (top, bottom, left, right) in YMS theme colors */}
              <div className="absolute top-0 inset-x-0 h-[10%] bg-gradient-to-b from-[#0097A7]/45 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 inset-x-0 h-[15%] bg-gradient-to-t from-[#E8192C]/45 to-transparent pointer-events-none z-10"></div>
              <div className="absolute left-0 inset-y-0 w-[10%] bg-gradient-to-r from-[#1B2A6B]/30 to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 inset-y-0 w-[10%] bg-gradient-to-l from-[#0097A7]/30 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Floating Glassmorphism Badge */}
            <div className="absolute -top-4 -right-4 backdrop-blur-md bg-white/80 border border-white/30 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5 animate-float pointer-events-none z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-[family-name:var(--font-dm-sans)] text-[12px] font-bold text-[#1B2A6B] tracking-[0.05em] uppercase">COE Success 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Stats & Partners Combined --- */}
      <motion.section 
        className="bg-white py-8 relative z-10 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
            {/* Left Column: Key Features List */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-[#475569] text-[13px] font-medium uppercase tracking-wider font-[family-name:var(--font-dm-sans)]">
                <span className="flex items-center gap-1.5 whitespace-nowrap"><span className="material-symbols-outlined text-[#0097A7] text-[18px]">check_circle</span> N5-N3 Japanese Classes</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap"><span className="material-symbols-outlined text-[#0097A7] text-[18px]">check_circle</span> COE & Visa Documentation</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap"><span className="material-symbols-outlined text-[#0097A7] text-[18px]">check_circle</span> School Selection Support</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap"><span className="material-symbols-outlined text-[#0097A7] text-[18px]">check_circle</span> Post-Arrival Guidance in Japan</span>
              </div>
            </div>

            {/* Right Column: Partners Marquee */}
            <div className="lg:col-span-2 relative w-full overflow-hidden flex flex-col pt-8 lg:pt-0 border-t lg:border-t-0 border-gray-100 lg:border-l lg:pl-12 lg:border-gray-200">
              <p className="text-[12px] font-bold text-[#1B2A6B] uppercase tracking-[0.15em] mb-6 font-[family-name:var(--font-dm-sans)] text-center lg:text-left">
                In Partnership With
              </p>
              
              <div className="relative flex overflow-hidden w-full group mask-image-fade">
                <div className="flex w-max animate-marquee space-x-12 px-6 items-center">
                  {/* First set of partners */}
                  <Image src="/images/partners/yamasa-logo.png" alt="YAMASA" width={110} height={55} className="object-contain mix-blend-multiply flex-shrink-0" />
                  <Image src="/images/partners/egao-logo.png" alt="EGAO" width={110} height={55} className="object-contain mix-blend-multiply flex-shrink-0" />
                  <Image src="/images/partners/nepal-manpower-logo.png" alt="NEPAL MANPOWER" width={110} height={55} className="object-contain flex-shrink-0" />
                  <Image src="/images/partners/remnant-logo.png" alt="REMNANT JAPANESE LANGUAGE SCHOOL" width={120} height={55} className="object-contain flex-shrink-0" />
                  <Image src="/images/partners/kawahara-logo.png" alt="KAWAHARA E-BUSINESS COLLEGE" width={125} height={55} className="object-contain flex-shrink-0" />
                  <Image src="/images/partners/aichi-logo.png" alt="AICHI INT'L ACADEMY" width={110} height={55} className="object-contain flex-shrink-0" />
                  
                  {/* Second set of partners for seamless loop */}
                  <Image src="/images/partners/yamasa-logo.png" alt="YAMASA" width={110} height={55} className="object-contain mix-blend-multiply flex-shrink-0" />
                  <Image src="/images/partners/egao-logo.png" alt="EGAO" width={110} height={55} className="object-contain mix-blend-multiply flex-shrink-0" />
                  <Image src="/images/partners/nepal-manpower-logo.png" alt="NEPAL MANPOWER" width={110} height={55} className="object-contain flex-shrink-0" />
                  <Image src="/images/partners/remnant-logo.png" alt="REMNANT JAPANESE LANGUAGE SCHOOL" width={120} height={55} className="object-contain flex-shrink-0" />
                  <Image src="/images/partners/kawahara-logo.png" alt="KAWAHARA E-BUSINESS COLLEGE" width={125} height={55} className="object-contain flex-shrink-0" />
                  <Image src="/images/partners/aichi-logo.png" alt="AICHI INT'L ACADEMY" width={110} height={55} className="object-contain flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- Section 2: CEO Message --- */}
      <SectionWrapper id="ceo-message" className="relative">
        {/* Decorative elements */}
        <div className="deco-circle w-64 h-64 -top-32 -left-32"></div>
        <div className="deco-dots -bottom-10 right-10"></div>
        
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative max-w-[400px] mx-auto w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/team/founder.jpeg"
                alt="Bikram Khadka - CEO"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Name Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#E8192C]">
              <h3 className="font-nunito font-black text-xl text-[#1B2A6B]">Bikram Khadka</h3>
              <p className="text-[#0097A7] font-semibold text-sm">Representative Director</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TwoToneHeading firstText="Message from" secondText="the CEO" className="text-4xl md:text-5xl mb-8" />
            
            <blockquote className="pl-6 border-l-4 border-[#E8192C] text-xl font-nunito italic text-[#334155] mb-6">
              "Our goal is not just to send students to Japan, but to ensure they succeed and build a solid foundation for their future."
            </blockquote>
            
            <p className="text-[#171c1f] leading-relaxed mb-8">
              At YMS Education Consultancy, we believe in honest and transparent counseling. We are dedicated to providing the right guidance, accurate information, and continuous support — from your very first consultation to achieving your career goals in Japan.
            </p>

            <Link
              href="/about#ceo-message"
              className="inline-flex items-center gap-2 font-bold text-[#1B2A6B] border-b-2 border-[#1B2A6B] hover:text-[#E8192C] hover:border-[#E8192C] transition-colors pb-1"
            >
              Read full message
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>


      <WhyChooseYMS />
      <JapaneseClasses />

      {/* --- Section 6: Expert Team --- */}
      <SectionWrapper id="team">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <TwoToneHeading firstText="Our" secondText="Expert Team" className="text-4xl md:text-5xl" />
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Bikram Khadka", title: "CEO", jp: "代表取締役/CEO", border: "border-t-[#E8192C]", img: "/images/team/founder.jpeg" },
            { name: "Dik Bahadur Budhathoki", title: "Director / Japan Coordinator", jp: "取締役/日本コーディネーター", border: "border-t-[#1B2A6B]", img: "/images/team/dal-bahadur-karki.jpeg" },
            { name: "Dal Bahadur Karki", title: "Director", jp: "取締役", border: "border-t-[#0097A7]", img: "/images/team/dal-bahadur.png" },
            { name: "Priya Bhattarai", title: "Documentation Officer", jp: "ドキュメンテーション", border: "border-t-[#E8192C]", img: "/images/team/priya-bhattarai-v2.jpeg" },
          ].map((member, index) => (
            <motion.div
              key={index}
              className={`bg-[#f0f4f8] rounded-2xl overflow-hidden shadow-md border-t-4 ${member.border}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 bg-[#d6dade] w-full relative">
                {member.img ? (
                  <Image src={member.img} alt={member.name} fill className="object-cover object-top" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined text-6xl">person</span>
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="font-black font-nunito text-lg text-[#1B2A6B] mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-gray-500 mb-1">{member.jp}</p>
                <p className="text-sm font-semibold text-[#0097A7]">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/about#team" className="inline-block px-10 py-4 border-2 border-[#1B2A6B] text-[#1B2A6B] rounded-full font-bold hover:bg-[#1B2A6B] hover:text-white transition-colors duration-300">
            SEE FULL TEAM
          </Link>
        </div>
      </SectionWrapper>


      {/* --- Section 9: Success Stories & Testimonials --- */}
      <SectionWrapper id="testimonials" bgColor="bg-[#f0f4f8]" className="relative z-10 py-24">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <TwoToneHeading firstText="Success Stories" secondText="& Testimonials" className="text-4xl md:text-5xl mb-4" />
          <p className="text-[#334155] max-w-2xl mx-auto text-lg font-nunito-sans">
            Hear from our students who successfully transformed their dreams of studying in Japan into reality.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {(testimonials.length > 0 ? testimonials.slice(0, 3) : FALLBACK_TESTIMONIALS).map((t, index) => (
            <AnimatedCard 
              key={t.id || index} 
              delay={index * 0.1} 
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col h-full border border-gray-100"
              borderColor={index % 3 === 0 ? "border-[#E8192C]" : index % 3 === 1 ? "border-[#1B2A6B]" : "border-[#0097A7]"}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating || 5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-400 text-sm fill">star</span>
                ))}
              </div>

              <blockquote className="text-base text-[#334155] font-nunito-sans leading-relaxed italic mb-8 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-gray-100">
                  {t.photo ? (
                    <Image 
                      src={t.photo} 
                      alt={t.name} 
                      fill 
                      className="object-cover" 
                    />
                  ) : (
                    <span className="material-symbols-outlined text-gray-400 absolute inset-0 flex items-center justify-center">person</span>
                  )}
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1B2A6B] font-nunito text-base leading-tight">{t.name}</h3>
                  <p className="text-xs text-[#0097A7] font-bold font-noto-sans uppercase tracking-wider mt-0.5">
                    {t.university || t.program}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/testimonials" className="inline-block px-8 py-3.5 bg-transparent border-2 border-[#1B2A6B] text-[#1B2A6B] font-bold rounded-full hover:bg-[#1B2A6B] hover:text-white transition-colors shadow-md">
            VIEW ALL SUCCESS STORIES
          </Link>
        </div>
      </SectionWrapper>


      {/* --- Section 10: Photo Gallery --- */}
      <SectionWrapper id="gallery" bgColor="bg-white" className="relative z-10 py-24">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <TwoToneHeading firstText="Photo" secondText="Gallery" className="text-4xl md:text-5xl mb-4" />
          <p className="text-[#334155] max-w-2xl mx-auto text-lg font-nunito-sans">
            A glimpse into the vibrant student life, classroom sessions, and cultural events at YMS and in Japan.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {(galleryItems.length > 0 ? galleryItems.slice(0, 6) : FALLBACK_GALLERY_ITEMS).map((item, index) => (
            <motion.div
              key={item.id || index}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B]/90 via-[#1B2A6B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white font-nunito font-black text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm font-medium font-nunito-sans mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {item.desc || item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/gallery" className="inline-block px-8 py-3.5 bg-transparent border-2 border-[#1B2A6B] text-[#1B2A6B] font-bold rounded-full hover:bg-[#1B2A6B] hover:text-white transition-colors shadow-md">
            VIEW FULL GALLERY
          </Link>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
