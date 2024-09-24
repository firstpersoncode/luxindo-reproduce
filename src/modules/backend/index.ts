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

export const Backend_apiHandler =
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

export const Backend_generateSiteMap = generateSiteMap

export const Backend_getStaticPaths = async () => {
  const modules: { [x: string]: any } = {
    Pages: getPagesPaths,
    Properties: getPropertiesPaths,
  }

  const paths = []

  for (const collection in modules) {
    const _paths = await modules[collection]()
    paths.push(..._paths)
  }

  return {
    paths,
    fallback: 'blocking',
  }
}

const getCollectionName = (ctx: GetStaticPropsContext) => {
  const slugs = ctx.params?.slugs ?? ([] as string[])
  const availableCollections = ['Pages', 'Properties']
  let collectionName = slugs[0]
    ? slugs[0].charAt(0).toUpperCase() + slugs[0].slice(1)
    : availableCollections[0]
  if (!availableCollections.includes(collectionName)) collectionName = availableCollections[0]
  return collectionName
}

export const Backend_getStaticProps = async (ctx: GetStaticPropsContext) => {
  const modules: { [x: string]: any } = {
    Pages: getPagesProps,
    Properties: getPropertiesProps,
  }
  const res = await appProps(ctx)
  const collectionName = getCollectionName(ctx)
  const handler = modules[collectionName]
  return handler(res, ctx)
}
