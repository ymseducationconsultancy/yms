export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const published = searchParams.get('published');
    
    let gallery;
    if (published) {
      const pubInt = parseInt(published);
      const rows = await sql`SELECT * FROM gallery WHERE published = ${pubInt} ORDER BY created_at DESC`;
      gallery = rows;
    } else {
      const rows = await sql`SELECT * FROM gallery ORDER BY created_at DESC`;
      gallery = rows;
    }

    return NextResponse.json({ gallery });
  } catch (error) {
    console.error('Fetch gallery error:', error);
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
    const { title, category, img, desc, published } = body;

    if (!title || !category || !img) {
      return NextResponse.json({ error: 'Title, category, and image URL are required' }, { status: 400 });
    }
    
    const pubInt = published ? 1 : 0;
    const descText = desc || '';

    const rows = await sql`
      INSERT INTO gallery (title, category, img, "desc", published)
      VALUES (${title}, ${category}, ${img}, ${descText}, ${pubInt})
      RETURNING *
    `;

    return NextResponse.json(rows[0], { status: 201 });
  } catch (error) {
    console.error('Create gallery item error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
