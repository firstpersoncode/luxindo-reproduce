import dynamic from 'next/dynamic'

export const PAGE_TEMPLATES: { [x: string]: any } = {
  default: dynamic(() => import('./collections/Pages/templates/Default')),
}

export const PROPERTY_TEMPLATES: { [x: string]: any } = {
  default: dynamic(() => import('./collections/Properties/templates/Default')),
  collection: dynamic(() => import('./collections/Properties/templates/Collection')),
}

export const Property_view = (collection: string) =>
  ({
    Pages: dynamic(() => import('./collections/Pages')),
    Properties: dynamic(() => import('./collections/Properties')),
  })[collection]
