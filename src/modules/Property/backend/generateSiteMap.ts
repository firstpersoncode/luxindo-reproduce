import type { MetadataRoute } from 'next'
import configPromise from '@/app/payload.config'
import { getPayload } from 'payload'
import { locales } from '@/libs/locales'

const generateSite = (path: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL

  if (path.includes("index")) path = '/'

  let languages = {}
  for (const locale of locales) {
    languages = {
      ...languages,
      [locale]: `${baseUrl}/${locale}${path}`,
    }
  }

  return {
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    alternates: { languages },
  }
}

export async function generateSiteMap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({
    config: configPromise,
  })

  const pages = await payload.find({
    collection: 'pages',
    page: 1,
    limit: 1000,
    locale: 'en',
    fallbackLocale: 'en',
  })

  const properties = await payload.find({
    collection: 'properties',
    page: 1,
    limit: 1000,
    locale: 'en',
    fallbackLocale: 'en',
  })

  return [
    ...pages.docs.map((property) => generateSite(`/${property.slug}`)),
    ...properties.docs.map((property) => generateSite(`/${property.slug}`)),
  ]
}
