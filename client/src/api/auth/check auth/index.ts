import API from 'api'

const checkAuth = async (token: string) => {
    await API.get('/auth/checkauth', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return true
}

export default checkAuth
