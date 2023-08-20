import API from 'api'
import { Car } from 'types'

const fetchCars = async () => {
    const response = await API.get<Car[]>(`/cars`)
    return response.data
}

export default fetchCars
