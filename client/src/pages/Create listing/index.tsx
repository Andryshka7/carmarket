import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createCarQuery } from 'api/cars'
import { useCarsStore } from 'store'
import { useCreateProtectedRequest } from 'hooks'
import { ProtectedPage } from 'components'
import { TransmissionSelector, TypeSelector, ImagesInput } from 'pages/shared/Car form'
import { Image, Transmission, Type } from 'types'
import { createFormData } from './helpers'
import toast from 'react-hot-toast'

type Data = {
    model: string
    year: string
    price: string
    power: string
    description: string
}

const CreateListing = () => {
    const navigate = useNavigate()
    const createProtectedRequest = useCreateProtectedRequest()
    const { createCar } = useCarsStore()

    const [transmission, setTransmission] = useState<Transmission>('automatic')
    const [type, setType] = useState<Type>('fuel')
    const [images, setImages] = useState<(Image | File)[]>([])

    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Data>()

    const submit = async (data: Data) => {
        setLoading(true)

        const year = Number(data.year)
        const price = Number(data.price)
        const car = { ...data, year, price, transmission, type }

        const formData = createFormData(car, images)

        const postCar = createProtectedRequest(
            async (token) => await createCarQuery(formData, token),
            createCar
        )

        await toast.promise(postCar(), {
            success: 'Car has been listed',
            loading: 'Creating listing...',
            error: 'Error while creating listing'
        })

        setLoading(false)
        navigate('/')
    }

    return (
        <ProtectedPage>
            <div className='mx-auto my-5 flex h-full w-full items-center justify-center'>
                <form
                    className='scrollbar h-fit w-11/12 rounded-lg bg-neutral-700 px-8 py-8 text-white sm:px-14 md:w-[700px] md:py-10 lg:w-[800px] lg:px-24'
                    onSubmit={handleSubmit(submit)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        <input
                            type='text'
                            {...register('model', { required: true })}
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
                                className={`h-12 w-full rounded border-2 bg-transparent text-center font-semibold transition duration-200 focus:outline-none ${
                                    errors['power'] ? 'border-red-500' : 'border-[#858585]'
                                }`}
                            />
                            <h3 className='mt-1 text-center text-sm font-bold text-[#858585]'>Power</h3>
                        </div>
                    </div>

                    <TransmissionSelector
                        transmission={transmission}
                        switchTransmission={setTransmission}
                    />
                    <TypeSelector
                        type={type}
                        switchType={setType}
                    />

                    <div className='mt-5'>
                        <input
                            type='number'
                            {...register('price', { required: true })}
                            className={`h-12 w-full rounded border-2 bg-transparent text-center font-semibold transition duration-200 focus:outline-none ${
                                errors['price'] ? 'border-red-500' : 'border-[#858585]'
                            }`}
                        />
                        <h3 className='mt-1 text-center text-sm font-bold text-[#858585]'>Price ($)</h3>
                    </div>

                    <div className='mt-3'>
                        <textarea
                            {...register('description', { required: true })}
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
                        className={`m-auto mt-5 block h-12 w-56 rounded-md bg-green-600 font-semibold transition duration-200 sm:w-72 ${
                            loading ? 'pointer-events-none opacity-70' : 'hover:bg-opacity-90'
                        }`}
                        type='submit'
                    >
                        Create listing
                    </button>
                </form>
            </div>
        </ProtectedPage>
    )
}

export default CreateListing
