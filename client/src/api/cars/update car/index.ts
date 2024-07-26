import API from 'api'
import { Car } from 'types'

const updateCar = async (body: FormData) => {
	const { data } = await API.patch<Car>(`/cars`, body, {
		headers: { 'Content-Type': 'multipart/form-data' }
	})
	return data
}

export default updateCar
