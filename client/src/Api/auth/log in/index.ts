import API from 'Api'
import { User } from 'types'

const logIn = async (data: { email: string; password: string }) => {
    const response = await API.post<User>('/auth/login', data)
    return response.data
}

export default logIn
