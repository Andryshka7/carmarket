import { Cars, Filters } from './components'

const CarsPage = () => (
    <div className='flex items-start'>
        <Filters />
        <Cars />
    </div>
)

export default CarsPage
