import { useState } from 'react'
import { FcPrevious, FcNext } from 'react-icons/fc'
import { Car as ICar } from 'types'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const Car = ({
    model,
    price,
    power,
    description,
    images,
    type,
    transmission,
    seller: { username, email, avatar, phoneNumber }
}: ICar) => {
    const [image, setImage] = useState(images[0])

    return (
        <div className='m-5 mx-auto w-[300px] text-white sm:w-[450px] md:w-[600px] xl:w-[800px] 2xl:w-[1000px]'>
            <div className='relative'>
                <FcPrevious
                    size={35}
                    className='absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer'
                    onClick={() => {
                        const index = images.indexOf(image) - 1
                        setImage(images[index % images.length])
                    }}
                />
                <img src={`${SERVER_URL}/images/${image}`} className='aspect-video rounded-lg object-cover' />
                <FcNext
                    size={35}
                    className='absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer'
                    onClick={() => {
                        const index = images.indexOf(image) + 1
                        setImage(images[index % images.length])
                    }}
                />
            </div>
            <div className='mt-1 flex justify-between text-lg font-bold xl:text-xl'>
                <h2>{model}</h2>
                <h3>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h3>
            </div>
            <div className='mt-2 text-lg font-medium xl:text-xl'>
                <p>Transmission: {transmission}</p>
                <p>Power: {power}</p>
                <p>Type: {type}</p>
            </div>
            <p className='mt-2 xl:text-lg'>{description}</p>
            <div className='mt-2 flex flex-wrap gap-2 md:gap-3'>
                {images.map((image) => (
                    <img
                        src={`${SERVER_URL}/images/${image}`}
                        className='aspect-video w-[144px] cursor-pointer rounded-lg object-cover md:w-[190px]'
                        onClick={() => setImage(image)}
                        key={image}
                    />
                ))}
            </div>
            <div className='my-2'>
                <div className='mt-4 flex items-center gap-3'>
                    <img
                        src={`${SERVER_URL}/images/panda.png`}
                        className='h-8 w-8 rounded-full object-cover'
                    />
                    <h3 className='text-xl font-semibold'>{username}</h3>
                </div>
                <h3 className='mt-2 font-semibold'>Email: {email}</h3>
                <h3 className='mt-0.5 font-semibold'>Phone: +371 28176717{phoneNumber}</h3>
            </div>
        </div>
    )
}

export default Car
