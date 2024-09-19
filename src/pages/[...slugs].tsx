import { Module_getStaticPaths, Module_getStaticProps } from '@/modules/backend.modules'
import { Module_View } from '@/modules/frontend.modules'
const View = Module_View('Property')
export default View('Pages')
const getPaths = Module_getStaticPaths('Property')
export const getStaticPaths = getPaths('Pages')
const getProps = Module_getStaticProps('Property')
export const getStaticProps = getProps('Pages')
