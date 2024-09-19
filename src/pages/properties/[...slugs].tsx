import { Module_getStaticPaths, Module_getStaticProps } from '@/modules/backend.modules'
import { Module_View } from '@/modules/frontend.modules'
const View = Module_View('Property')
export default View('Properties')
const getPaths = Module_getStaticPaths('Property')
export const getStaticPaths = getPaths('Properties')
const getProps = Module_getStaticProps('Property')
export const getStaticProps = getProps('Properties')
