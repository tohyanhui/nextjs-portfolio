import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          borderRadius: '22%',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '300px',
            height: '100px',
            background: 'white',
            borderRadius: '50px',
            position: 'absolute',
            top: '130px',
            opacity: 0.9,
          }}
        />
        <div
          style={{
            width: '230px',
            height: '100px',
            background: 'white',
            borderRadius: '50px',
            position: 'absolute',
            bottom: '130px',
            opacity: 0.9,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
