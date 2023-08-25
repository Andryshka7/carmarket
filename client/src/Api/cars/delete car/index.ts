import API from 'api'

const deleteCar = async (token: string, id: number) => {
    const { data } = await API.delete(`/cars/${id}`, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
    })
    return data
}

export default deleteCar
