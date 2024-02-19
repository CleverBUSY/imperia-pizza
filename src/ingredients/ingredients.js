import axios from "axios";

const instance = axios.create({
    baseURL: "https://65c9eb603b05d29307df430a.mockapi.io/api/shop"
})

export default instance