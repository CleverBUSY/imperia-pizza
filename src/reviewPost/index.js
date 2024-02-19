import axios from "axios";

const instance = axios.create({
    baseURL: "https://65ccdfcfdd519126b83fbccd.mockapi.io/Rewiev/food"
})

export default instance