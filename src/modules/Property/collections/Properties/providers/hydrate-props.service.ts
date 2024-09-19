import axios from 'axios'
import { IContext } from '.'

export const hydrateProps = async (id: number, params: any): Promise<IContext['data']> => {
  const qs =
    '?' +
    Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&')
  const res = await axios.get(process.env.NEXT_PUBLIC_APP_URL + '/api/properties/' + id + qs)
  return res.data
}
