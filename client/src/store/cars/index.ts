import { fetchCarsQuery } from 'api/cars'
import { Car } from 'types'
import { create } from 'zustand'

interface Store {
    cars: Car[]
    fetchCars: () => Promise<void>
    createCar: (car: Car) => void
    removeCar: (id: number) => void
}

const useCarsStore = create<Store>()((set, get) => ({
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
    },
    removeCar: (id: number) => {
        const { cars } = get()
        set({ cars: cars.filter((car) => car.id !== id) })
    }
}))

export default useCarsStore
