import React, { useState } from 'react'
import { Box, Button, Container, IconButton, VStack } from '@chakra-ui/react'
import SearchFilters from './SearchFilters'
import FilterSection from './FIlterSection'
import PropertyList from './PropertyList'
import Tune from '@mui/icons-material/Tune'
import BottomSheet from './BottomSheet'

const Layout: React.FC<any> = ({ ...props }) => {
  const [openFilter, setOpenFilter] = useState(false)

  return (
    <Box bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <SearchFilters onSubmit={() => setOpenFilter(false)} />

          <Box
            display="flex"
            gap={2}
            alignItems={'flex-start'}
            position="relative"
            flexDirection={['column', 'row']}
          >
            <Box minW="350px" visibility={['hidden', 'visible']} h={[0, 'auto']}>
              <FilterSection />
            </Box>
            <Box flex={1}>
              <PropertyList />
            </Box>
          </Box>
        </VStack>

        <IconButton
          variant="outline"
          position="fixed"
          bottom="120px"
          right="120px"
          left="120px"
          colorScheme="teal"
          aria-label="Send email"
          visibility={['visible', 'hidden']}
          icon={<Tune />}
          onClick={() => setOpenFilter(true)}
        />

        <BottomSheet
          image={{
            src: '/next.svg',
            width: 50,
            height: 50,
            alt: '',
          }}
          open={openFilter}
          onDismiss={() => setOpenFilter(false)}
          action={<Button onClick={() => setOpenFilter(false)}>Update</Button>}
          actionSecondary="Cancel"
        >
          <SearchFilters onSubmit={() => setOpenFilter(false)} />
          <FilterSection />
        </BottomSheet>
      </Container>
    </Box>
  )
}

export default Layout
