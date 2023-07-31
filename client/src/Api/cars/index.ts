import axios from 'axios'
import { Car } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const fetchCars = async () => {
    const response = await axios.get<Car[]>(`${SERVER_URL}/cars`)
    return response.data
}

export { fetchCars }
