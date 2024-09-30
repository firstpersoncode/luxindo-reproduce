import { LOCATIONS } from '@/modules/options'
import { GetStaticPropsContext } from 'next'
import { BasePayload } from 'payload'

export const getProps = async (ctx: GetStaticPropsContext, data: any, payload: BasePayload) => {
  if (!data.sections) return
  const blocks = data.sections.filter((section: any) => section.blockType === 'Search')
  if (!blocks.length) return

  for (const block of blocks) {
    const filter: any = {
      area_1: block.filter_area?.split(',').length ? block.filter_area.split(',') : undefined,
      area_2: block.filter_sub_area?.split(',').length
        ? block.filter_sub_area.split(',')
        : undefined,
      type: block.filter_types.length ? block.filter_types : undefined,
      ownership: block.filter_ownerships.length ? block.filter_ownerships : undefined,
      price_start: block.filter_price_start,
      price_end: block.filter_price_end,
    }

    let where: any = {}
    where.and = [{ type: { exists: true } }]
    if (filter.type) {
      const types = filter.type
      where.and.push({ type: { in: types } })
    }
  
    if (filter.ownership) {
      const ownerships = filter.ownership
      where.and.push({ ownership: { in: ownerships } })
    }
  
    let or: any[] = []
  
    if (filter.area_1) {
      const areas = filter.area_1
      areas.forEach((area: any) => {
        or.push({ area_1: { equals: area } })
      })
    }
  
    if (filter.area_2) {
      const areas = filter.area_2
      areas.forEach((area: any) => {
        const options = LOCATIONS
        const parent = options.find((o) => o.children?.find((c) => c.value === area))
        or = or.filter((a: any) => a.area_1?.equals !== parent?.value)
        or.push({ area_2: { equals: area } })
      })
    }
  
    if (or.length > 0) where.and.push({ or })
  
    if (filter.price_start) where.and.push({ price: { greater_than_equal: filter.price_start } })
    if (filter.price_end) where.and.push({ price: { less_than_equal: filter.price_end } })

    const searchResult = await payload.find({
      collection: 'properties', // required
      ...(Object.keys(where).length > 0 ? { where } : {}),
      // depth: 2,
      locale: (ctx.locale || '') as 'en' | 'id' | 'fr' | 'all' | undefined,
      fallbackLocale: 'en',
      // user: dummyUser,
      // overrideAccess: false,
      // showHiddenFields: true,
    })

    block.docs = searchResult.docs
    block.filter = filter
    const blockIndex = data.sections.findIndex((s: any) => s.id === block.id)
    data.sections[blockIndex] = block
  }
}
