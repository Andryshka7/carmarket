import API from 'api'

const refreshToken = async (userId: number) => {
    const { data } = await API.post<string>(`/auth/refreshtoken`, { userId })
    return data
}

export default refreshToken
