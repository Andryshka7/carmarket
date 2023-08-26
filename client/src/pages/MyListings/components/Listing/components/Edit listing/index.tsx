import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { updateCarQuery } from 'api/cars'
import { useCreateProtectedRequest } from 'hooks'
import { Car, Image } from 'types'
import { ImagesInput, Transmission, Type } from './components'
import { createFormData, getRemovedImages } from './helpers'
import { useCarsStore } from 'store'
import toast from 'react-hot-toast'

type Props = Car & { closeModal: () => void }

type Data = {
    model: string
    year: number
    price: number
    power: string
    description: string
}

const EditListing = ({ closeModal, ...car }: Props) => {
    const {
        model: initialModel,
        year: initialYear,
        power: initialPower,
        price: initialPrice,
        type: initialType,
        transmission: initialTransmission,
        description: initialDescription,
        images: initialImages
    } = car

    const { editCar } = useCarsStore()

    const [loading, setLoading] = useState(false)

    const [images, setImages] = useState<(Image | File)[]>(initialImages)
    const [transmission, setTransmission] = useState(initialTransmission)
    const [type, setType] = useState(initialType)

    const createProtectedRequest = useCreateProtectedRequest()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Data>()

    const submit = async (data: Data) => {
        // CHECK IF THERE ARE CHANGES
        const imageFiles = images.filter((item) => item instanceof File) as File[]
        const removedImages = getRemovedImages(images, initialImages)

        const formData = createFormData({ ...car, ...data, type, transmission }, imageFiles, removedImages)

        const updateCar = createProtectedRequest(
            async (accessToken: string) => await updateCarQuery(formData, accessToken),
            editCar
        )

        setLoading(true)

        await toast.promise(updateCar(), {
            success: 'Car has been modified',
            loading: 'Modifying listing...',
            error: 'Error while modifying listing'
        })

        setLoading(false)
        closeModal()
    }

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => document.body.classList.remove('overflow-hidden')
    }, [])

    return (
        <div
            className='fixed left-0 top-0 flex h-full w-full overflow-auto bg-neutral-700 p-8 md:overflow-hidden md:bg-black md:bg-opacity-50'
            onClick={closeModal}
        >
            (
            <form
                className='scrollbar w-[765px] rounded-lg bg-neutral-700 px-4 py-6 text-white sm:px-14 md:m-auto md:h-[800px] md:overflow-auto md:px-28 md:py-10'
                onSubmit={handleSubmit(submit)}
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <input
                        type='text'
                        {...register('model', { required: true })}
                        defaultValue={initialModel}
                        className={`h-12 w-full rounded border-2 bg-transparent text-center font-semibold transition duration-200 focus:outline-none ${
                            errors['model'] ? 'border-red-500' : 'border-[#858585]'
                        }`}
                    />
                    <h3 className='mt-1 text-center text-sm font-bold text-[#858585]'>Make & Model</h3>
                </div>

                <div className='mt-2 flex w-full justify-between'>
                    <div className='w-[45%]'>
                        <input
                            type='number'
                            {...register('year', { required: true })}
                            defaultValue={initialYear}
                            className={`h-12 w-full rounded border-2 bg-transparent text-center font-semibold transition duration-200 focus:outline-none ${
                                errors['year'] ? 'border-red-500' : 'border-[#858585]'
                            }`}
                        />
                        <h3 className='mt-1 text-center text-sm font-bold text-[#858585]'>Year</h3>
                    </div>
                    <div className='w-[45%]'>
                        <input
                            type='text'
                            {...register('power', { required: true })}
                            defaultValue={initialPower}
                            className={`h-12 w-full rounded border-2 bg-transparent text-center font-semibold transition duration-200 focus:outline-none ${
                                errors['power'] ? 'border-red-500' : 'border-[#858585]'
                            }`}
                        />
                        <h3 className='mt-1 text-center text-sm font-bold text-[#858585]'>Power</h3>
                    </div>
                </div>

                <Transmission
                    transmission={transmission}
                    switchTransmission={setTransmission}
                />
                <Type
                    type={type}
                    switchType={setType}
                />

                <div className='mt-5'>
                    <input
                        type='number'
                        {...register('price', { required: true })}
                        defaultValue={initialPrice}
                        className={`h-12 w-full rounded border-2 bg-transparent text-center font-semibold transition duration-200 focus:outline-none ${
                            errors['price'] ? 'border-red-500' : 'border-[#858585]'
                        }`}
                    />
                    <h3 className='mt-1 text-center text-sm font-bold text-[#858585]'>Price ($)</h3>
                </div>

                <div className='mt-3'>
                    <textarea
                        {...register('description', { required: true })}
                        defaultValue={initialDescription}
                        className={`h-36 w-full rounded border-2 bg-transparent px-2 py-1 transition duration-200 focus:outline-none ${
                            errors['description'] ? 'border-red-500' : 'border-[#858585]'
                        }`}
                    />
                    <h3 className='text-center text-sm font-bold text-[#858585]'>Description</h3>
                </div>

                <ImagesInput
                    images={images}
                    setImages={setImages}
                />

                <button
                    className={`mx-auto mt-5 block h-12 w-56 rounded-md bg-green-600 font-semibold transition duration-200 sm:w-72 ${
                        loading ? 'pointer-events-none opacity-70' : 'hover:bg-opacity-90'
                    }`}
                    type='submit'
                >
                    Edit listing
                </button>

                <div className='py-10 md:hidden'>
                    <AiOutlineCloseCircle
                        size={60}
                        color='white'
                        className='mx-auto'
                        onClick={closeModal}
                    />
                </div>
            </form>
            )
        </div>
    )
}

export default EditListing
