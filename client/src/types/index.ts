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

interface User {
    id: number
    username: string
    email: string
    avatar: string
}

interface Image {
    name: string
    originalName: string
    url: string
}

export { type Car, type Image, type User, type Transmission, type Type }
