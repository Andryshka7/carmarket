import { refreshTokenQuery } from 'Api/auth'
import { getAccessToken, getRefreshToken } from 'helpers/tokens'

const useCreateProtectedRequest = () => {
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
                    const refreshToken = getRefreshToken()
                    if (refreshToken) {
                        const accessToken = await refreshTokenQuery(refreshToken)
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
