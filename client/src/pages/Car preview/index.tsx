import useCarsStore from 'pages/Cars/components/Cars/store'
import { useParams } from 'react-router-dom'
import { Car, Error } from './components'

const CarPreview = () => {
    const { id } = useParams()
    const { cars } = useCarsStore()

    const car = cars.find((car) => car.id === Number(id))

    return car ? <Car {...car} /> : <Error />
}

export default CarPreview
