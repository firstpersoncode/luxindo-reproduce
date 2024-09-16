// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

// import { s3Storage } from '@payloadcms/storage-s3'
// import { S3Client } from '@aws-sdk/client-s3'
// import s3Upload from 'payload-s3-upload'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Agents } from './collections/Agents'
import { Properties } from './collections/Properties'

import { locales, defaultLocale } from '../libs/locales'
import { Pages } from './collections/Pages'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

// const storagePlugin = s3Storage({
//   collections: {
//     media: true,
//   },
//   bucket: process.env.S3_BUCKET_NAME as string,
//   config: {
//     endpoint: process.env.S3_ENDPOINT,
//     region: process.env.S3_REGION,
//     credentials: {
//       accessKeyId: process.env.S3_ACCESS_KEY as string,
//       secretAccessKey: process.env.S3_SECRET_KEY as string,
//     },
//   },
// })

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Agents, Properties, Pages],
  globals: [Header, Footer],
  localization: {
    locales,
    defaultLocale,
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // storagePlugin,

    // s3Upload(
    //   new S3Client({
    //     endpoint: process.env.S3_ENDPOINT,
    //     region: process.env.S3_REGION,
    //     credentials: {
    //       accessKeyId: process.env.S3_ACCESS_KEY as string,
    //       secretAccessKey: process.env.S3_SECRET_KEY as string,
    //     },
    //   }),
    // ),

    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
