export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

const blogs = [
  {
    title: 'The Ultimate Guide to Studying in Japan from Nepal (2026)',
    slug: 'ultimate-guide-study-in-japan-nepal-2026',
    excerpt: 'Discover everything you need to know about the application process, language requirements, and life in Japan as a Nepalese student.',
    content: `
      <h2>Why Study in Japan?</h2>
      <p>Japan has emerged as one of the most popular destinations for Nepalese students seeking higher education. With its world-class universities, advanced technology, and rich cultural heritage, it offers a unique environment for academic and personal growth.</p>
      
      <h2>The Process</h2>
      <p>The journey begins with Japanese language preparation. Most universities and vocational schools require at least a JLPT N5 or N4 level certificate. At YMS Education Consultancy, we provide intensive language classes specifically tailored to meet these requirements.</p>
      
      <h2>Visa Application</h2>
      <p>The Certificate of Eligibility (COE) is the most crucial document. Our experienced counselors assist you in gathering all necessary financial and academic documents to ensure a smooth application process.</p>
      
      <h2>Conclusion</h2>
      <p>Studying in Japan is a life-changing experience. With proper guidance and preparation, your dream can become a reality. Contact us today to start your journey!</p>
    `,
    category: 'Study in Japan',
    thumbnail: '/images/gallery/college-1.jpg',
    author: 'YMS Education',
  },
  {
    title: 'How to Prepare for the JLPT and NAT Exams in Nepal',
    slug: 'prepare-jlpt-nat-exams-nepal',
    excerpt: 'Master the Japanese Language Proficiency Test (JLPT) and NAT-TEST with these proven study strategies and tips.',
    content: `
      <h2>Understanding the Exams</h2>
      <p>The JLPT and NAT-TEST are the standard exams for evaluating Japanese language proficiency. They test vocabulary, grammar, reading, and listening skills.</p>
      
      <h2>Study Strategies</h2>
      <ul>
        <li><strong>Consistent Practice:</strong> Dedicate at least 2 hours daily to study.</li>
        <li><strong>Mock Tests:</strong> Regularly take practice tests to understand the exam format and manage time effectively.</li>
        <li><strong>Focus on Weaknesses:</strong> Identify the sections you struggle with and allocate more time to them.</li>
      </ul>
      
      <h2>How YMS Can Help</h2>
      <p>Our expert instructors use interactive teaching methods and provide comprehensive study materials to ensure you are fully prepared for the exams.</p>
    `,
    category: 'Language Learning',
    thumbnail: '/images/gallery/event-4.jpg',
    author: 'YMS Education',
  },
  {
    title: 'Japan Student Visa Process for Nepalese Students: Step-by-Step',
    slug: 'japan-student-visa-process-nepal-step-by-step',
    excerpt: 'A comprehensive, step-by-step guide to successfully applying for a Japanese student visa from Nepal.',
    content: `
      <h2>Step 1: Language Preparation</h2>
      <p>Enroll in a Japanese language course and clear the required JLPT or NAT level.</p>
      
      <h2>Step 2: Choose an Institution</h2>
      <p>Select a suitable language school, vocational college, or university in Japan. We help you find the best fit based on your academic goals and budget.</p>
      
      <h2>Step 3: Document Preparation</h2>
      <p>Gather academic transcripts, financial documents (bank balance, income source), and a valid passport. This is where our meticulous documentation support comes in.</p>
      
      <h2>Step 4: COE Application</h2>
      <p>The institution applies for the Certificate of Eligibility (COE) on your behalf. Once approved, the COE is sent to Nepal.</p>
      
      <h2>Step 5: Final Visa Application</h2>
      <p>Submit the COE and other required documents to the Japanese Embassy or VFS in Nepal to get the final visa stamped.</p>
    `,
    category: 'Visa Guide',
    thumbnail: '/images/gallery/success-1.jpg',
    author: 'YMS Education',
  },
  {
    title: 'Top 5 Benefits of Studying at a Japanese Language School',
    slug: 'top-5-benefits-japanese-language-school',
    excerpt: 'Explore the immense advantages of enrolling in a dedicated Japanese language school before pursuing higher education.',
    content: `
      <h2>1. Cultural Immersion</h2>
      <p>Language schools offer a direct pathway to understanding Japanese culture, customs, and daily life.</p>
      
      <h2>2. Enhanced Career Opportunities</h2>
      <p>Fluency in Japanese opens doors to lucrative job opportunities both in Japan and globally.</p>
      
      <h2>3. Pathway to Higher Education</h2>
      <p>Most universities require high proficiency in Japanese. Language schools prepare you perfectly for entrance exams.</p>
      
      <h2>4. Networking</h2>
      <p>Meet students from all over the world and build an international network.</p>
      
      <h2>5. Part-Time Work</h2>
      <p>As a student, you can work up to 28 hours a week, helping you cover living expenses while gaining practical experience.</p>
    `,
    category: 'Study Tips',
    thumbnail: '/images/gallery/event-1.jpg',
    author: 'YMS Education',
  },
  {
    title: 'Why Choosing the Right Educational Consultancy Matters',
    slug: 'why-choosing-right-educational-consultancy-matters',
    excerpt: 'Learn how partnering with an honest and experienced educational consultancy can make or break your study abroad dreams.',
    content: `
      <h2>The Importance of Expert Guidance</h2>
      <p>Applying to study abroad involves a complex maze of paperwork, language requirements, and tight deadlines. A minor mistake can lead to visa rejection.</p>
      
      <h2>Honesty and Transparency</h2>
      <p>At YMS Education Consultancy, we prioritize your career over everything else. We provide realistic assessments of your profile and guide you towards the best possible outcome.</p>
      
      <h2>Comprehensive Support</h2>
      <p>From language classes to documentation, visa interview preparation, and post-arrival support, we are with you every step of the way.</p>
      
      <h2>Our Digital Partner</h2>
      <p>We are committed to providing the best digital experience for our students. This website and our digital infrastructure are proudly developed by <strong><a href="https://www.codepeaknepal.com" target="_blank" rel="noopener noreferrer">Code Peak Nepal</a></strong>. They are the leading software development and IT documentation partner in Nepal, helping educational institutions like ours leverage technology for better student services.</p>
    `,
    category: 'General',
    thumbnail: '/images/gallery/event-3.jpg',
    author: 'YMS Education',
  }
];

export async function GET() {
  try {
    for (const blog of blogs) {
      const existing = await sql`SELECT id FROM blogs WHERE slug = ${blog.slug}`;
      if (existing.length === 0) {
        await sql`
          INSERT INTO blogs (title, slug, excerpt, content, category, thumbnail, author, published)
          VALUES (${blog.title}, ${blog.slug}, ${blog.excerpt}, ${blog.content}, ${blog.category}, ${blog.thumbnail}, ${blog.author}, 1)
        `;
      }
    }
    return NextResponse.json({ message: 'Blogs seeded successfully' });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Failed to seed blogs' }, { status: 500 });
  }
}
