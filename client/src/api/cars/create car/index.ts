import API from 'api'
import { Car } from 'types'

const createCar = async (body: FormData) => {
	const { data } = await API.post<Car>(`/cars`, body, {
		headers: { 'Content-Type': 'multipart/form-data' }
	})
	return data
}

export default createCar
