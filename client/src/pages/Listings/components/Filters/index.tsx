import { Make, Price, Transmission, Type } from './components'

const CarFilters = () => (
    <div className='my-16 hidden flex-col items-center rounded-r-xl bg-neutral-700 p-8 text-white md:flex'>
        <h1 className='text-3xl font-bold'>Filters</h1>
        <Make />
        <Price />
        <Transmission />
        <Type />
    </div>
)

export default CarFilters
