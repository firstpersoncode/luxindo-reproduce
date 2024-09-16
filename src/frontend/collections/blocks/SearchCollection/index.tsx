import React, { useState } from 'react'
import { Box, Button, HStack, IconButton, VStack } from '@chakra-ui/react'
import SearchFilters from './SearchFilters'
import FilterSection from './FIlterSection'
import PropertyList from './PropertyList'
import Tune from '@mui/icons-material/Tune'
import BottomSheet from './BottomSheet'
import Providers from './libs/providers'
import StickyBox from 'react-sticky-box'

const Layout: React.FC<any> = ({ ...props }) => {
  const [openFilter, setOpenFilter] = useState(false)

  return (
    <Providers context={{ ...props }}>
      <VStack spacing={8} align="stretch">
        <SearchFilters />

        <HStack display="flex" gap={2} alignItems={'flex-start'} position="relative">
          <StickyBox offsetTop={20} offsetBottom={20}>
            <Box position="sticky" top={20} minW="350px" visibility={['hidden', 'visible']} h={[0, 'auto']}>
              <FilterSection />
            </Box>
          </StickyBox>
          <Box flex={1}>
            <PropertyList />
          </Box>
        </HStack>
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
        <SearchFilters />
        <FilterSection />
      </BottomSheet>
    </Providers>
  )
}

export default Layout
