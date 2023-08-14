import { fetchCarsQuery } from 'Api/cars'
import { Car } from 'types'
import { create } from 'zustand'

interface Store {
    cars: Car[]
    fetchCars: () => Promise<void>
    createCar: (car: Car) => void
}

const useCarsStore = create<Store>()((set) => ({
    cars: [],
    loading: true,
    error: false,
    fetchCars: async () => {
        try {
            const cars = await fetchCarsQuery()
            set({ cars })
        } catch (error) {
            console.log(error)
        }
    },
    createCar: (car: Car) => {
        set((state) => ({ cars: [...state.cars, car] }))
    }
}))

export default useCarsStore
