// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

// import { S3Client } from '@aws-sdk/client-s3'
// import s3Upload from 'payload-s3-upload'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Agents } from './collections/Agents'
import { Properties } from './collections/Properties'

const storagePlugin = s3Storage({
  collections: {
    media: true,
  },
  bucket: process.env.S3_BUCKET_NAME as string,
  config: {
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY as string,
      secretAccessKey: process.env.S3_SECRET_KEY as string,
    },
  },
})

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Agents, Properties],
  localization: {
    locales: ['en', 'id', 'fr'],
    defaultLocale: 'en',
    fallback: true,
  },
  editor: lexicalEditor(),
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
    storagePlugin,

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
  ],
})
