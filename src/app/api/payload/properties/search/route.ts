import { NextRequest } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/app/payload.config'

export const GET = async (req: NextRequest) => {
  const payload = await getPayload({
    config: configPromise,
  })
  const { searchParams } = req.nextUrl
  const query = Object.fromEntries(searchParams.entries())
  let where: any = {}
  if (query.type) where.type = { equals: query.type }
  if (query.ownership) where.ownership = { equals: query.ownership }
  if (query.area_2) where.area_2 = { equals: query.area_2 }
  if (query.area_1) where.area_1 = { equals: query.area_1 }
  if (query.sku) where = { gte: query.sku }

  const properties = await payload.find({
    collection: 'properties',
    page: 1,
    limit: 10,
    where,
    locale: 'en',
    fallbackLocale: 'en',
  })

  return Response.json({ docs: properties.docs })
}
