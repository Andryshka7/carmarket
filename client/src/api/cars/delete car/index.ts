import API from 'api'

const deleteCar = async (id: number) => {
	const { data } = await API.delete(`/cars/${id}`, {
		headers: { 'Content-Type': 'multipart/form-data' }
	})
	return data
}

export default deleteCar
