import API from 'api'
import { User } from 'types'

const fetchUser = async (token: string) => {
    const { data } = await API.get<User>('/auth/getme', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return data || null
}

export default fetchUser
