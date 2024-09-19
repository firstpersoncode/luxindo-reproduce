import { Agents } from '../cms/collections/Agents'
import { Media } from '../cms/collections/Media'
import { Pages } from '../cms/collections/Pages'
import { Properties } from '../cms/collections/Properties'
import { Users } from '../cms/collections/Users'
import { Footer } from '../cms/globals/Footer'
import { Header } from '../cms/globals/Header'
import { CollectionConfig, Config, GlobalConfig } from 'payload'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const COLLECTIONS: CollectionConfig[] = [Users, Media, Agents, Properties, Pages]
const GLOBALS: GlobalConfig[] = [Header, Footer]

export const Property_cms_payloadConfig = (payloadConfig: Config) => {
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