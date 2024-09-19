import { Config } from 'payload'
import { Property_buildConfig } from './Property/payload.modules'

export const Module_buildConfig = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: (config: Config) => Property_buildConfig(config),
    // Blogger: (config: Config) => Blogger_buildConfig(config)
  }

  return modules[module]
}
