import API from 'api'

const healthCheck = async () => {
	const { data } = await API.get('/health')
	return data
}

export default healthCheck
