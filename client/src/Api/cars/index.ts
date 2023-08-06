import axios from 'axios'
import { Car } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const fetchCarsQuery = async () => {
    const response = await axios.get<Car[]>(`${SERVER_URL}/cars`)
    return response.data
}

const createCarQuery = async (data: FormData) => {
    const response = await axios.post<Car>(`${SERVER_URL}/cars`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response.data
}

export { fetchCarsQuery, createCarQuery }
