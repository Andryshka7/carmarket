import { useState } from 'react'
import { fetchUserQuery } from 'Api/auth'
import useAuthStore from 'store/auth'
import useCarsStore from 'store/cars'
import { useCreateProtectedRequest } from 'hooks'

const useLoadData = () => {
    const createProtectedRequest = useCreateProtectedRequest()
    const [loading, setLoading] = useState(true)

    const { fetchCars } = useCarsStore()
    const { setUser } = useAuthStore()

    const fetchUser = createProtectedRequest(async (token: string) => {
        const user = await fetchUserQuery(token)
        setUser(user)
    })

    const loadData = async () => {
        await Promise.all([fetchCars(), fetchUser()])
        setLoading(false)
    }

    return { loading, loadData }
}

export default useLoadData
