import { Module_getStaticPaths, Module_getStaticProps } from '@/modules/props.modules'
import { Module_view } from '@/modules/view.modules'
export default Module_view('Property')('Properties')
export const getStaticPaths = Module_getStaticPaths('Property')('Properties')
export const getStaticProps = Module_getStaticProps('Property')('Properties')
