import {
  Property_backend_generateSiteMap,
  Property_backend_apiHandler,
  Property_backend_getStaticPaths,
  Property_backend_getStaticProps,
} from './Property/backend'

export const Module_apiHandler = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_backend_apiHandler,
  }

  return modules[module]
}

export const Module_generateSiteMap = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_backend_generateSiteMap,
  }

  return modules[module]
}

export const Module_getStaticPaths = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_backend_getStaticPaths,
  }

  return modules[module]
}

export const Module_getStaticProps = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_backend_getStaticProps,
  }

  return modules[module]
}
