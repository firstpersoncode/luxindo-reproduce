import Head from 'next/head'
import { useMemo } from 'react'
import Providers, { useContextProvider } from './providers'
import { motion } from 'framer-motion'
import { Box, CircularProgress } from '@chakra-ui/react'
import { BLOCKS } from '@/modules/frontend/blocks'
import { Text } from '@chakra-ui/react'

export default function Page({ ...props }: any) {
  return (
    <Providers context={{ ...props.context }}>
      <Layout />
    </Providers>
  )
}

function Layout() {
  const { data, isRouteChanging } = useContextProvider()
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {isRouteChanging && <LoadingLayout />}
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
      </Head>
      {data.sections.map((block: any) => <MapBlock key={block.id} {...block} />)}
    </motion.div>
  )
}

function MapBlock({ ...block }: any) {
  return useMemo(() => {
    const Block = BLOCKS[block.blockType]
    if (!Block) return <Text>Block {block.blockType} Not found</Text>
    return <Block {...block} />
  }, [block])
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
      <CircularProgress isIndeterminate color="brand.primary" />
    </Box>
  )
}
