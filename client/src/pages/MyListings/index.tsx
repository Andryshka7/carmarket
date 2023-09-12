import { useAuthStore, useCarsStore } from 'store'
import { ProtectedPage } from 'components/shared'
import { Listing } from './components'

const MyListings = () => {
    const { cars } = useCarsStore()
    const { user } = useAuthStore()

    const myListings = cars.filter(({ user: seller }) => seller.id === user?.id)

    return (
        <ProtectedPage>
            <div className='flex flex-wrap justify-center gap-5 p-8'>
                {myListings.map((car) => (
                    <Listing
                        {...car}
                        key={car.id}
                    />
                ))}
            </div>
        </ProtectedPage>
    )
}

export default MyListings
