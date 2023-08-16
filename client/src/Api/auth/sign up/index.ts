import API from 'Api'
import { User } from 'types'

const signUp = async (data: FormData) => {
    const response = await API.post<User>('/auth/signup', data)
    return response.data
}

export default signUp
