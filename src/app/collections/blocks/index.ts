import { Block } from 'payload'
import { RichText } from './RichText'
import { SearchCollection } from './SearchCollection'

export const BLOCKS: Block[] = [
  RichText({ name: 'content', label: 'Content' }),
  SearchCollection({ name: 'search_collection', label: 'Search Collection' }),
]
