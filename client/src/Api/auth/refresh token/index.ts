import API from 'Api'

const refreshToken = async (userId: number) => {
    const response = await API.post<string>(`/auth/refreshtoken`, { userId })
    return response.data
}

export default refreshToken
