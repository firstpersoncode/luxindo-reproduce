import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.builder.io',
      port: '',
      pathname: '/**',
    },],
  },
  reactStrictMode: false
}

export default withPayload(nextConfig)
