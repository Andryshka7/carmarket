import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Portal } from 'ui'

type Data = {
    model: string
    year: string
    price: number
    description: number
}

const transmissions = ['Automatic', 'Manual']
const types = ['Fuel', 'Electric']

const CreateListing = () => {
    const [transmission, setTransmission] = useState(transmissions[0])
    const [type, setType] = useState(types[0])

    const { register, handleSubmit } = useForm<Data>()

    const submit = () => {}

    return (
        <Portal>
            <form
                className='absolute top-0 left-0 w-full h-full px-8 text-white bg-neutral-700'
                onSubmit={handleSubmit(submit)}
            >
                <div>
                    <input
                        type='text'
                        {...register('model')}
                        className='font-semibold mt-6 w-full rounded bg-transparent focus:outline-none border-2 border-[#858585] h-12'
                    />
                    <h3 className='text-center text-[#858585] text-sm mt-1 font-bold'>Make & Model</h3>
                </div>
                <div className='mt-2 flex w-full justify-between'>
                    <div>
                        <input
                            type='number'
                            {...register('year')}
                            className='font-semibold rounded bg-transparent focus:outline-none border-2 border-[#858585] w-36 h-12'
                        />
                        <h3 className='text-center text-[#858585] text-sm mt-1 font-bold'>Year</h3>
                    </div>
                    <div>
                        <input
                            type='number'
                            {...register('price')}
                            className='font-semibold rounded bg-transparent focus:outline-none border-2 border-[#858585] w-36 h-12'
                        />
                        <h3 className='text-center text-[#858585] text-sm mt-1 font-bold'>Price</h3>
                    </div>
                </div>
                <div className='mt-2 flex w-full justify-between'>
                    {transmissions.map((item) => (
                        <div
                            onClick={() => setTransmission(item)}
                            className={`text-[#858585] transition duration-200 w-36 font-semibold text-lg flex items-center justify-center rounded focus:outline-none border-2 border-[#858585] h-12 ${
                                transmission === item ? 'bg-[#858585] text-neutral-700' : 'bg-transparent'
                            }`}
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className='mt-5 flex w-full justify-between'>
                    {types.map((item) => (
                        <div
                            onClick={() => setType(item)}
                            className={`text-[#858585] transition duration-200 w-36 font-semibold text-lg flex items-center justify-center rounded focus:outline-none border-2 border-[#858585] h-12 ${
                                type === item ? 'bg-[#858585] text-neutral-700' : 'bg-transparent'
                            }`}
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <textarea
                    {...register('price')}
                    className='mt-5 w-full rounded bg-transparent focus:outline-none border-2 border-[#858585] h-36'
                />
                <button
                    className='mt-5 block m-auto w-72 rounded-md bg-green-600 h-12 font-semibold'
                    type='submit'
                >
                    Create listing
                </button>
            </form>
        </Portal>
    )
}

export default CreateListing
