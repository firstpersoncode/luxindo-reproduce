import { GetStaticPropsContext } from 'next'
import { BasePayload } from 'payload'

export const getProps = async (ctx: GetStaticPropsContext, data: any, payload: BasePayload) => {
  if (!data.sections) return
  const blocks = data.sections.filter((section: any) => section.blockType === 'HeroSearch')
  if (!blocks.length) return

  for (const block of blocks) {
    // do something
    const blockIndex = data.sections.findIndex((s: any) => s.id === block.id)
    data.sections[blockIndex] = block
  }
}
