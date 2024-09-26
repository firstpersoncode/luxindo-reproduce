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
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/file/**'
      },
      {
        protocol: 'https',
        hostname: getHostName(process.env.NEXT_PUBLIC_APP_URL),
        port: '',
        pathname: '/api/media/file/**'
      }
    ]
  },
  reactStrictMode: false,
}

export default withPayload(nextConfig)
