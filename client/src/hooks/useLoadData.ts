import { useState } from 'react'
import useAuthStore from 'store/auth'
import useCarsStore from 'store/cars'

const useLoadData = () => {
    const [loading, setLoading] = useState(true)

    const { fetchCars } = useCarsStore()
    const { fetchUserData } = useAuthStore()

    const loadData = async () => {
        await Promise.all([fetchCars(), fetchUserData()])
        setLoading(false)
    }

    return { loading, loadData }
}

export default useLoadData
