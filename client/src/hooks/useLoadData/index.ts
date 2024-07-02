import { useState } from 'react'
import { fetchUserQuery } from 'api/auth'
import { useCreateProtectedRequest } from 'hooks'
import { useCarsStore, useAuthStore } from 'store'
import { healthCheck } from './helpers'
import toast from 'react-hot-toast'

const useLoadData = () => {
    const { fetchCars } = useCarsStore()
    const { setUser } = useAuthStore()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const createProtectedRequest = useCreateProtectedRequest()

    const fetchUser = createProtectedRequest({
        requestQuery: fetchUserQuery,
        callback: setUser,
        redirect: false
    })

    const loadData = async () => {
        if (await healthCheck()) {
            try {
                await Promise.all([fetchCars(), fetchUser()])
            } catch (error) {
                toast.error('An error occured while fetching data')
            }
        } else {
            setError(true)
        }
        setLoading(false)
    }

    return { error, loading, loadData }
}

export default useLoadData
