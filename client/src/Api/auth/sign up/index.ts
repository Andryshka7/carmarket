import API from 'Api'
import { User } from 'types'

const signUp = async (body: FormData) => {
    const response = await API.post<User>('/auth/signup', body)
    return response.data
}

export default signUp
