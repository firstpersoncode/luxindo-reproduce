import { Block } from 'payload'
import { RichText } from './RichText'
import { SearchProperties } from './SearchProperties'
import { HeroSearch } from './HeroSearch'
import { Search } from './Search'
import { Margin } from './Margin'
export const BLOCKS: Block[] = [
  RichText(),
  HeroSearch(),
  Search(),
  SearchProperties(),
  Margin()
]
