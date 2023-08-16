import API from 'Api'
import { Car } from 'types'

const createCar = async (data: FormData, token: string) => {
    const response = await API.post<Car>(`/cars`, data, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
    })
    return response.data
}

export default createCar
