import { Button, Heading, Stack, Text, Skeleton, Box } from '@chakra-ui/react'
import { BottomSheet as RPBottomSheet } from 'react-spring-bottom-sheet'
import NextImage from 'next/image'
import React, { JSX, useState } from 'react'

const BottomSheet = ({
  image,
  open,
  onDismiss,
  onClickAction,
  action,
  actionSecondary,
  isLoading,
  children,
}: {
  image: { src: string; width: number; height: number; alt: string }
  open: boolean
  onDismiss: () => void
  onClickAction?: () => void
  action: string | JSX.Element
  actionSecondary?: string | JSX.Element
  isLoading?: boolean
  children?: React.ReactNode
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <RPBottomSheet
      open={open}
      onDismiss={onDismiss}
      header={false}
      expandOnContentDrag={true}
      defaultSnap={({ maxHeight }) => maxHeight / 2}
      snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, maxHeight / 4, maxHeight * 0.6]}
    >
      <Stack spacing={4} p={4} alignItems="center" position="relative">
        {!imageLoaded && <Skeleton width={`${image.width}px`} height={`${image.height}px`} />}

        <Box
          as="span"
          visibility={imageLoaded ? 'visible' : 'hidden'}
          position={imageLoaded ? 'static' : 'absolute'}
        >
          <NextImage
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt ?? ''}
            onLoad={() => setImageLoaded(true)}
          />
        </Box>

        <Box>{children}</Box>

        <Stack w="100%" pt={4}>
          {typeof actionSecondary === 'string' ? (
            <Button fontSize={14} variant="outline" w="100%" onClick={onDismiss} borderRadius="xl">
              {actionSecondary}
            </Button>
          ) : (
            actionSecondary
          )}
          {typeof action === 'string' ? (
            <Button
              onClick={onClickAction}
              variant="primary"
              w="100%"
              borderRadius="xl"
              fontSize={14}
              isLoading={!!isLoading}
            >
              {action}
            </Button>
          ) : (
            action
          )}
        </Stack>
      </Stack>
    </RPBottomSheet>
  )
}

export default BottomSheet
