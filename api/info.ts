import type { VercelRequest, VercelResponse } from '@vercel/node'
import amap from '../lib/helpers/amap'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { data } = await amap.get('/ip', {
    params: { ip: '119.120.221.151' }
  })

  return response.json(data)
}