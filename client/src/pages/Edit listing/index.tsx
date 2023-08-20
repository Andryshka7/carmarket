import { useParams } from 'react-router-dom'
import { useCarsStore } from 'store'
import { Error, ProtectedPage } from 'components'

const EditListing = () => {
    const { id } = useParams()
    const { cars } = useCarsStore()

    const car = cars.find((car) => car.id === Number(id))

    if (!car) return <Error />

    return (
        <ProtectedPage>
            <form>Car {id} is being edited</form>
        </ProtectedPage>
    )
}

export default EditListing
