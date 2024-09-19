import { Property_getStaticPaths, Property_getStaticProps } from './Property/props.modules'

export const Module_getStaticPaths = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: (template: string) => Property_getStaticPaths(template),
    // Blogger: (template: string) => Blogger_getStaticPaths(template)
  }

  return modules[module]
}

export const Module_getStaticProps = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: (template: string) => Property_getStaticProps(template),
    // Blogger: (template: string) => Blogger_getStaticPaths(template)
  }

  return modules[module]
}
