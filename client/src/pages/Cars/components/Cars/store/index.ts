import { fetchCarsQuery } from 'Api/cars'
import { Car } from 'types'
import { create } from 'zustand'

interface Store {
    cars: Car[]
    loading: boolean
    error: boolean
    fetchCars: () => void
    createCar: (car: Car) => void
}

const useCarsStore = create<Store>()((set) => ({
    cars: [],
    loading: true,
    error: false,
    fetchCars: async () => {
        try {
            set({ loading: true })
            const cars = await fetchCarsQuery()
            set({ cars, loading: false })
        } catch (error) {
            set({ error: true })
        }
    },
    createCar: (car: Car) => {
        set((state) => ({ cars: [...state.cars, car] }))
    }
}))

export default useCarsStore
