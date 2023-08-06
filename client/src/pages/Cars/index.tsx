import Loader from 'ui/Loader'
import Cars from './components/Cars'
import useCarsStore from './components/Cars/store'
import Filters from './components/Filters'

const CarsPage = () => {
    const { loading } = useCarsStore()

    return loading ? (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Loader />
        </div>
    ) : (
        <>
            <Filters />
            <Cars />
        </>
    )
}

export default CarsPage
