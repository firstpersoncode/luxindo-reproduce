import { Module_getStaticPaths, Module_getStaticProps } from '@/modules/props.modules'
import { Module_view } from '@/modules/view.modules'
export default Module_view('Property')('Pages')
export const getStaticPaths = Module_getStaticPaths('Property')('Pages')
export const getStaticProps = Module_getStaticProps('Property')('Pages')
