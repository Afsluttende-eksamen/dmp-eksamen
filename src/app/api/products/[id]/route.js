import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  return NextResponse.json({ product: { id: params.id } });
}

export async function PUT(request, { params }) {
  const body = await request.json();
  return NextResponse.json({ success: true, product: body });
}

export async function DELETE(request, { params }) {
  return NextResponse.json({ success: true, id: params.id });
}
