import { useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { FcPrevious, FcNext } from 'react-icons/fc'
import { useCarsStore } from 'store'
import { Error } from 'components'

const CarPreview = () => {
    const { id } = useParams()
    const { cars } = useCarsStore()
    const [image, setImage] = useState(0)

    const car = cars.find((car) => car.id === Number(id))

    if (!car) return <Error />

    const {
        model,
        price,
        power,
        transmission,
        type,
        description,
        images,
        user: { username, email, avatar }
    } = car

    const setPrevImage = () => setImage(image > 0 ? image - 1 : images.length - 1)
    const setNextImage = () => setImage(image < images.length - 1 ? image + 1 : 0)

    return (
        <div className='m-5 mx-auto w-[300px] text-white sm:w-[450px] md:w-[600px] xl:w-[800px] 2xl:w-[1000px]'>
            <div className='relative'>
                <FcPrevious
                    size={35}
                    className='absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer'
                    onClick={setPrevImage}
                />
                <NavLink to={`${images[image]}`}>
                    <img src={images[image]} className='aspect-video w-full rounded-lg object-cover' />
                </NavLink>
                <FcNext
                    size={35}
                    className='absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer'
                    onClick={setNextImage}
                />
            </div>
            <div className='mt-1 flex justify-between text-lg font-bold xl:mt-2 xl:text-xl 2xl:text-2xl'>
                <h2>{model}</h2>
                <h3>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h3>
            </div>
            <div className='mt-2 text-lg font-medium xl:text-xl 2xl:text-2xl'>
                <p>Transmission: {transmission}</p>
                <p>Power: {power}</p>
                <p>Type: {type}</p>
            </div>
            <p className='mt-2 xl:text-lg 2xl:text-xl'>{description}</p>
            <div className='mt-2 flex flex-wrap gap-2 md:gap-3'>
                {images.map((image, index) => (
                    <img
                        src={image}
                        className='aspect-video w-[144px] cursor-pointer rounded-lg object-cover md:w-[190px]'
                        onClick={() => setImage(index)}
                        key={image}
                    />
                ))}
            </div>
            <div className='my-2'>
                <div className='mt-4 flex items-center gap-3'>
                    <img src={avatar} className='h-8 w-8 rounded-full object-cover' />
                    <h3 className='text-xl font-semibold'>{username}</h3>
                </div>
                <h3 className='mt-2 font-semibold'>Email: {email}</h3>
            </div>
        </div>
    )
}

export default CarPreview
