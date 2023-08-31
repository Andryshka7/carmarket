import Image from './Image'
import User from './User'

interface Car {
    id: number
    model: string
    year: number
    price: number
    power: string
    type: 'fuel' | 'electric'
    transmission: 'manual' | 'automatic'
    description: string
    user: User
    images: Image[]
}

export default Car
