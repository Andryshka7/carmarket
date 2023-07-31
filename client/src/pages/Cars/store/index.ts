import { fetchCars } from 'Api/cars'
import { Car } from 'types'
import { create } from 'zustand'

interface Store {
    cars: Car[]
    loading: boolean
    error: boolean
    fetchCars: () => void
}

const useCarsStore = create<Store>()((set) => ({
    cars: [],
    loading: true,
    error: false,
    fetchCars: async () => {
        try {
            set({ loading: true })
            const cars = await fetchCars()
            set({ cars, loading: false })
        } catch (error) {
            set({ error: true })
        }
    }
}))

export default useCarsStore
