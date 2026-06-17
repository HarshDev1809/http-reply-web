import { MetadataRoute } from 'next'

export const dynamic = "force-static"
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://http-reply.devbydev.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}