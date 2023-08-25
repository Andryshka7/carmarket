import API from 'api'
import { User } from 'types'

const logOut = async (userId: number) => {
    const { data } = await API.post<User>('/auth/logout', { userId })
    return data
}

export default logOut
