import dynamic from 'next/dynamic'
import AppLayout from './globals'
import { useMemo } from 'react'
import { VIEWS } from './views'

const View = (props: any) => {
  return useMemo(() => {
    const Module = VIEWS[props.collectionName]

    return <Module {...props} />
  }, [props])
}

export const Property_frontend_Layout = AppLayout
export const Property_frontend_View = View
