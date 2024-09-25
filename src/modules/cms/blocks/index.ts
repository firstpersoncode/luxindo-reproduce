import { Block } from 'payload'
import { RichText } from './RichText'
import { SearchProperties } from './SearchProperties'
import { HeroSearch } from './HeroSearch'

export const BLOCKS: Block[] = [
  RichText(),
  HeroSearch(),
  SearchProperties(),
]
