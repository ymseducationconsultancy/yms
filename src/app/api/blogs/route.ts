export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import slugify from 'slugify';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const published = searchParams.get('published');
    const category = searchParams.get('category');
    
    let blogs;
    const pubInt = published ? parseInt(published) : null;
    const hasCategory = category && category !== 'All';

    if (published && hasCategory) {
      const rows = await sql`SELECT * FROM blogs WHERE published = ${pubInt} AND category = ${category} ORDER BY created_at DESC`;
      blogs = rows;
    } else if (published) {
      const rows = await sql`SELECT * FROM blogs WHERE published = ${pubInt} ORDER BY created_at DESC`;
      blogs = rows;
    } else if (hasCategory) {
      const rows = await sql`SELECT * FROM blogs WHERE category = ${category} ORDER BY created_at DESC`;
      blogs = rows;
    } else {
      const rows = await sql`SELECT * FROM blogs ORDER BY created_at DESC`;
      blogs = rows;
    }

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Fetch blogs error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const isAuth = await requireAuth(request);
    if (!isAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, excerpt, content, category, thumbnail, published } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    let slug = slugify(title, { lower: true, strict: true });
    
    // Check if slug exists
    const existing = await sql`SELECT id FROM blogs WHERE slug = ${slug}`;
    if (existing.length > 0) {
      slug = `${slug}-${Date.now()}`;
    }

    const excStr = excerpt || '';
    const catStr = category || 'General';
    const thumbStr = thumbnail || '';
    const pubInt = published ? 1 : 0;

    const rows = await sql`
      INSERT INTO blogs (title, slug, excerpt, content, category, thumbnail, published)
      VALUES (${title}, ${slug}, ${excStr}, ${content}, ${catStr}, ${thumbStr}, ${pubInt})
      RETURNING *
    `;

    return NextResponse.json(rows[0], { status: 201 });
  } catch (error) {
    console.error('Create blog error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
