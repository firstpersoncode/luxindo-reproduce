import { Agents } from './collections/Agents'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Properties } from './collections/Properties'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { CollectionConfig, Config, GlobalConfig } from 'payload'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const COLLECTIONS: CollectionConfig[] = [Users, Media, Agents, Properties, Pages]
const GLOBALS: GlobalConfig[] = [Header, Footer]

export const CMS_payloadConfig = (payloadConfig: Config) => {
  payloadConfig.admin = {
    ...payloadConfig.admin,
    user: Users.slug,
  }

  payloadConfig.collections = [...(payloadConfig.collections ?? []), ...COLLECTIONS]
  payloadConfig.globals = [...(payloadConfig.globals ?? []), ...GLOBALS]
  payloadConfig.plugins = [
    ...(payloadConfig.plugins ?? []),
    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ]

  return payloadConfig
}
