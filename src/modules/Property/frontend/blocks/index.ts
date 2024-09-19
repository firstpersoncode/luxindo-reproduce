import dynamic from 'next/dynamic'

export const BLOCKS: { [x: string]: any } = {
  RichText: dynamic(() => import('./RichText')),
  SearchProperties: dynamic(() => import('./SearchProperties')),
}