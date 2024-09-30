import dynamic from 'next/dynamic'

export const BLOCKS: { [x: string]: any } = {
  RichText: dynamic(() => import('./RichText')),
  Search: dynamic(() => import('./Search')),
  HeroSearch: dynamic(() => import('./HeroSearch')),
  // SearchProperties: dynamic(() => import('./SearchProperties')),
}