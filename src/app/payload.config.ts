import { postgresAdapter } from '@payloadcms/db-postgres'
import path from 'path'
import { buildConfig, Config } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { defaultLocale, locales } from '@/locales'
import { CMS_payloadConfig } from '@/modules/cms'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const config: Config = {
  admin: {
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
  }),
  sharp,
  localization: {
    locales,
    defaultLocale,
    fallback: true,
  },
}

export default buildConfig(CMS_payloadConfig(config))
