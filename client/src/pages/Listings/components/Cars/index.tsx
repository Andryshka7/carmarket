import { NavLink } from 'react-router-dom'
import { useFilteredCars } from 'hooks'

const Cars = () => {
    const cars = useFilteredCars()

    return !cars.length ? (
        <h1 className='mx-auto mt-20 p-8 text-center text-4xl font-semibold text-white'>
            No cars matching your queries found!
        </h1>
    ) : (
        <div className='flex flex-wrap justify-center gap-5 p-8'>
            {cars.map(({ id, model, year, price, images }) => (
                <NavLink
                    to={`/${id}`}
                    className='w-full max-w-[370px] rounded-lg bg-neutral-700 text-white'
                    key={images[0].originalName}
                >
                    <div className='overflow-hidden rounded-t-lg'>
                        <img
                            src={images[0].url}
                            className='aspect-video w-full object-cover transition duration-500 hover:scale-105'
                        />
                    </div>

                    <div className='mx-4 mb-2 mt-1'>
                        <h1 className='text-xl font-semibold'>{model}</h1>
                        <div className='mt-0.5 flex justify-between text-xl'>
                            <h2 className='text-xl font-semibold'>{year}</h2>
                            <h2 className='text-xl font-semibold'>
                                ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                            </h2>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default Cars
