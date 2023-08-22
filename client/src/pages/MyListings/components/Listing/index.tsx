import { useState } from 'react'
import { Car } from 'types'
import { EditListing, HoverMenu } from './components'
import { Portal } from 'components'

const Listing = (car: Car) => {
    const [editCar, setEditCar] = useState(false)
    const [hover, setHover] = useState(false)

    const ebableHover = () => setHover(true)
    const disableHover = () => setHover(false)

    const startEditing = () => setEditCar(true)
    const cancelEditing = () => setEditCar(false)

    const { id, model, year, price, images } = car

    return (
        <>
            <div
                className='w-full max-w-[370px] rounded-lg bg-neutral-700 text-white'
                key={images[0].url}
            >
                <div
                    className='relative aspect-video w-full'
                    onMouseEnter={ebableHover}
                    onMouseLeave={disableHover}
                >
                    <img
                        src={images[0].url}
                        className='absolute aspect-video w-full rounded-t-lg object-cover'
                    />
                    <HoverMenu
                        id={id}
                        editListing={startEditing}
                        isHovering={hover}
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
            </div>
            {editCar && (
                <Portal>
                    <EditListing
                        {...car}
                        cancelEditing={cancelEditing}
                    />
                </Portal>
            )}
        </>
    )
}

export default Listing
