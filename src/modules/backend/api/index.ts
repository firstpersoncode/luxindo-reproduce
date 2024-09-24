import { searchPropertiesApi } from './search-properties.api'

export const ROUTES: { [x: string]: any } = {
  'search-properties': {
    method: "GET",
    handler: searchPropertiesApi
  },
}