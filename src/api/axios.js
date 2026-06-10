import axios from "axios";


const createAxios = () => 
    axios.create({
        baseURL: "https://shoplab-geeks.up.railway.app/api/v1",
        headers: {"Content-Type": "application/json"}
    })

    const $mainApi = createAxios()

export { $mainApi }