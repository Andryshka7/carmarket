import { Car as ICar } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const Car = ({ model, year, price }: ICar) => (
    <div className='text-white bg-neutral-700 rounded-lg'>
        <div className='overflow-hidden rounded-t-lg'>
            <img
                src={`${SERVER_URL}/images/m5.jpg`}
                className='w-80 h-52 object-cover transition duration-500 hover:scale-105'
            />
        </div>
        <div className='mx-4 mt-1 mb-2'>
            <h1 className='font-semibold text-xl'>{model}</h1>
            <div className='flex justify-between mt-0.5 text-xl'>
                <h2 className='font-semibold text-xl'>{year}</h2>
                <h2 className='font-semibold text-xl'>
                    ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                </h2>
            </div>
        </div>
    </div>
)

export default Car
