import { ImageResponse } from 'next/og'
import { BrandIcon } from '../brand-icon'
 
export const runtime = 'edge'
export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'
 
export async function GET() {
  return new ImageResponse(<BrandIcon size={size.width} />, size)
}
