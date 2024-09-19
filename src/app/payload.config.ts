import { postgresAdapter } from '@payloadcms/db-postgres'
import path from 'path'
import { buildConfig, Config } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { defaultLocale, locales } from '@/libs/locales'
import { Module_payloadConfig } from '@/modules/cms.modules'

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

const payloadConfig = Module_payloadConfig('Property')

export default buildConfig(payloadConfig(config))
