import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const published = searchParams.get('published');
    
    const db = getDb();
    let query = 'SELECT * FROM gallery WHERE 1=1';
    const params: any[] = [];

    if (published) {
      query += ' AND published = ?';
      params.push(parseInt(published));
    }

    query += ' ORDER BY created_at DESC';

    const gallery = db.prepare(query).all(...params);
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

    const db = getDb();
    
    const insert = db.prepare(`
      INSERT INTO gallery (title, category, img, desc, published)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = insert.run(
      title,
      category,
      img,
      desc || '',
      published ? 1 : 0
    );

    const newGalleryItem = db.prepare('SELECT * FROM gallery WHERE id = ?').get(result.lastInsertRowid);
    return NextResponse.json(newGalleryItem, { status: 201 });
  } catch (error) {
    console.error('Create gallery item error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
