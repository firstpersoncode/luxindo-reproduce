import { GetStaticPropsContext } from 'next'
import { BasePayload } from 'payload'

export const getSectionSearchProps = async (
  ctx: GetStaticPropsContext,
  data: any,
  payload: BasePayload,
) => {
  if (!data.sections) return
  const sections = data.sections.filter((section: any) => section.blockType === 'SearchCollection')
  if (!sections.length) return

  for (const section of sections) {
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

    section.docs = searchResult.docs
    const sectionIndex = data.sections.findIndex((s: any) => s.id === section.id)
    data.sections[sectionIndex] = section
  }
}
