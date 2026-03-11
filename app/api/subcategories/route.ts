import { NextRequest, NextResponse } from 'next/server';
import { productService } from '@/lib/products';



export async function GET(request: NextRequest) {
  /* FIX: Properly parse query parameters for category filtering */
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || undefined;
  /* Fix: Return subcategories based on the category filter */
  const subCategories = productService.getSubCategories(category);
  return NextResponse.json( {subCategories} );
}
