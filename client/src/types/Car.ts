import User from './User'
import Image from './Image'

type Transmission = 'manual' | 'automatic'
type Type = 'fuel' | 'electric'

interface Car {
    id: number
    model: string
    year: number
    price: number
    power: string
    type: Type
    transmission: Transmission
    description: string
    user: User
    images: Image[]
}

export { Transmission, Type }

export default Car
