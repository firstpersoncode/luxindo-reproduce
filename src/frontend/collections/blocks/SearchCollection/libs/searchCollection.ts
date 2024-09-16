import axios from 'axios'

export const searchCollection = async (params: any): Promise<any> => {
  try {
    const qs =
      '?' +
      Object.keys(params)
        .map((key) => key + '=' + encodeURIComponent(params[key]))
        .join('&')

    const res = await axios.get(
      process.env.NEXT_PUBLIC_APP_URL + '/api/payload/properties/search' + qs,
    )
    return res.data
  } catch (err) {
    console.error(err)
    return null
  }
}
