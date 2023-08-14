import API from 'Api'
import { User } from 'types'

const fetchUserDataQuery = async (token: string) => {
    const response = await API.get<User>('/auth/getme', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

const refreshTokenQuery = async (token: string) => {
    const response = await API.get<string>('/auth/refreshtoken', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

const signUpQuery = async (data: FormData) => {
    const response = await API.post<User>('/auth/signup', data)
    return response.data
}

const logInQuery = async (data: { email: string; password: string }) => {
    const response = await API.post<User>('/auth/login', data)
    return response.data
}

export { signUpQuery, logInQuery, fetchUserDataQuery, refreshTokenQuery }
