'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import TwoToneHeading from '@/components/TwoToneHeading';

interface GalleryItem {
  id: number;
  title: string;
  category: 'Campus Life' | 'Classrooms' | 'Japan' | 'Cultural Events';
  img: string;
  desc: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Student Collaboration",
    category: "Campus Life",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&h=450&fit=crop",
    desc: "Students working together in groups during language class orientations."
  },
  {
    id: 2,
    title: "Tokyo Skyline at Night",
    category: "Japan",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&h=450&fit=crop",
    desc: "A breathtaking view of Shinjuku, Tokyo - a top destination for YMS students."
  },
  {
    id: 3,
    title: "Language Class Lectures",
    category: "Classrooms",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&h=450&fit=crop",
    desc: "Interactive learning environment designed to master Japanese from N5 to N1."
  },
  {
    id: 4,
    title: "Kyoto Heritage Pagoda",
    category: "Japan",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&h=450&fit=crop",
    desc: "Experiencing the rich cultural history and traditions of Kyoto."
  },
  {
    id: 5,
    title: "Alumni Meeting",
    category: "Campus Life",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&h=450&fit=crop",
    desc: "Successful graduates sharing their experiences in Japan with new students."
  },
  {
    id: 6,
    title: "Interactive Classroom Activity",
    category: "Classrooms",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&h=450&fit=crop",
    desc: "Personalized guidance and classroom discussions with our language experts."
  },
  {
    id: 7,
    title: "Dotonbori Neon, Osaka",
    category: "Japan",
    img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=600&h=450&fit=crop",
    desc: "The vibrant neon lights of Osaka's famous food and commercial district."
  },
  {
    id: 8,
    title: "Traditional Festival Orientation",
    category: "Cultural Events",
    img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&h=450&fit=crop",
    desc: "Students participating in traditional Japanese tea ceremonies and culture briefings."
  },
  {
    id: 9,
    title: "Graduation and Certificates",
    category: "Campus Life",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&h=450&fit=crop",
    desc: "Celebrating academic milestones and certificate achievements at YMS."
  },
  {
    id: 10,
    title: "Modern Language Lab",
    category: "Classrooms",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&h=450&fit=crop",
    desc: "State-of-the-art computers and audio setups for listening and speaking practice."
  },
  {
    id: 11,
    title: "Cherry Blossoms in Spring",
    category: "Japan",
    img: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=600&h=450&fit=crop",
    desc: "Beautiful Sakura blooming season across Japan's parks and streets."
  },
  {
    id: 12,
    title: "Tea Ceremony Demonstrations",
    category: "Cultural Events",
    img: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=600&h=450&fit=crop",
    desc: "Special cultural orientation events introducing Japanese arts to new students."
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const categories = ['All', 'Campus Life', 'Classrooms', 'Japan', 'Cultural Events'];

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, filteredItems]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-10 z-10">
        <div className="relative z-10 text-center px-4 md:px-12 max-w-4xl mx-auto">
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-noto-sans text-sm text-[#E8192C] font-bold tracking-widest uppercase">Visual Insights</span>
          </motion.div>
          
          <motion.h1 
            className="font-nunito text-[56px] leading-[1.1] mb-8 font-black tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-[#E8192C] relative inline-block">Photo
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E8192C]/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4"></path>
              </svg>
            </span>
            <span className="text-[#1B2A6B] ml-4">Gallery</span>
          </motion.h1>
          
          <motion.p 
            className="font-nunito-sans text-lg text-[#334155] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our visual gallery highlighting student milestones, classroom experiences, cultural orientation seminars, and popular study cities across Japan.
          </motion.p>
        </div>
      </section>

      {/* Main Grid and Filtering */}
      <SectionWrapper id="full-gallery" className="relative z-10 pt-8 pb-24">
        <div className="max-w-[1280px] mx-auto px-4">
          
          {/* Categories Tab Selector */}
          <div className="flex flex-wrap gap-2.5 mb-14 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIdx(null);
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#1B2A6B] text-white shadow-md' 
                    : 'bg-[#f0f4f8] text-[#334155] hover:bg-[#d6dade]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 className="sr-only">Gallery Image Roster</h2>

          {/* Grid Layout */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md group cursor-pointer border border-gray-100 bg-[#f0f4f8]"
                  onClick={() => setSelectedIdx(idx)}
                  whileHover={{ y: -6 }}
                >
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  
                  {/* Overlay text on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A6B]/90 via-[#1B2A6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                    <span className="px-2.5 py-0.5 self-start text-[10px] uppercase font-bold tracking-widest bg-white/25 backdrop-blur-sm text-white rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-nunito font-black text-xl leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-[#334155]">
              <p className="text-lg">No images available for this category yet.</p>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-4 md:p-10 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[1001]"
              aria-label="Close lightbox"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-10 text-white bg-white/5 hover:bg-white/15 p-4 rounded-full transition-all z-[1001] active:scale-95"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-3xl">arrow_back</span>
            </button>

            {/* Image Viewer Frame */}
            <motion.div 
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-[1000] border border-white/10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={selectedIdx}
            >
              <Image 
                src={filteredItems[selectedIdx].img} 
                alt={filteredItems[selectedIdx].title} 
                fill 
                sizes="(max-width: 1200px) 100vw, 1024px"
                className="object-cover"
                priority={true}
              />
              
              {/* Description Panel Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/55 to-transparent p-6 pt-16">
                <span className="px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-white/20 text-white rounded-full">
                  {filteredItems[selectedIdx].category}
                </span>
                <h2 className="text-white font-nunito font-black text-2xl md:text-3xl mt-2 mb-1">
                  {filteredItems[selectedIdx].title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {filteredItems[selectedIdx].desc}
                </p>
              </div>
            </motion.div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-10 text-white bg-white/5 hover:bg-white/15 p-4 rounded-full transition-all z-[1001] active:scale-95"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-3xl">arrow_forward</span>
            </button>

            {/* Indicator / Steps Counter */}
            <div className="absolute bottom-6 text-white/50 text-sm font-semibold tracking-wider font-noto-sans z-[1001]">
              {selectedIdx + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
