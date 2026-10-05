import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.tohyanhui.com',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
