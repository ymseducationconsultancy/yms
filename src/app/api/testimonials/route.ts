export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const published = searchParams.get('published');
    
    let testimonials;

    if (published) {
      const pubInt = parseInt(published);
      const rows = await sql`SELECT * FROM testimonials WHERE published = ${pubInt} ORDER BY created_at DESC`;
      testimonials = rows;
    } else {
      const rows = await sql`SELECT * FROM testimonials ORDER BY created_at DESC`;
      testimonials = rows;
    }

    return NextResponse.json({ testimonials });
  } catch (error) {
    console.error('Fetch testimonials error:', error);
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
    const { name, program, university, quote, rating, photo, published } = body;

    if (!name || !quote) {
      return NextResponse.json({ error: 'Name and quote are required' }, { status: 400 });
    }

    const progStr = program || '';
    const uniStr = university || '';
    const rNum = rating || 5;
    const photoStr = photo || '';
    const pubInt = published ? 1 : 0;

    const rows = await sql`
      INSERT INTO testimonials (name, program, university, quote, rating, photo, published)
      VALUES (${name}, ${progStr}, ${uniStr}, ${quote}, ${rNum}, ${photoStr}, ${pubInt})
      RETURNING *
    `;

    return NextResponse.json(rows[0], { status: 201 });
  } catch (error) {
    console.error('Create testimonial error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
