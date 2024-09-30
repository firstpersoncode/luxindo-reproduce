import { NextRequest } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/app/payload.config'
import { LOCATIONS } from '@/modules/options'

export const search = async (req: NextRequest) => {
  const payload = await getPayload({
    config: configPromise,
  })
  const { searchParams } = req.nextUrl
  const query = Object.fromEntries(searchParams.entries())
  let where: any = {}
  where.and = [{ type: { exists: true } }]
  if (query.type) {
    const types = query.type.split('|')
    where.and.push({ type: { in: types } })
  }

  if (query.ownership) {
    const ownerships = query.ownership.split('|')
    where.and.push({ ownership: { in: ownerships } })
  }

  let or: any[] = []

  if (query.area_1) {
    const areas = query.area_1.split('|')
    areas.forEach((area) => {
      or.push({ area_1: { equals: area } })
    })
  }

  if (query.area_2) {
    const areas = query.area_2.split('|')
    areas.forEach((area) => {
      const options = LOCATIONS
      const parent = options.find((o) => o.children?.find((c) => c.value === area))
      or = or.filter((a: any) => a.area_1?.equals !== parent?.value)
      or.push({ area_2: { equals: area } })
    })
  }

  if (or.length > 0) where.and.push({ or })

  if (query.sku) where.and.push({ sku: { equals: query.sku } })
  if (query.price_start) where.and.push({ price: { greater_than_equal: query.price_start } })
  if (query.price_end) where.and.push({ price: { less_than_equal: query.price_end } })

  const properties = await payload.find({
    collection: 'properties',
    page: Number(query.page ?? 1),
    limit: 10,
    where,
    locale: 'en',
    fallbackLocale: 'en',
  })

  return Response.json({ docs: properties.docs })
}
