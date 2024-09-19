import { Module_getStaticPaths, Module_getStaticProps } from '@/modules/backend.modules'
import { Module_View } from '@/modules/frontend.modules'

export default Module_View('Property')
export const getStaticPaths = Module_getStaticPaths('Property')
export const getStaticProps = Module_getStaticProps('Property')
