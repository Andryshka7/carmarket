import useCarsStore from 'store/cars'
import { useParams } from 'react-router-dom'
import { Car } from './components'

const CarPreview = () => {
    const { id } = useParams()
    const { cars } = useCarsStore()

    const car = cars.find((car) => car.id === Number(id))

    return car ? <Car {...car} /> : null
}

export default CarPreview
