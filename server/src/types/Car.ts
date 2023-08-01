import User from './User'

interface Car {
    id: number
    model: string
    year: number
    price: number
    power: string
    type: string
    transmission: string
    description: string
    seller: User
}

export default Car
