import API from 'api'
import { Car } from 'types'

const createCar = async (body: FormData, token: string) => {
    const { data } = await API.post<Car>(`/cars`, body, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
    })
    return data
}

export default createCar
