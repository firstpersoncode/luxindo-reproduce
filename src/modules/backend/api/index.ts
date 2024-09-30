import { search } from './search.api'

export const ROUTES: { [x: string]: any } = {
  'search': {
    method: "GET",
    handler: search
  },
}