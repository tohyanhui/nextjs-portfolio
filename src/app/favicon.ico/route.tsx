import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
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
          borderRadius: '20%',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '18px',
            height: '6px',
            background: 'white',
            borderRadius: '3px',
            position: 'absolute',
            top: '8px',
            opacity: 0.9,
          }}
        />
        <div
          style={{
            width: '14px',
            height: '6px',
            background: 'white',
            borderRadius: '3px',
            position: 'absolute',
            bottom: '8px',
            opacity: 0.9,
          }}
        />
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}
