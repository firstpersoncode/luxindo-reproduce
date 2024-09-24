import axios from 'axios'

export interface SearchParams {
  type: string
  ownership: string
  area_2: string
  area_1: string
  sku: string
}

export const search = async (params: SearchParams): Promise<any> => {
  try {
    const qs =
      '?' +
      Object.keys(params)
        .map((key) => key + '=' + encodeURIComponent(params[key as keyof SearchParams]))
        .join('&')

    const res = await axios.get(
      process.env.NEXT_PUBLIC_APP_URL + '/api/modules/search-properties' + qs,
    )
    return res.data
  } catch (err) {
    console.error(err)
    return null
  }
}
