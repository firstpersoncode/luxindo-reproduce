import { postgresAdapter } from '@payloadcms/db-postgres'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { defaultLocale, locales } from '@/modules/locales'
import { Agents } from './collections/Agents'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Properties } from './collections/Properties'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { CollectionConfig, buildConfig, Config, GlobalConfig } from 'payload'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const COLLECTIONS: CollectionConfig[] = [Users, Media, Agents, Properties, Pages]
const GLOBALS: GlobalConfig[] = [Header, Footer]

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const config: Config = {
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: false,
  }),
  sharp,
  localization: {
    locales,
    defaultLocale,
    fallback: true,
  },
  collections: COLLECTIONS,
  globals: GLOBALS,
  plugins: [
    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
}

export const CMS_payloadConfig = buildConfig(config)
