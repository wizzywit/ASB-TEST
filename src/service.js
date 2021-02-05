import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const apiClient = axios.create({
  baseURL: `https://fakerapi.it/api/v1/`,
  headers: {
    Accept: 'application/json',
  }
})
apiClient.interceptors.request.use(config => {
  Nprogress.start()
  return config
})
apiClient.interceptors.response.use(
  response => {
    Nprogress.done()
    return response
  },
  error => {
    Nprogress.done()
    if (error.response.status === 403) {
      console.log('take me some other place')
    }
    return Promise.reject(error)
  }
)
export { apiClient }
