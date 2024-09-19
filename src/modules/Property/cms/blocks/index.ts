import { Block } from 'payload'
import { RichText } from './RichText'
import { SearchProperties } from './SearchProperties'

export const BLOCKS: Block[] = [
  RichText({ name: 'content', label: 'Content' }),
  SearchProperties({ name: 'search_properties', label: 'Search Properties' }),
]
