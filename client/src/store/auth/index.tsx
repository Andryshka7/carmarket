import { User } from 'types'
import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
import Cookies from 'js-cookie'

interface Store {
    user: User | null
    setUser: (user: User | null) => void
}

const useAuthStore = create<Store>()(
    // persist(
        (set) => ({
            user: null,
            setUser: (user: User | null) => {
                if (user) {
                    set({ user })
                } else {
                    set({ user: null })
                    Cookies.remove('accessToken')
                    Cookies.remove('refreshToken')
                }
            }
        }
        // ),
        // { name: 'auth' }
    )
)

export default useAuthStore
