import { refreshTokenQuery } from 'Api/auth'
import { getAccessToken, getRefreshToken } from 'helpers/tokens'

const useCreateProtectedRequest = () => {
    const createProtectedRequest = (callback: (accessToken: string) => void) => {
        const protectedRequest = async () => {
            try {
                const accessToken = getAccessToken()
                if (accessToken) {
                    callback(accessToken)
                    console.log('Request gone successfully')
                }
            } catch (error) {
                console.log('Access token expired')

                try {
                    const refreshToken = getRefreshToken()
                    if (refreshToken) {
                        const accessToken = await refreshTokenQuery(refreshToken)
                        callback(accessToken)
                        console.log('Request gone successfully')
                    }
                } catch (error) {
                    console.log('Refresh token expired')
                }
            }
        }
        return protectedRequest
    }
    return createProtectedRequest
}

export default useCreateProtectedRequest
