import API from 'api'

const checkAuth = async () => {
	await API.get('/auth/checkauth')
	return true
}

export default checkAuth
