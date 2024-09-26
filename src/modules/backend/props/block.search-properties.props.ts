import { GetStaticPropsContext } from 'next'
import { BasePayload } from 'payload'

export const getProps = async (ctx: GetStaticPropsContext, data: any, payload: BasePayload) => {
  if (!data.sections) return
  const blocks = data.sections.filter((section: any) => section.blockType === 'SearchProperties')
  if (!blocks.length) return

  for (const block of blocks) {
    const filter: any = {
      area_1: block.filter_area_1 ?? undefined,
      area_2: block.filter_area_2 ?? undefined,
      type: block.filter_type ?? undefined,
      ownership: block.filter_ownership ?? undefined,
    }

    let where: any = {}
    where.and = [{ type: { exists: true } }]
    if (filter.type) where.and.push({ type: { equals: filter.type } })
    if (filter.ownership) where.and.push({ ownership: { equals: filter.ownership } })
    if (filter.area_1) where.and.push({ area_1: { equals: filter.area_1 } })
    if (filter.area_2) where.and.push({ area_2: { equals: filter.area_2 } })

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
