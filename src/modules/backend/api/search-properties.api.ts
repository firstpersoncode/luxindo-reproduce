import { NextRequest } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/app/payload.config'
import { LOCATIONS } from '@/options'

export const searchPropertiesApi = async (req: NextRequest) => {
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
    const options = LOCATIONS
    const parent = options.find((o) => o.children?.find((c) => areas.includes(c.value)))
    const selectedParent = parent ? or.find((a: any) => a.area_1.equals === parent.value) : null
    if (selectedParent) {
      or = or.filter((a: any) => a.area_1.equals !== selectedParent.area_1.equals)
      areas.forEach((area) => {
        or.push({ area_2: { equals: area } })
      })
    }
  }

  if (or.length > 0) where.and.push({ or })

  // if (query.area_1 || query.area_2) {
  //   const or = []
  //   if (query.area_1) {
  //     const areas = query.area_1.split('|')
  //     or.push({ area_1: { in: areas } })
  //   }
  //   if (query.area_2) {
  //     const areas = query.area_2.split('|')
  //     or.push({ area_2: { in: areas } })
  //   }
  //   where.and.push({ or })
  // }

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
    page: Number(query.page ?? 1),
    limit: 10,
    where,
    locale: 'en',
    fallbackLocale: 'en',
  })

  return Response.json({ docs: properties.docs })
}
