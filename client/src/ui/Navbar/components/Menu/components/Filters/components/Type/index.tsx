import { FaCheck } from 'react-icons/fa'
import useFiltersStore from 'store/filters'

const Type = () => {
    const { types, switchType } = useFiltersStore()

    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white md:mt-4 md:text-2xl'>Type</h2>
            <div className='mt-2 w-28'>
                <div className='flex cursor-pointer items-center gap-2' onClick={() => switchType('fuel')}>
                    <div className='flex h-4 w-4 items-center justify-center rounded border border-[#999]'>
                        {types.fuel && <FaCheck color='#999' size={10} />}
                    </div>
                    <h2 className='text-lg text-white'>Fuel</h2>
                </div>
                <div
                    className='flex cursor-pointer items-center gap-2'
                    onClick={() => switchType('electric')}
                >
                    <div className='flex h-4 w-4 items-center justify-center rounded border border-[#999]'>
                        {types.electric && <FaCheck color='#999' size={10} />}
                    </div>
                    <h2 className='text-lg text-white'>Electric</h2>
                </div>
            </div>
        </>
    )
}

export default Type
