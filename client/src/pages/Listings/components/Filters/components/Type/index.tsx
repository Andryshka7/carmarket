import { Transition } from '@headlessui/react'
import { FaCheck } from 'react-icons/fa'
import { useFiltersStore } from 'store'
import { Type } from 'types'

const typesArray: Type[] = ['fuel', 'electric']

const TypeSelect = () => {
    const { types, switchType } = useFiltersStore()

    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:mt-4 md:text-2xl'>Type</h2>
            <div className='mt-2 w-28'>
                {typesArray.map((type) => (
                    <div
                        className='flex cursor-pointer items-center gap-2'
                        onClick={() => switchType(type)}
                        key={type}
                    >
                        <div className='flex h-4 w-4 items-center justify-center rounded border border-[#999]'>
                            <Transition
                                show={types[type]}
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
                        <h2 className='text-lg text-white'>{type[0].toUpperCase() + type.slice(1)}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TypeSelect
