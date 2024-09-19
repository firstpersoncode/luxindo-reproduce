import dynamic from 'next/dynamic'

export const PAGE_TEMPLATES: { [x: string]: any } = {
  Default: dynamic(() => import('./Default')),
  Search: dynamic(() => import('./Search')),
}