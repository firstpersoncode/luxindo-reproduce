import { Module_getStaticProps } from '@/modules/backend.modules'
import { Module_View } from '@/modules/frontend.modules'
const View = Module_View('Property')
export default View('Pages')
const getProps = Module_getStaticProps('Property')
export const getStaticProps = getProps('Pages')
