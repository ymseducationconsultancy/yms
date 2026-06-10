const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/app/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// 1. Extract and remove Section 8
const sec8Regex = /\{\/\* --- Section 8: Our Services --- \*\/\}.*?<\/SectionWrapper>/s;
let section8 = pageContent.match(sec8Regex)[0];
// Clean up the weird comment block inside Section 8
section8 = section8.replace(/\{\/\* --- Section 9: Success Stories & Testimonials ---.*?VIEW ALL SERVICES/s, 'VIEW ALL SERVICES');
pageContent = pageContent.replace(sec8Regex, '');

// 2. Remove Section 3 (What is YMS?)
const sec3Regex = /\{\/\* --- Section 3: What is YMS\? --- \*\/\}.*?<\/SectionWrapper>/s;
pageContent = pageContent.replace(sec3Regex, '');

// 3. Shorten CEO Message in Section 2
const ceoRegex = /(<blockquote className="pl-6 border-l-4 border-\[#E8192C\] text-xl font-nunito italic text-\[#334155\] mb-6">)(.*?)(<\/blockquote>.*?)<p className="text-\[#171c1f\] leading-relaxed mb-8">.*?<\/p>.*?<\/AnimatedCard>/s;
pageContent = pageContent.replace(ceoRegex, `$1
              "Our goal is not just to send students to Japan, but to ensure they succeed."
            $3<p className="text-[#171c1f] leading-relaxed mb-6">
              At YMS, we provide honest and transparent counseling. We are dedicated to offering the right guidance and continuous support from your initial decision until you achieve your career goals in Japan.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#1B2A6B] font-bold hover:text-[#E8192C] transition-colors border-b-2 border-transparent hover:border-[#E8192C] pb-1">
              Read Full Message <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>`);

// 4. Insert Section 8 before Section 2
pageContent = pageContent.replace('{/* --- Section 2: CEO Message --- */}', section8 + '\n\n      {/* --- Section 2: CEO Message --- */}');

fs.writeFileSync(pagePath, pageContent);
console.log('page.tsx updated successfully');

// --- Now update about/page.tsx ---
const aboutPath = path.join(__dirname, 'src/app/about/page.tsx');
let aboutContent = fs.readFileSync(aboutPath, 'utf8');

// Add the Mission, Vision, Values from old Section 3
const aboutAddition = `
      {/* Mission, Vision, Values */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-nunito font-black mb-4">
            <span className="text-[#1B2A6B]">What is </span>
            <span className="text-[#E8192C]">YMS?</span>
          </h2>
          <p className="text-[#334155] max-w-2xl mx-auto mb-16 text-lg">
            Building a robust bridge between the youth of Nepal and the opportunities of Japan.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="p-8 rounded-2xl border-t-4 shadow-lg border-[#E8192C] bg-white">
              <div className="w-16 h-16 rounded-full bg-[#ffdad7] text-[#E8192C] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">flag</span>
              </div>
              <h3 className="text-2xl font-black font-nunito text-[#1B2A6B] mb-1">Mission</h3>
              <p className="text-sm font-bold text-[#E8192C] mb-4 tracking-widest">使命</p>
              <ul className="space-y-2 text-[#171c1f]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#E8192C] text-[20px] mt-0.5">check</span>
                  Provide honest and transparent counseling.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#E8192C] text-[20px] mt-0.5">check</span>
                  Deliver high-quality Japanese language education.
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border-t-4 shadow-lg border-[#1B2A6B] bg-white">
              <div className="w-16 h-16 rounded-full bg-[#a7b5fe]/30 text-[#1B2A6B] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h3 className="text-2xl font-black font-nunito text-[#1B2A6B] mb-1">Vision</h3>
              <p className="text-sm font-bold text-[#1B2A6B] mb-4 tracking-widest">実現したい未来</p>
              <ul className="space-y-2 text-[#171c1f]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#1B2A6B] text-[20px] mt-0.5">check</span>
                  To be the most trusted education partner in Nepal.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#1B2A6B] text-[20px] mt-0.5">check</span>
                  Create global citizens who contribute to both nations.
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border-t-4 shadow-lg border-[#0097A7] bg-white">
              <div className="w-16 h-16 rounded-full bg-[#97f0ff]/50 text-[#0097A7] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">diamond</span>
              </div>
              <h3 className="text-2xl font-black font-nunito text-[#1B2A6B] mb-1">Values</h3>
              <p className="text-sm font-bold text-[#0097A7] mb-4 tracking-widest">価値観</p>
              <ul className="space-y-2 text-[#171c1f]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0097A7] text-[20px] mt-0.5">check</span>
                  Integrity & Transparency
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0097A7] text-[20px] mt-0.5">check</span>
                  Student-Centric Approach
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#0097A7] text-[20px] mt-0.5">check</span>
                  Excellence & Reliability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full CEO Message */}
      <section className="py-24 bg-[#f8fafc] relative z-10">
        <div className="max-w-[1000px] mx-auto px-4 md:px-12">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl relative">
            <span className="material-symbols-outlined text-[#E8192C]/10 text-[120px] leading-none absolute top-4 right-8 z-0">format_quote</span>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-nunito font-black mb-8">
                <span className="text-[#1B2A6B]">Message from </span>
                <span className="text-[#E8192C]">the CEO</span>
              </h2>
              
              <blockquote className="pl-6 border-l-4 border-[#E8192C] text-2xl font-nunito italic text-[#334155] mb-8">
                "Our goal is not just to send students to Japan, but to ensure they succeed and build a solid foundation for their future."
              </blockquote>
              
              <div className="space-y-6 text-[#171c1f] leading-relaxed text-lg mb-12">
                <p>
                  At YMS Education Consultancy, we believe in honest and transparent counseling. Studying abroad is a major life decision, and we are dedicated to providing the right guidance, accurate information, and continuous support from the moment you decide to study in Japan until you achieve your career goals there.
                </p>
                <p>
                  With years of experience and a deep understanding of the Japanese education system, we have built strong relationships with top institutions. This allows us to offer our students the best possible pathways tailored to their individual aspirations.
                </p>
                <p>
                  We look forward to being a part of your success story.
                </p>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-gray-100">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <img src="/images/team/founder.jpeg" alt="Bikram Khadka" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-nunito font-black text-2xl text-[#1B2A6B]">Bikram Khadka</h3>
                  <p className="text-[#0097A7] font-semibold text-lg">Representative Director / CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

// Insert the new sections before the final </div> of about/page.tsx
aboutContent = aboutContent.replace(/    <\/div>\s* \);\s*}\s*$/s, aboutAddition + '\n    </div>\n  );\n}\n');

fs.writeFileSync(aboutPath, aboutContent);
console.log('about/page.tsx updated successfully');
