import { fetchCarsQuery } from 'api/cars'
import { Car } from 'types'
import { create } from 'zustand'

interface Store {
    cars: Car[]
    fetchCars: () => Promise<void>
    createCar: (car: Car) => void
    editCar: (car: Car) => void
    removeCar: (id: number) => void
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
    },
    editCar: (editedCar: Car) => {
        set(({ cars }) => ({ cars: cars.map((car) => (car.id !== editedCar.id ? car : editedCar)) }))
    },
    removeCar: (id: number) => {
        set(({ cars }) => ({ cars: cars.filter((car) => car.id !== id) }))
    }
}))

export default useCarsStore
