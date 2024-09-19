import { GetStaticPropsContext } from 'next'
import { BasePayload } from 'payload'

export const getProps = async (ctx: GetStaticPropsContext, data: any, payload: BasePayload) => {
  if (!data.sections) return
  const blocks = data.sections.filter((section: any) => section.blockType === 'SearchProperties')
  if (!blocks.length) return

  for (const block of blocks) {
    const searchResult = await payload.find({
      collection: 'properties', // required
      // where: { slug: { equals: !!slug && slug !== '/' ? slug : 'index' } },
      // depth: 2,
      locale: (ctx.locale || '') as 'en' | 'id' | 'fr' | 'all' | undefined,
      fallbackLocale: 'en',
      // user: dummyUser,
      // overrideAccess: false,
      // showHiddenFields: true,
    })

    block.docs = searchResult.docs
    const blockIndex = data.sections.findIndex((s: any) => s.id === block.id)
    data.sections[blockIndex] = block
  }
}
