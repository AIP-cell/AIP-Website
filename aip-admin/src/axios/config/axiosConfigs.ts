import axios from 'axios'

import { BaseUrl } from '@/utils/BaseUrl'

const headers: { [key: string]: string } = {
  'Content-Type': 'application/json'
}

export const axiosClient = axios.create({
  baseURL: BaseUrl,
  headers
})

export default axiosClient
