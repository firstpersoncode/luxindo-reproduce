import { Block } from 'payload'
import { RichText } from './RichText/config'
import { SearchCollection } from './SearchCollection/config'
import { SearchProperties } from './SearchProperties/config'

export const BLOCKS: Block[] = [
  RichText({ name: 'content', label: 'Content' }),
  SearchCollection({ name: 'search_collection', label: 'Search Collection' }),
  SearchProperties({ name: 'search_properties', label: 'Search Properties' }),
]
