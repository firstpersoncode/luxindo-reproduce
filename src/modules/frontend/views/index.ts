import dynamic from 'next/dynamic'

export const VIEWS: { [x: string]: any } = {
  Pages: dynamic(() => import('./Pages')),
  Properties: dynamic(() => import('./Properties')),
}
