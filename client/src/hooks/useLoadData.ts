import { fetchUserDataQuery, refreshTokenQuery } from 'Api/users'
import { getAccessToken, getRefreshToken } from 'helpers'
import { useState } from 'react'
import useAuthStore from 'store/auth'
import useCarsStore from 'store/cars'

const useLoadData = () => {
    const [loading, setLoading] = useState(true)

    const { fetchCars } = useCarsStore()
    const { setUser } = useAuthStore()

    const fetchUser = async () => {
        const accessToken = getAccessToken()
        try {
            if (accessToken) {
                const user = await fetchUserDataQuery(accessToken)
                setUser(user)
            }
        } catch (error) {
            try {
                const refreshToken = getRefreshToken()
                if (refreshToken) {
                    const accessToken = await refreshTokenQuery(refreshToken)
                    const user = await fetchUserDataQuery(accessToken)
                    setUser(user)
                }
            } catch (error) {
                console.log(error)
                console.log('Tokens are not valid')
            }
        }
    }

    const loadData = async () => {
        await Promise.all([fetchCars(), fetchUser()])
        setLoading(false)
    }

    return { loading, loadData }
}

export default useLoadData
