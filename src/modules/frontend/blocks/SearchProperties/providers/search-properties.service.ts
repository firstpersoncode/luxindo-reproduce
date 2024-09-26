import axios from 'axios'

export const search = async (params: any): Promise<any> => {
  try {
    const qs =
      '?' +
      Object.keys(params)
        .map((key) => key + '=' + encodeURIComponent(params[key]))
        .join('&')

    const res = await axios.get(
      process.env.NEXT_PUBLIC_APP_URL + '/api/modules/search-properties' + qs,
    )
    return res.data
  } catch (err) {
    console.error(err)
    return []
  }
}
