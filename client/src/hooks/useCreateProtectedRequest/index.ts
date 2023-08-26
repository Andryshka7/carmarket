import { refreshTokenQuery } from 'api/auth'
import { getAccessToken } from 'helpers/get access token'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store'

const useCreateProtectedRequest = () => {
    const { user, logOut } = useAuthStore()
    const navigate = useNavigate()

    const createProtectedRequest = <T>(
        requestQuery: (accessToken: string) => Promise<T>,
        callback: (response: T) => void
    ) => {
        const protectedRequest = async () => {
            try {
                const accessToken = getAccessToken()
                if (accessToken) {
                    const response = await requestQuery(accessToken)
                    callback(response)
                }
            } catch (error) {
                try {
                    if (user) {
                        const accessToken = await refreshTokenQuery(user.id)
                        const response = await requestQuery(accessToken)
                        callback(response)
                    }
                } catch (error) {
                    logOut()
                    navigate('/login')
                }
            }
        }
        return protectedRequest
    }
    return createProtectedRequest
}

export default useCreateProtectedRequest
