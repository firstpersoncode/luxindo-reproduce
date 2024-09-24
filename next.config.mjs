import { withPayload } from '@payloadcms/next/withPayload'
import { locales, defaultLocale } from './src/locales.js'

const getHostName = (url) => {
  const hostName = new URL(url).hostname
  return hostName.startsWith('www.') ? hostName.slice(4) : hostName
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales,
    defaultLocale,
  },
  images: {
    domains: [getHostName(process.env.NEXT_PUBLIC_APP_URL ?? ''), 'cdn.builder.io'],
  },
  reactStrictMode: false,
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
}

export default withPayload(nextConfig)
