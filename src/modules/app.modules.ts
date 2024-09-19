import { NextRequest, NextResponse } from 'next/server'
import { ROUTES as Property_ROUTES } from './Property/api/routes'
import { generateSiteMap as Property_generateSiteMap } from './Property/generateSiteMap'

export const Module_routes = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_ROUTES,
    // Blogger: Blogger_ROUTES,
  }

  return modules[module]
}

export const Module_apiHandler =
  (module: string) =>
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

    const route = Module_routes(module)[slugs.join('/')]
    if (!route || route.method !== method)
      return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return route.handler(req, { params, ...rest })
  }

export const Module_generateSiteMap = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_generateSiteMap,
    // Blogger: Blogger_generateSiteMap,
  }

  return modules[module]
}
