import API from 'api'
import { Car } from 'types'

const updateCar = async (body: FormData, token: string) => {
    const { data } = await API.patch<Car>(`/cars`, body, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
    })
    return data
}

export default updateCar
