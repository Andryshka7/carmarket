import { User } from 'types'
import { create } from 'zustand'
import Cookies from 'js-cookie'

interface Store {
    user: User | null
    setUser: (user: User | null) => void
}

const useAuthStore = create<Store>()((set) => ({
    user: null,
    setUser: (user: User | null) => {
        if (user) {
            set({ user })
        } else {
            set({ user: null })
            Cookies.remove('tokens')
        }
    }
}))

export default useAuthStore
