import type { MetadataRoute } from 'next'
import configPromise from '@/app/payload.config'
import { getPayload } from 'payload'

const generateSite = (path: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL

  return {
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${baseUrl}/en${path}`,
        id: `${baseUrl}/id${path}`,
        fr: `${baseUrl}/fr${path}`,
      },
    },
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({
    config: configPromise,
  })

  const properties = await payload.find({
    collection: 'properties',
    page: 1,
    limit: 1000,
    locale: 'en',
    fallbackLocale: 'en',
  })

  return [
    generateSite('/'),
    ...properties.docs.map((property) => generateSite(`/properties/${property.slug}/`)),
  ]
}
