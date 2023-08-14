import API from 'Api'
import { Car } from 'types'

const fetchCarsQuery = async () => {
    const response = await API.get<Car[]>(`/cars`)
    return response.data
}

const createCarQuery = async (data: FormData) => {
    const response = await API.post<Car>(`/cars`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data
}

export { fetchCarsQuery, createCarQuery }
