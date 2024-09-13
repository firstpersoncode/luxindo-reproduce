import { withPayload } from '@payloadcms/next/withPayload'

const getHostName = (url) => {
  const hostName = new URL(url).hostname
  return hostName.startsWith('www.') ? hostName.slice(4) : hostName
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['en', 'fr', 'id'],
  //   defaultLocale: 'en',
  // },
  images: {
    domains: [getHostName(process.env.APP_URL ?? "")],
  },
  reactStrictMode: false,
  experimental: {
    turbo: {
      moduleIdStrategy: 'deterministic',
    },
  },
}

export default withPayload(nextConfig)
