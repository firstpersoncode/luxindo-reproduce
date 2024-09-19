import { Agents } from './collections/Agents/config'
import { Media } from './collections/Media/config'
import { Pages } from './collections/Pages/config'
import { Properties } from './collections/Properties/config'
import { Users } from './collections/Users/config'
import { Footer } from './globals/Footer/config'
import { Header } from './globals/Header/config'
import { CollectionConfig, Config, GlobalConfig } from 'payload'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const COLLECTIONS: CollectionConfig[] = [Users, Media, Agents, Properties, Pages]
const GLOBALS: GlobalConfig[] = [Header, Footer]
export const Property_buildConfig = (payloadConfig: Config) => {
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
