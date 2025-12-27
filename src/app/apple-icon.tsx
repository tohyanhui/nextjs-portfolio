import { ImageResponse } from 'next/og'
 
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
export default function AppleIcon() {
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
            width: '100px',
            height: '30px',
            background: 'white',
            borderRadius: '15px',
            position: 'absolute',
            top: '45px',
            opacity: 0.9,
          }}
        />
        <div
          style={{
            width: '80px',
            height: '30px',
            background: 'white',
            borderRadius: '15px',
            position: 'absolute',
            bottom: '45px',
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
