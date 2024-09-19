import { Property_frontend_Layout, Property_frontend_View } from './Property/frontend'

export const Module_View = (moduleName: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_frontend_View,
  }

  return modules[moduleName]
}

export const Module_Layout = (moduleName: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_frontend_Layout,
  }

  return modules[moduleName]
}
