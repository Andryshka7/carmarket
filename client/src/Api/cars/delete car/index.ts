import API from 'api'

const deleteCar = async (id: string) => {
    const response = await API.delete(`/cars/${id}`)
    return response.data
}

export default deleteCar
