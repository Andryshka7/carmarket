import API from 'api'
import { User } from 'types'

const signUp = async (body: FormData) => {
	const { data } = await API.post<User>('/auth/signup', body)
	return data
}

export default signUp
