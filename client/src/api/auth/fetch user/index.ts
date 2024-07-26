import API from 'api'
import { User } from 'types'

const fetchUser = async () => {
	const { data } = await API.get<User>('/auth/getme')
	return data || null
}

export default fetchUser
