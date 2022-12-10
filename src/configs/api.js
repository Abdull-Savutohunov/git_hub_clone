import axios from "axios"

export const BASE_URL = 'https://api.github.com'

const instance = axios.create({baseURL: BASE_URL})

export default instance