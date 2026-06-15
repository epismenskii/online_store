import axios from "axios";


const createAxios = () => 
    axios.create({
        baseURL: "https://shop-geeks.up.railway.app/api/v1",
        headers: {"Content-Type": "application/json"}
    })

    const $mainApi = createAxios()
    const $authApi = createAxios()

    $authApi.interceptors.request.use(
        (config) => {
            const accessToken = localStorage.getItem('accessToken')
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`
            }
            return config
        },
    )

export { $mainApi, $authApi }