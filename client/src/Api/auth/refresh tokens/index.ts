import API from 'Api'

const refreshToken = async (token: string) => {
    const response = await API.get<string>('/auth/refreshtoken', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
}

export default refreshToken
