import { GetStaticPropsContext } from 'next'

import {
  getProps as getPagesProps,
  getPaths as getPagesPaths,
} from './collections/Pages/providers/props.service'
import {
  getProps as getPropertiesProps,
  getPaths as getPropertiesPaths,
} from './collections/Properties/providers/props.service'
import { appProps } from './globals/providers/props.service'


export const Property_getStaticPaths = (collection: string) =>
  ({
    Pages: getPagesPaths,
    Properties: getPropertiesPaths,
  })[collection]

export const Property_getStaticProps = (collection: string) =>
  ({
    Pages: appProps(getPagesProps(async (ctx: GetStaticPropsContext) => ({ props: {} }))),
    Properties: appProps(getPropertiesProps(async (ctx: GetStaticPropsContext) => ({ props: {} }))),
  })[collection]
