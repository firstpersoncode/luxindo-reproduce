import { Property_view } from './Property/view.modules'
import Property_AppLayout from './Property/globals'

export const Module_view = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: (collection: string) => Property_view(collection),
    // Blogger: (collection: string) => Blogger_page(collection),
  }

  return modules[module]
}

export const Module_layout = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_AppLayout,
    // Blogger: (collection: string) => Blogger_page(collection),
  }

  return modules[module]
}
