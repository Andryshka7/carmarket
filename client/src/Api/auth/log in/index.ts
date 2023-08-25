import API from 'api'
import { User } from 'types'

interface Body {
    email: string
    password: string
}

const logIn = async (body: Body) => {
    const { data } = await API.post<User>('/auth/login', body)
    return data
}

export default logIn
