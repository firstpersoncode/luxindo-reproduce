import { Button, Stack, Box, useTheme } from '@chakra-ui/react'
import { BottomSheet as RPBottomSheet } from 'react-spring-bottom-sheet'
import React, { JSX } from 'react'
import Head from 'next/head'

const BottomSheet = ({
  open,
  onDismiss,
  onClickAction,
  action,
  actionSecondary,
  children,
}: {
  open: boolean
  onDismiss: () => void
  onClickAction?: () => void
  action: string | JSX.Element
  actionSecondary?: string | JSX.Element
  children?: React.ReactNode
}) => {
  const theme = useTheme()
  return (
    <>
      <Head>
        <style>
          {`
          div[data-rsbs-overlay] {
            background-color:${theme.colors.brand.secondary};
          }
        `}
        </style>
      </Head>
      <RPBottomSheet
        open={open}
        onDismiss={onDismiss}
        header={false}
        expandOnContentDrag={true}
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, maxHeight / 4, maxHeight * 0.6]}
      >
        <Stack spacing={4} p={4} alignItems="center" position="relative">
          <Box>{children}</Box>

          <Stack w="100%" pt={4}>
            {typeof actionSecondary === 'string' ? (
              <Button
                fontSize={14}
                variant="outline"
                w="100%"
                onClick={onDismiss}
                borderRadius="xl"
              >
                {actionSecondary}
              </Button>
            ) : (
              actionSecondary
            )}
            {typeof action === 'string' ? (
              <Button
                onClick={onClickAction}
                backgroundColor="brand.primary"
                w="100%"
                borderRadius="xl"
                fontSize={14}
              >
                {action}
              </Button>
            ) : (
              action
            )}
          </Stack>
        </Stack>
      </RPBottomSheet>
    </>
  )
}

export default BottomSheet
