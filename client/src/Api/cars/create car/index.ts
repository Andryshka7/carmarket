import API from 'api'
import { Car } from 'types'

const createCar = async (body: FormData, token: string) => {
    const response = await API.post<Car>(`/cars`, body, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
    })
    return response.data
}

export default createCar
