import { NextRequest } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/app/payload.config'
import { exists } from 'fs'

export const searchPropertiesApi = async (req: NextRequest) => {
  const payload = await getPayload({
    config: configPromise,
  })
  const { searchParams } = req.nextUrl
  const query = Object.fromEntries(searchParams.entries())
  let where: any = {}
  where.and = [{ type: { exists: true } }]
  if (query.type) where.and.push({ type: { equals: query.type } })
  if (query.ownership) where.and.push({ ownership: { equals: query.ownership } })
  if (query.area_1) where.and.push({ area_1: { equals: query.area_1 } })
  if (query.area_2) where.and.push({ area_2: { equals: query.area_2 } })
  if (query.sku) where.and.push({ sku: { equals: query.sku } })
  if (query.price_start) where.and.push({ price: { greater_than_equal: query.price_start } })
  if (query.price_end) where.and.push({ price: { less_than_equal: query.price_end } })

  // if (where.and.length === 1) {
  //   const fieldName = Object.keys(where.and[0])[0]
  //   where[fieldName] = where.and[0][fieldName]
  //   delete where.and
  // }

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
