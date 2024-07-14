import API from 'api'
import { Car } from 'types'

const fetchCars = async () => {
	const { data } = await API.get<Car[]>(`/cars`)
	return data
}

export default fetchCars
