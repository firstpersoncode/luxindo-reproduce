import dynamic from 'next/dynamic'
import AppLayout from "./globals"

export const Property_frontend_Layout = AppLayout
export const Property_frontend_View = (collection: string) =>
  ({
    Pages: dynamic(() => import('./views/Pages')),
    Properties: dynamic(() => import('./views/Properties')),
  })[collection]
