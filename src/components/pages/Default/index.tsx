import Providers, { IContext } from './providers'
import { Box, Container, VStack } from '@chakra-ui/react'
import Components from './components'

export default function RootLayout({ context }: { context: IContext }) {
  return (
    <Providers context={{ ...context }}>
      <Box bg="white">
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Components />
          </VStack>
        </Container>
      </Box>
    </Providers>
  )
}
