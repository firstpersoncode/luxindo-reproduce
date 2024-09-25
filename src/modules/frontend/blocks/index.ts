import dynamic from 'next/dynamic'

export const BLOCKS: { [x: string]: any } = {
  RichText: dynamic(() => import('./RichText')),
  HeroSearch: dynamic(() => import('./HeroSearch')),
  SearchProperties: dynamic(() => import('./SearchProperties')),
}