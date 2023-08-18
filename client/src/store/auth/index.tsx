import { User } from 'types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Cookies from 'js-cookie'
import { logOutQuery } from 'Api/auth'

interface Store {
    user: User | null
    setUser: (user: User) => Promise<void>
    logOut: () => void
}

const useAuthStore = create<Store>()(
    persist(
        (set, get) => ({
            user: null,
            setUser: async (user: User) => {
                set({ user })
            },
            logOut: async () => {
                const user = get().user
                if (user) {
                    set({ user: null })
                    Cookies.remove('accessToken')
                    logOutQuery(user.id)
                }
            }
        }),
        { name: 'auth' }
    )
)

export default useAuthStore
