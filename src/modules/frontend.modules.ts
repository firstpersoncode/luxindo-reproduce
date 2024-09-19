import { Property_frontend_Layout, Property_frontend_View } from './Property/frontend'

export const Module_View = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_frontend_View,
  }

  return modules[module]
}

export const Module_Layout = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_frontend_Layout,
  }

  return modules[module]
}
