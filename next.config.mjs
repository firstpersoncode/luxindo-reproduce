import { withPayload } from '@payloadcms/next/withPayload'
import { locales, defaultLocale } from './src/modules/locales.js'

// const getHostName = (url) => {
//   const hostName = new URL(url).hostname
//   return hostName.startsWith('www.') ? hostName.slice(4) : hostName
// }

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
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: "**",
        port: '',
        pathname: '/**'
      }
    ]
  },
  reactStrictMode: false,
  experimental: {
    esmExternals: false
  }
}

export default withPayload(nextConfig)
