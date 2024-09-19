import dynamic from 'next/dynamic'

export const BLOCKS: { [x: string]: any } = {
  RichText: dynamic(() => import('./RichText')),
  SearchCollection: dynamic(() => import('./SearchCollection')),
  SearchProperties: dynamic(() => import('./SearchProperties')),
}