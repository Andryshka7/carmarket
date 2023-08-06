import { NavLink } from 'react-router-dom'
import useCarsStore from './store'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const Cars = () => {
    const { cars } = useCarsStore()

    const test = []

    for (let i = 0; i < 15; i++) {
        if (cars[0]) test.push(cars[0])
    }

    return (
        <div className='my-8 flex flex-wrap justify-center gap-5 px-12 md:ml-64'>
            {test.map(({ id, model, year, price, images }) => (
                <NavLink to={`/${id}`} className='rounded-lg bg-neutral-700 text-white' key={images[0]}>
                    <div className='overflow-hidden rounded-t-lg'>
                        <img
                            src={`${SERVER_URL}/images/${images[0]}`}
                            className='aspect-video w-[370px] object-cover transition duration-500 hover:scale-105'
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
