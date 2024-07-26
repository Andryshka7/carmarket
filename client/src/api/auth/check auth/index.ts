import API from 'api'
import { User } from 'types'

const checkAuth = async () => {
	const { data } = await API.get<User>('/auth')
	return data || null
}

export default checkAuth
