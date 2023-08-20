import { FaCheck } from 'react-icons/fa'
import { useFiltersStore } from 'store'

const Transmission = () => {
    const { transmissions, switchTransition } = useFiltersStore()

    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:text-2xl'>Transmission</h2>
            <div className='mt-2 w-28'>
                <div
                    className='flex cursor-pointer items-center gap-2'
                    onClick={() => switchTransition('automatic')}
                >
                    <div className='flex h-4 w-4 items-center justify-center rounded border border-[#999]'>
                        {transmissions.automatic && <FaCheck color='#999' size={10} />}
                    </div>
                    <h2 className='text-lg text-white'>Automatic</h2>
                </div>
                <div
                    className='flex cursor-pointer items-center gap-2'
                    onClick={() => switchTransition('manual')}
                >
                    <div className='flex h-4 w-4 items-center justify-center rounded border border-[#999]'>
                        {transmissions.manual && <FaCheck color='#999' size={10} />}
                    </div>
                    <h2 className='text-lg text-white'>Manual</h2>
                </div>
            </div>
        </>
    )
}

export default Transmission
