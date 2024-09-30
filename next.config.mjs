import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'id', 'fr'],
    defaultLocale: 'en',
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'localhost',
  //       port: '3001',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: '**',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  experimental: {
    turbo: {
      memoryLimit: 4096,
    },
    serverSourceMaps: false,
    webpackMemoryOptimizations: true,
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      })
    }
    // Important: return the modified config
    return config
  },
}

export default withPayload(nextConfig)
