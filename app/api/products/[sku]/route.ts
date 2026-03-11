import { NextRequest, NextResponse } from 'next/server';
import { productService } from '@/lib/products';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sku: string }> }
) {
  const { sku } = await params;
  const product = productService.getById(sku);

  /* FIX : Added Prper error handling for product not found */
  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
