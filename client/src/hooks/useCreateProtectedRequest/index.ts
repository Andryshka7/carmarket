import { refreshTokenQuery } from 'Api/auth'
import { getAccessToken } from 'helpers/get access token'
import { useAuthStore } from 'store'

const useCreateProtectedRequest = () => {
    const { user } = useAuthStore()

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
                console.log('Access token expired')

                try {
                    if (user) {
                        const accessToken = await refreshTokenQuery(user.id)
                        console.log('Access token renewed')
                        const response = await requestQuery(accessToken)
                        callback(response)
                    }
                } catch (error) {
                    console.log('Refresh token expired, need to login')
                }
            }
        }
        return protectedRequest
    }
    return createProtectedRequest
}

export default useCreateProtectedRequest
