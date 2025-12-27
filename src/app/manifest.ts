export default function manifest() {
  return {
    name: 'Toh Yan Hui - Software Developer Portfolio',
    short_name: 'Toh Yan Hui',
    description: 'Software Developer specializing in web and mobile development',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0070f3',
    icons: [
      {
        src: '/icon?<generated>',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon?<generated>',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
