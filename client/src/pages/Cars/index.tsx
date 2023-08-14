import { Cars, CarFilters } from './components'

const CarsPage = () => (
    <div className='flex items-start'>
        <CarFilters />
        <Cars />
    </div>
)

export default CarsPage
