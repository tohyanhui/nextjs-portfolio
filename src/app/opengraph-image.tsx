import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Toh Yan Hui | AI & Software Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const portrait = await readFile(path.join(process.cwd(), 'public/profile-1.png'));

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: '#f8faf9',
        color: '#172c2b',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 770,
          padding: '62px 72px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            color: '#0d766d',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 54,
              height: 54,
              borderRadius: 10,
              background: '#0d766d',
              color: '#ffffff',
              fontSize: 22,
            }}
          >
            YH
          </div>
          PORTFOLIO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            Toh Yan Hui
          </div>
          <div style={{ fontSize: 34, color: '#0d766d' }}>
            AI &amp; Software Engineering
          </div>
        </div>
        <div style={{ fontSize: 23, color: '#536664' }}>
          Computer Science at NUS
        </div>
      </div>
      <div style={{ display: 'flex', width: 430, height: 630, overflow: 'hidden' }}>
        <img
          src={`data:image/png;base64,${portrait.toString('base64')}`}
          alt=""
          width={430}
          height={630}
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
      </div>
    </div>,
    size,
  );
}
