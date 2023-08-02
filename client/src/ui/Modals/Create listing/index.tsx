import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { Portal } from 'ui'
import { Transmission, Type, ImagesInput } from './components'

type Data = {
    model: string
    year: string
    price: number
    description: number
}

interface Props {
    close: () => void
}

const CreateListing = ({ close }: Props) => {
    const [transmission, setTransmission] = useState('Automatic')
    const [type, setType] = useState('Fuel')
    const [images, setImages] = useState<File[]>([])

    const { register, handleSubmit } = useForm<Data>()

    const submit = () => {}

    return (
        <Portal>
            <div
                className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
                onClick={close}
            >
                <form
                    className='w-full h-full md:w-[800px] md:h-[800px] md:rounded-lg overflow-auto py-5 md:py-12 px-8 md:px-[134px] text-white bg-neutral-700'
                    onSubmit={handleSubmit(submit)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        <input
                            type='text'
                            {...register('model')}
                            className='font-semibold w-full rounded bg-transparent focus:outline-none border-2 border-[#858585] h-12'
                        />
                        <h3 className='text-center text-[#858585] text-sm mt-1 font-bold'>Make & Model</h3>
                    </div>

                    <div className='mt-2 flex w-full justify-between'>
                        <div className='w-[45%]'>
                            <input
                                type='number'
                                {...register('year')}
                                className='font-semibold rounded bg-transparent focus:outline-none border-2 border-[#858585] w-full h-12'
                            />
                            <h3 className='text-center text-[#858585] text-sm mt-1 font-bold'>Year</h3>
                        </div>
                        <div className='w-[45%]'>
                            <input
                                type='number'
                                {...register('price')}
                                className='font-semibold rounded bg-transparent focus:outline-none border-2 border-[#858585] w-full h-12'
                            />
                            <h3 className='text-center text-[#858585] text-sm mt-1 font-bold'>Price</h3>
                        </div>
                    </div>

                    <Transmission transmission={transmission} switchTransmission={setTransmission} />
                    <Type type={type} switchType={setType} />

                    <div>
                        <textarea
                            {...register('description')}
                            className='mt-5 w-full rounded bg-transparent focus:outline-none border-2 border-[#858585] h-36'
                        />
                        <h3 className='text-center text-[#858585] text-sm font-bold'>Description</h3>
                    </div>

                    <ImagesInput images={images} setImages={setImages} />

                    <button
                        className='mt-5 block m-auto w-72 rounded-md bg-green-600 transition duration-200 hover:bg-opacity-90 h-12 font-semibold'
                        type='submit'
                    >
                        Create listing
                    </button>

                    <AiOutlineCloseCircle size={50} className='md:hidden mt-5 mx-auto' onClick={close} />
                </form>
            </div>
        </Portal>
    )
}

export default CreateListing
