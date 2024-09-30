import { Block } from 'payload'
import { RichText } from './RichText'
import { SearchProperties } from './SearchProperties'
import { HeroSearch } from './HeroSearch'
import { Search } from './Search'
export const BLOCKS: Block[] = [
  RichText(),
  HeroSearch(),
  Search(),
  SearchProperties(),
]
