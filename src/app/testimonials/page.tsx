'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Testimonial {
  id: number;
  name: string;
  program: string;
  university: string;
  quote: string;
  rating: number;
  photo: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials?published=1');
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data.testimonials || []);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const featured = testimonials.length > 0 ? testimonials[0] : null;
  const others = testimonials.length > 1 ? testimonials.slice(1) : [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Combined Hero & Stats Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-16 z-10 w-full overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="relative z-10 text-left">
            <motion.div 
              className="inline-block mb-4 px-6 py-2 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-noto-sans text-sm text-[#E8192C] font-bold tracking-widest uppercase">Inspiration Gallery</span>
            </motion.div>
            
            <motion.h1 
              className="font-nunito text-[48px] md:text-[56px] leading-[1.1] mb-6 font-black tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-[#E8192C] relative inline-block">Student
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E8192C]/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4"></path>
                </svg>
              </span>
              <span className="text-[#1B2A6B] ml-3 block sm:inline">Success Stories</span>
            </motion.h1>
            
            <motion.p 
              className="font-nunito-sans text-lg text-[#334155] leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Real experiences from students who have realized their dreams of studying in Japan through YMS Education. Your journey to the Land of the Rising Sun starts with these authentic narratives.
            </motion.p>
          </div>

          {/* Right Column: Stats Block */}
          <motion.div 
            className="relative rounded-[3rem] overflow-hidden p-10 md:p-14 shadow-premium"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 stats-gradient opacity-95"></div>
            <div className="absolute inset-0 dot-pattern opacity-20"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-12 md:gap-16 text-white text-center">
              <div className="flex flex-col items-center group">
                <span className="font-nunito text-5xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">500+</span>
                <span className="font-noto-sans text-sm uppercase tracking-[0.2em] text-white/80 font-bold">Dreams Fulfilled</span>
              </div>
              <div className="hidden sm:block w-px h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <div className="flex flex-col items-center group text-center max-w-[150px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-4xl text-yellow-300 group-hover:scale-110 transition-transform duration-300">verified</span>
                  <span className="font-nunito text-3xl md:text-4xl font-black drop-shadow-lg">Approved</span>
                </div>
                <span className="font-noto-sans text-xs uppercase tracking-[0.1em] text-white/80 font-bold leading-relaxed">By The Ministry of Social Development</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Featured Testimonial */}
      {featured && (
        <section className="py-24 px-4 md:px-12 max-w-[1280px] mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfe3e7] to-transparent -z-10"></div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative order-2 lg:order-1 px-8 lg:px-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#1B2A6B]/5 to-[#E8192C]/5 blob-shape-2 -z-10 transform -rotate-6"></div>
              <div className="absolute -inset-8 bg-white border border-[#dfe3e7] blob-shape opacity-50 -z-20 transform rotate-12"></div>
              
              <div className="relative z-10">
                <div className="aspect-[4/5] blob-shape overflow-hidden shadow-premium group">
                  {featured.photo ? (
                    <img 
                      src={featured.photo} 
                      alt={featured.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                    />
                  ) : (
                    <div className="w-full h-full bg-[#f0f4f8] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[100px] text-gray-300">person</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#1B2A6B]/10 mix-blend-multiply"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-premium z-20 border-4 border-[#f6fafe]">
                  <div className="w-24 h-24 bg-[#E8192C]/10 rounded-full flex items-center justify-center pulse-animation">
                    <span className="material-symbols-outlined text-[#E8192C] text-4xl">school</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-10 lg:pl-10">
              <span className="material-symbols-outlined text-[#E8192C]/20 text-[120px] leading-none absolute -top-10 -left-10 z-0">format_quote</span>
              
              <div className="editorial-quote relative">
                <p className="font-nunito-sans text-2xl lg:text-3xl text-[#1B2A6B] leading-[1.6] italic font-medium">
                  "{featured.quote}"
                </p>
              </div>
              
              <div className="pt-6 border-t border-[#dfe3e7] inline-block">
                <h3 className="font-nunito text-3xl text-[#E8192C] font-black mb-1">{featured.name}</h3>
                <p className="font-noto-sans text-[#334155] uppercase tracking-widest text-sm mb-4">
                  {featured.program} {featured.university ? `, ${featured.university}` : ''}
                </p>
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`material-symbols-outlined text-yellow-400 ${i < featured.rating ? 'fill' : ''}`}>star</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Testimonial Masonry Grid */}
      <section className="bg-gradient-to-b from-[#f0f4f8] to-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1B2A6B]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-nunito text-[40px] font-extrabold mb-4 tracking-tight">
              <span className="text-[#1B2A6B]">Voices of </span>
              <span className="text-[#E8192C] italic">Excellence</span>
            </h2>
            <p className="font-nunito-sans text-lg text-[#334155]">Hear from our community of scholars who are making their mark across Japan's top institutions.</p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="material-symbols-outlined animate-spin text-4xl text-[#E8192C]">progress_activity</span>
            </div>
          ) : others.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {others.map((t, index) => {
                // Cycle through 3 styles based on index
                const styleIndex = index % 3;
                let cardClass = "";
                
                if (styleIndex === 0) {
                  // Style 1: White
                  cardClass = "bg-white text-[#171c1f] shadow-soft-layered border border-[#dfe3e7]";
                } else if (styleIndex === 1) {
                  // Style 2: Light Gray
                  cardClass = "bg-[#ffffff] text-[#171c1f] shadow-soft-layered border border-[#dfe3e7]"; 
                } else {
                  // Style 3: Blue
                  cardClass = "bg-[#1B2A6B] text-white shadow-premium";
                }

                return (
                  <motion.div 
                    key={t.id}
                    className={`${cardClass} p-10 rounded-3xl hover:shadow-premium transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group flex flex-col h-full`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  >
                    {/* Unique decor per style */}
                    {styleIndex === 0 && (
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#E8192C] to-[#E8192C]/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    )}
                    {styleIndex === 1 && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#1B2A6B]/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                    )}
                    {styleIndex === 2 && (
                      <>
                        <div className="absolute inset-0 dot-pattern opacity-10"></div>
                        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-[#E8192C]/20 transition-colors duration-700"></div>
                      </>
                    )}

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`material-symbols-outlined text-yellow-400 text-sm ${i < t.rating ? 'fill' : 'text-gray-300'}`}>star</span>
                        ))}
                      </div>
                      
                      <p className={`font-nunito-sans text-xl mb-10 leading-relaxed font-light ${styleIndex === 2 ? 'text-white/90 italic' : 'text-[#171c1f]'}`}>
                        "{t.quote}"
                      </p>
                      
                      <div className="flex items-center gap-5 mt-auto">
                        <div className="relative">
                          {styleIndex === 0 && <div className="absolute inset-0 bg-[#E8192C] rounded-full blur blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>}
                          {styleIndex === 1 && <div className="absolute inset-0 bg-[#1B2A6B] rounded-full blur blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>}
                          
                          {t.photo ? (
                            <img 
                              src={t.photo} 
                              alt={t.name} 
                              className={`w-16 h-16 rounded-full object-cover border-2 relative z-10 shadow-sm ${styleIndex === 2 ? 'border-[#E8192C]/50' : 'border-white'}`} 
                            />
                          ) : (
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 relative z-10 shadow-sm ${styleIndex === 2 ? 'border-[#E8192C]/50 bg-[#1B2A6B] text-white' : 'border-white bg-gray-200 text-gray-500'}`}>
                              <span className="material-symbols-outlined text-2xl">person</span>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <p className={`font-noto-sans font-extrabold text-lg ${styleIndex === 2 ? 'text-white' : 'text-[#1B2A6B]'}`}>
                            {t.name}
                          </p>
                          <p className={`font-noto-sans uppercase tracking-wider text-xs font-bold mt-1 ${styleIndex === 0 ? 'text-[#E8192C]' : styleIndex === 1 ? 'text-[#334155]' : 'text-[#ffb3ae]'}`}>
                            {t.university || t.program}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            !featured && (
              <div className="text-center py-10 text-[#334155]">
                <p>No testimonials available yet.</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#1B2A6B] overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-[1000px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black font-nunito text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-noto-sans">
            Join hundreds of successful scholars in Japan. Our expert counselors provide bespoke guidance for your unique career trajectory.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/contact" className="px-8 py-4 bg-[#E8192C] text-white rounded-full font-bold shadow-[0_0_20px_rgba(232,25,44,0.4)] hover:bg-white hover:text-[#E8192C] transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">event_available</span>
              Book Free Counseling
            </Link>
            <a href="tel:+9779767220276" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#1B2A6B] transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">call</span>
              Call Us Now
            </a>
            <a href="https://wa.me/9779767220276" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </a>
          </div>
          <p className="mt-8 font-noto-sans text-sm text-white/50 uppercase tracking-widest">Free 30-minute initial assessment</p>
        </div>
      </section>
    </div>
  );
}
