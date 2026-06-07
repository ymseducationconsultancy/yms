export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import slugify from 'slugify';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const rows = await sql`SELECT * FROM blogs WHERE id = ${id}`;
    
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuth = await requireAuth(request);
    if (!isAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { title, excerpt, content, category, thumbnail, published } = body;

    // Check if blog exists
    const existing = await sql`SELECT id FROM blogs WHERE id = ${id}`;
    if (existing.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    let slug = slugify(title, { lower: true, strict: true });
    
    // Check if slug exists for OTHER blogs
    const slugExists = await sql`SELECT id FROM blogs WHERE slug = ${slug} AND id != ${id}`;
    if (slugExists.length > 0) {
      slug = `${slug}-${Date.now()}`;
    }

    const excStr = excerpt || '';
    const catStr = category || 'General';
    const thumbStr = thumbnail || '';
    const pubInt = published ? 1 : 0;

    const rows = await sql`
      UPDATE blogs 
      SET title = ${title}, slug = ${slug}, excerpt = ${excStr}, content = ${content}, category = ${catStr}, 
          thumbnail = ${thumbStr}, published = ${pubInt}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Update blog error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuth = await requireAuth(request);
    if (!isAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await sql`DELETE FROM blogs WHERE id = ${id}`;
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
