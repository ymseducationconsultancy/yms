import postgres from 'postgres';
import bcrypt from 'bcryptjs';

const connectionString = process.env.POSTGRES_URL!;
export const sql = postgres(connectionString);

export async function initDb() {
  console.log('Initializing Postgres Database...');

  // Create tables
  await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      excerpt TEXT,
      content TEXT NOT NULL,
      category TEXT DEFAULT 'General',
      thumbnail TEXT DEFAULT '',
      author TEXT DEFAULT 'YMS Education',
      published INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS testimonials (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      program TEXT DEFAULT '',
      university TEXT DEFAULT '',
      quote TEXT NOT NULL,
      rating INTEGER DEFAULT 5,
      photo TEXT DEFAULT '',
      published INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS admins (
      id SERIAL PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS gallery (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      img TEXT NOT NULL,
      "desc" TEXT,
      published INTEGER DEFAULT 1,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  // Seed default admin
  const adminRows = await sql`SELECT * FROM admins WHERE username = 'admin'`;
  if (adminRows.length === 0) {
    const hash = bcrypt.hashSync('yms2024admin', 10);
    await sql`INSERT INTO admins (username, password_hash) VALUES ('admin', ${hash})`;
  }

  // Seed blogs
  const blogsRows = await sql`SELECT * FROM blogs`;
  if (blogsRows.length === 0) {
    await sql`
      INSERT INTO blogs (title, slug, excerpt, content, category, thumbnail, published)
      VALUES (
        'A Comprehensive Guide to the JLPT',
        'comprehensive-guide-to-jlpt',
        'Everything you need to know about the Japanese Language Proficiency Test.',
        '<p>The Japanese Language Proficiency Test (JLPT) is the standard test for evaluating and certifying Japanese language proficiency of non-native speakers.</p><h2>Levels</h2><p>It has 5 levels: N1, N2, N3, N4, and N5. The easiest level is N5 and the most difficult level is N1.</p>',
        'Language Learning',
        '',
        1
      )
    `;
    await sql`
      INSERT INTO blogs (title, slug, excerpt, content, category, thumbnail, published)
      VALUES (
        'Top 5 Reasons to Study in Japan',
        'top-5-reasons-study-japan',
        'Discover why Japan is becoming one of the most popular study destinations.',
        '<p>Japan offers a unique blend of traditional culture and modern technology.</p><ol><li>High quality education</li><li>Safe environment</li><li>Rich culture</li><li>Job opportunities</li><li>Delicious food</li></ol>',
        'Study Tips',
        '',
        1
      )
    `;
  }

  // Seed testimonials
  const testimonialsRows = await sql`SELECT * FROM testimonials`;
  if (testimonialsRows.length === 0) {
    await sql`
      INSERT INTO testimonials (name, program, university, quote, rating, published)
      VALUES (
        'Ram Bahadur',
        'Language Program',
        'YAMASA Institute',
        'YMS Education helped me achieve my dream of studying in Japan. Their language classes are top-notch and the visa processing was so smooth.',
        5,
        1
      )
    `;
    await sql`
      INSERT INTO testimonials (name, program, university, quote, rating, published)
      VALUES (
        'Sita Thapa',
        'Undergraduate',
        'Tokyo University',
        'The counselors at YMS are very honest and supportive. They guided me through every step of the process.',
        5,
        1
      )
    `;
  }

  // Seed gallery
  const galleryRows = await sql`SELECT * FROM gallery`;
  if (galleryRows.length === 0) {
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Language Program Certification', 'Success', '/images/gallery/certification-1.jpg', 'Students receiving their Japanese language course completion certificates.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('JLPT Certificate Distribution', 'Success', '/images/gallery/certification-2.jpg', 'Celebrating student successes in the JLPT exam achievements.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Interactive Study Sessions', 'Events', '/images/gallery/college-1.jpg', 'A look inside our modern Japanese language classrooms.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Friendly Football Match', 'Sports', '/images/gallery/event-1.jpg', 'Students participating in a friendly football match between YMS and KG.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Annual Cultural Festivities', 'Events', '/images/gallery/event-2.jpg', 'Celebrating traditional Japanese cultural events and festivals.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Pre-departure Orientation Program', 'Events', '/images/gallery/event-3.jpg', 'Preparing students for their upcoming academic journey in Japan.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Language Classes & Presentations', 'Events', '/images/gallery/event-4.jpg', 'Interactive presentation sessions to build confidence in speaking Japanese.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Community Futsal Match', 'Sports', '/images/gallery/event-5.jpg', 'Students engaging and building teamwork through a friendly futsal match.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Visa Success Stories Celebrations', 'Success', '/images/gallery/success-1.jpg', 'YMS students celebrating high visa success rates for Japan.', 1)`;
    await sql`INSERT INTO gallery (title, category, img, "desc", published) VALUES ('Alumni Gathering and Send-offs', 'Success', '/images/gallery/success-2.jpg', 'Wishing our next batch of students success in their future career paths.', 1)`;
  }

  return { success: true };
}
