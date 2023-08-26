import { useState } from 'react'
import { fetchUserQuery } from 'api/auth'
import { useCreateProtectedRequest } from 'hooks'
import { useCarsStore, useAuthStore } from 'store'
import toast from 'react-hot-toast';

const useLoadData = () => {
    const [loading, setLoading] = useState(true)
    const createProtectedRequest = useCreateProtectedRequest()

    const { fetchCars } = useCarsStore()
    const { setUser } = useAuthStore()

    const fetchUser = createProtectedRequest(fetchUserQuery, (response) => {
        setUser(response)
    })

    const loadData = async () => {
        try {
            setLoading(true)
            await Promise.all([fetchCars(), fetchUser()])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error('An error occured while fetching data')
        }
    }

    return { loading, loadData }
}

export default useLoadData
