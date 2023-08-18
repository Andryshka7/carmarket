import { useState } from 'react'
import { fetchUserQuery } from 'Api/auth'
import { useCreateProtectedRequest } from 'hooks'
import { useCarsStore, useAuthStore } from 'store'

const useLoadData = () => {
    const [loading, setLoading] = useState(true)
    const createProtectedRequest = useCreateProtectedRequest()

    const { fetchCars } = useCarsStore()
    const { setUser } = useAuthStore()

    const fetchUser = createProtectedRequest(fetchUserQuery, (response) => {
        setUser(response)
    })

    const loadData = async () => {
        setLoading(true)
        await Promise.all([fetchCars(), fetchUser()])
        setLoading(false)
    }

    return { loading, loadData }
}

export default useLoadData
