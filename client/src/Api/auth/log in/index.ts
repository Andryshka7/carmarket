import API from 'api'
import { User } from 'types'

interface Body {
    email: string
    password: string
}

const logIn = async (body: Body) => {
    const response = await API.post<User>('/auth/login', body)
    return response.data
}

export default logIn
