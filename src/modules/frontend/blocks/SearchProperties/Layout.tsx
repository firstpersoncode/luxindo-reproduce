import React, { useState } from 'react'
import { Box, Button, Container, IconButton, VStack } from '@chakra-ui/react'
import PropertyList from './PropertyList'
import BottomSheet from './BottomSheet'
import { useContextProvider } from './providers'
import SearchForm from './SearchForm'

const Layout: React.FC<any> = ({ ...props }) => {
  const [openFilter, setOpenFilter] = useState(false)

  const { handleSearch } = useContextProvider()

  const submitSearch = () => {
    handleSearch()
    setOpenFilter(false)
  }

  return (
    <Box bg="white" mt="100px">
      <Container maxW="container.xl">
        <Box background="brand.secondary" padding="18px">
          <SearchForm />
        </Box>
        <PropertyList />

        <IconButton
          variant="outline"
          position="fixed"
          bottom="120px"
          right="120px"
          left="120px"
          colorScheme="teal"
          aria-label="Send email"
          visibility={['visible', 'hidden']}
          onClick={() => setOpenFilter(true)}
        />

        <BottomSheet
          image={{
            src: '/icons/next.svg',
            width: 50,
            height: 50,
            alt: '',
          }}
          open={openFilter}
          onDismiss={() => setOpenFilter(false)}
          action={<Button onClick={submitSearch}>Update</Button>}
          actionSecondary="Cancel"
        >
          <Box background="brand.secondary" padding="18px">
            <SearchForm />
          </Box>
        </BottomSheet>
      </Container>
    </Box>
  )
}

export default Layout
