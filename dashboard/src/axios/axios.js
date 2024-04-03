import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:8080/v1",
    headeres: {
        "Content-Type": "application/json-patch+json",
        "Accept": "application/json",
    }
})

export default instance;