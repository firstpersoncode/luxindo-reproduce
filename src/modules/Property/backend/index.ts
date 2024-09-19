import { generateSiteMap } from './generateSiteMap'
import { NextRequest, NextResponse } from 'next/server'
import { ROUTES } from './api'
import { GetStaticPropsContext } from 'next'
import { getProps as getPagesProps, getPaths as getPagesPaths } from './props/pages.props'
import {
  getProps as getPropertiesProps,
  getPaths as getPropertiesPaths,
} from './props/properties.props'
import { appProps } from './props/app.props'

export const Property_backend_apiHandler =
  (method: string) =>
  async (req: NextRequest, { params, ...rest }: { params: { slugs: string[] } }) => {
    const slugs = params.slugs
    if (!slugs || slugs.length === 0) {
      if (method !== 'GET') return NextResponse.json({ error: 'Not found' }, { status: 404 })
      else {
        const requestHeaders = new Headers(req.headers)
        const ipAddress = requestHeaders.get('x-forwarded-for')
        return Response.json({ ipAddress })
      }
    }

    const route = ROUTES[slugs.join('/')]
    if (!route || route.method !== method)
      return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return route.handler(req, { params, ...rest })
  }

export const Property_backend_generateSiteMap = generateSiteMap

export const Property_backend_getStaticPaths = (collection: string) =>
  ({
    Pages: getPagesPaths,
    Properties: getPropertiesPaths,
  })[collection]

export const Property_backend_getStaticProps = (collection: string) =>
  ({
    Pages: appProps(getPagesProps(async (ctx: GetStaticPropsContext) => ({ props: {} }))),
    Properties: appProps(getPropertiesProps(async (ctx: GetStaticPropsContext) => ({ props: {} }))),
  })[collection]
