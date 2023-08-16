import API from 'Api'
import { Car } from 'types'

const fetchCars = async () => {
    const response = await API.get<Car[]>(`/cars`)
    return response.data
}

export default fetchCars
