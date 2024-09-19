import { Block } from 'payload'
import { RichText } from './RichText/config'
import { SearchProperties } from './SearchProperties/config'

export const BLOCKS: Block[] = [
  RichText({ name: 'content', label: 'Content' }),
  SearchProperties({ name: 'search_properties', label: 'Search Properties' }),
]
