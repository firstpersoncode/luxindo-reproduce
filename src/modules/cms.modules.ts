import { Property_cms_payloadConfig } from './Property/cms'

export const Module_payloadConfig = (module: string) => {
  const modules: { [x: string]: any } = {
    Property: Property_cms_payloadConfig,
    // Blogger: (config: Config) => Blogger_buildConfig(config)
  }

  return modules[module]
}
