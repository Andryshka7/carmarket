import API from 'api'

const deleteCar = async (id: number) => {
    const { data } = await API.delete(`/cars/${id}`)
    return data
}

export default deleteCar
