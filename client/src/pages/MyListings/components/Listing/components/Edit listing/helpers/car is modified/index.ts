import { Car, Image } from 'types'

type Modified = Omit<Car, 'images'> & { images: (Image | File)[] }

const carIsModified = (car: Car, modified: Modified) => {
    for (let key of Object.keys(car) as (keyof Car)[]) {
        if (JSON.stringify(car[key]) !== JSON.stringify(modified[key])) {
            return true
        }
    }
    return false
}

export default carIsModified
