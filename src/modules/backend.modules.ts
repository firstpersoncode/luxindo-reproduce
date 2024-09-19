import {
  Property_backend_generateSiteMap,
  Property_backend_apiHandler,
  Property_backend_getStaticPaths,
  Property_backend_getStaticProps,
} from './Property/backend'

export const Module_apiHandler = (moduleName: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_backend_apiHandler,
  }

  return modules[moduleName]
}

export const Module_generateSiteMap = (moduleName: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_backend_generateSiteMap,
  }

  return modules[moduleName]
}

export const Module_getStaticPaths = (moduleName: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_backend_getStaticPaths,
  }

  return modules[moduleName]
}

export const Module_getStaticProps = (moduleName: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_backend_getStaticProps,
  }

  return modules[moduleName]
}
