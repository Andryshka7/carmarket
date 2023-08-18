import API from 'Api'
import { User } from 'types'

const logOut = async (userId: number) => {
    const response = await API.post<User>('/auth/logout', { userId })
    return response.data
}

export default logOut
