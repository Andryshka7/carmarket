import { refreshTokenQuery } from 'api/auth'
import checkAuth from 'api/auth/check auth'
import { getAccessToken } from 'helpers'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store'

type ProtectedRequestOptions<T> = {
    redirect?: boolean
    requestQuery: (accessToken: string) => Promise<T>
    callback: (response: T) => void
}

const useCreateProtectedRequest = () => {
    const { user, logOut } = useAuthStore()
    const navigate = useNavigate()

    const createProtectedRequest = <T>({
        redirect = true,
        requestQuery,
        callback
    }: ProtectedRequestOptions<T>) => {
        const protectedRequest = async () => {
            let isAuthenticated = false

            try {
                const accessToken = getAccessToken()
                if (accessToken) {
                    await checkAuth(accessToken)
                    isAuthenticated = true
                }
            } catch (error) {
                try {
                    if (user) {
                        const accessToken = await refreshTokenQuery(user.id)
                        await checkAuth(accessToken)
                        isAuthenticated = true
                    }
                } catch (error) {
                    logOut()
                    if (redirect) navigate('/login')
                }
            }

            if (isAuthenticated) {
                const accessToken = getAccessToken()
                const response = await requestQuery(accessToken!)
                callback(response)
            } else {
                logOut()
                if (redirect) navigate('/login')
            }
        }

        return protectedRequest
    }
    return createProtectedRequest
}

export default useCreateProtectedRequest
