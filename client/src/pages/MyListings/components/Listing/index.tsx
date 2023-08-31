import { useState } from 'react'
import { Portal } from 'components'
import { Car } from 'types'
import { EditListing, Preview } from './components'

const Listing = (car: Car) => {
    const [editCar, setEditCar] = useState(false)
    const { id, model, year, price, images } = car

    return (
        <>
            <div
                className='w-full max-w-[370px] rounded-lg bg-neutral-700 text-white'
                key={images[0].originalName}
            >
                <Preview
                    id={id}
                    image={images[0]}
                    setEditCar={setEditCar}
                />

                <div className='mx-4 mb-2 mt-1'>
                    <h1 className='text-xl font-semibold'>{model}</h1>
                    <div className='mt-0.5 flex justify-between text-xl'>
                        <h2 className='text-xl font-semibold'>{year}</h2>
                        <h2 className='text-xl font-semibold'>
                            ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                        </h2>
                    </div>
                </div>
            </div>
            {editCar && (
                <Portal>
                    <EditListing
                        {...car}
                        closeModal={() => setEditCar(false)}
                    />
                </Portal>
            )}
        </>
    )
}

export default Listing
