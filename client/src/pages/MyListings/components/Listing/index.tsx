import { useState } from 'react'
import { Car } from 'types'
import { HoverMenu } from './components'

const Listing = ({ id, model, year, price, images }: Car) => {
    const [hover, setHover] = useState(false)

    const ebableHover = () => setHover(true)
    const disableHover = () => setHover(false)

    return (
        <div className='rounded-lg bg-neutral-700 text-white' key={images[0]}>
            <div
                className='relative aspect-video w-[370px]'
                onMouseEnter={ebableHover}
                onMouseLeave={disableHover}
            >
                <img src={images[0]} className='absolute h-full w-full rounded-t-lg object-cover' />
                <HoverMenu id={id} isHovering={hover} />
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
    )
}

export default Listing
