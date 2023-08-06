import { User } from 'types'
import { create } from 'zustand'

interface Store {
    user: User
    login: () => void
    logout: () => void
}

const me = {
    id: 1,
    username: 'Andryshka',
    avatar: 'http://localhost:4000/images/panda.png',
    email: 'a.lapchik7@gmail.com'
}

const useAuthStore = create<Store>()((set) => ({
    user: me,
    login: () => {},
    logout: () => {}
}))

export default useAuthStore
