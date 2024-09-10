import { NextRequest } from 'next/server'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'

export const GET = async (req: NextRequest) => {
  // const payload = await getPayload({
  //   config: configPromise,
  // })

  // const data = await payload.find({
  //   collection: 'users',
  // })

  const requestHeaders = new Headers(req.headers)

  const ipAddress = requestHeaders.get('x-forwarded-for')

  return Response.json({ ipAddress })
}
