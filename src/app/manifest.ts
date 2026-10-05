export default function manifest() {
  return {
    name: 'Toh Yan Hui | AI & Software Engineering',
    short_name: 'Toh Yan Hui',
    description: 'Computer Science student building applied AI systems and thoughtful software',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8faf9',
    theme_color: '#f8faf9',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
