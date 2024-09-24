import Head from 'next/head'
import { PAGE_TEMPLATES } from './templates'
import { useMemo } from 'react'
import Providers, { useContextProvider } from './providers'
import { motion } from 'framer-motion'
import { Box, CircularProgress } from '@chakra-ui/react'

export default function Page({ ...props }: any) {
  return (
    <Providers context={{ ...props.context }}>
      <Layout />
    </Providers>
  )
}

function Layout() {
  const { data, metadata, isRouteChanging } = useContextProvider()
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {isRouteChanging && <LoadingLayout />}
      <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
      </Head>
      <MapTemplate template={data.template} />
    </motion.div>
  )
}

function MapTemplate({ template }: any) {
  return useMemo(() => {
    const Template = PAGE_TEMPLATES[template] ?? PAGE_TEMPLATES['Default']
    return <Template />
  }, [template])
}

function LoadingLayout() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      backgroundColor="rgba(255,255,255,0.5)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={9999}
    >
      <CircularProgress isIndeterminate color="green.300" />
    </Box>
  )
}