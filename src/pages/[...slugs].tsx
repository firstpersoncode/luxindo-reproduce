import { Backend_getStaticPaths, Backend_getStaticProps } from '@/modules/backend'
import { Frontend_View } from '@/modules/frontend'

export default Frontend_View
// export const getStaticPaths = Backend_getStaticPaths
export const getServerSideProps = Backend_getStaticProps
