import { User } from 'types'
import { create } from 'zustand'
import Cookies from 'js-cookie'
import { fetchUserDataQuery, refreshTokenQuery } from 'Api/users'

interface Store {
    user: User | null
    login: (user: User) => void
    logout: () => void
    fetchUserData: () => Promise<void>
}

const useAuthStore = create<Store>()((set) => ({
    user: null,
    login: (user: User) => {
        set({ user })
    },
    logout: () => {
        set({ user: null })
        Cookies.remove('tokens')
    },
    fetchUserData: async () => {
        const tokens = Cookies.get('tokens')
        if (tokens) {
            const { accessToken, refreshToken } = JSON.parse(tokens)
            try {
                const user = await fetchUserDataQuery(accessToken)
                set({ user })
            } catch (error) {
                console.log('access token expired')
                try {
                    console.log('refreshing')
                    const accessToken = await refreshTokenQuery(refreshToken)
                    const user = await fetchUserDataQuery(accessToken)
                    set({ user })
                } catch (error) {
                    console.log('both tokens expired')
                }
            }
        }
    }
}))

export default useAuthStore
