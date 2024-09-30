import axios from 'axios'

export const search = async (params: any): Promise<any> => {
  try {
    Object.keys(params).forEach((key) => {
      if (
        !params[key] ||
        (Array.isArray(params[key]) && !params[key].length) ||
        params[key] === '0' ||
        params[key] === 'any' ||
        params[key] === 'all'
      )
        delete params[key]
      else if (Array.isArray(params[key])) params[key] = params[key].join('|')
    })

    const qs =
      '?' +
      Object.keys(params)
        .map((key) => key + '=' + encodeURIComponent(params[key]))
        .join('&')

    const res = await axios.get(`/api/modules/search-properties${qs}`)
    return res.data
  } catch (err) {
    console.error(err)
    return []
  }
}
