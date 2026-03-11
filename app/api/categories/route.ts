import { NextResponse } from 'next/server';
import { productService } from '@/lib/products';

/* FIX: Create an instance of ProductService to access category data */
// const productService = new ProductService() 
export async function GET() {

  const categories = productService.getCategories();
  return NextResponse.json({ categories });
}
