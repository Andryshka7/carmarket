import API from 'api'
import { User } from 'types'

const fetchUser = async (token: string) => {
    const response = await API.get<User>('/auth/getme', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export default fetchUser
