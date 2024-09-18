import { withPayload } from '@payloadcms/next/withPayload'
import { locales, defaultLocale } from './src/libs/locales.js'

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
}

export default withPayload(nextConfig)
