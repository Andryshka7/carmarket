import { Transition } from '@headlessui/react'
import { FaCheck } from 'react-icons/fa'
import { useFiltersStore } from 'store'
import { Transmission } from 'types'

const transmissionsArray: Transmission[] = ['automatic', 'manual']

const TransmissionSelect = () => {
    const { transmissions, switchTransition } = useFiltersStore()

    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:text-2xl'>Transmission</h2>
            <div className='mt-2 w-28'>
                {transmissionsArray.map((transmission) => (
                    <div
                        className='flex cursor-pointer items-center gap-2'
                        onClick={() => switchTransition(transmission)}
                        key={transmission}
                    >
                        <div className='flex h-4 w-4 items-center justify-center rounded border border-[#999]'>
                            <Transition
                                show={transmissions[transmission]}
                                className='transition duration-200'
                                enterFrom='opacity-0'
                                leaveTo='opacity-0'
                            >
                                <FaCheck
                                    color='#999'
                                    size={10}
                                />
                            </Transition>
                        </div>
                        <h2 className='text-lg text-white'>
                            {transmission[0].toUpperCase() + transmission.slice(1)}
                        </h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TransmissionSelect
