import AppLayout from './globals'
import { useMemo } from 'react'
import { VIEWS } from './views'

export const Frontend_Layout = AppLayout
export const Frontend_View = (props: any) => {
  return useMemo(() => {
    const Module = VIEWS[props.collectionName]
    return <Module {...props} />
  }, [props])
}
