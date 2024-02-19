import axios from "axios";

const instance = axios.create({
    baseURL: "https://6576f7c7197926adf62ce478.mockapi.io/api/v1"
})

export default instance