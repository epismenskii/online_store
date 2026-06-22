import axios from 'axios'

const createAxios = () =>
  axios.create({
    baseURL: 'https://shop-geeks.up.railway.app/api/v1',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  })

const $mainApi = createAxios()
const $authApi = createAxios()

$authApi.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

$authApi.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401) {
      try {
        const { data } = await $mainApi.post('/auth/refresh')
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken)
        }
        return $authApi.request(originalRequest)
      } catch (e) {
        return Promise.reject(e)
      }
    }
    return Promise.reject(error)
  },
)

export { $mainApi, $authApi }
