import { useState } from 'react'
import { fetchUserQuery } from 'api/auth'
import { useCreateProtectedRequest } from 'hooks'
import { useCarsStore, useAuthStore } from 'store'
import toast from 'react-hot-toast'

const useLoadData = () => {
    const [loading, setLoading] = useState(true)
    const createProtectedRequest = useCreateProtectedRequest()

    const { fetchCars } = useCarsStore()
    const { setUser } = useAuthStore()

    const fetchUser = createProtectedRequest(fetchUserQuery, setUser)

    const loadData = async () => {
        setLoading(true)
        try {
            setLoading(true)
            await Promise.all([fetchCars(), fetchUser()])
        } catch (error) {
            toast.error('An error occured while fetching data')
        }
        setLoading(false)
    }

    return { loading, loadData }
}

export default useLoadData
