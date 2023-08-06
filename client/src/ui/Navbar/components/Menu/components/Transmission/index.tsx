import { FaCheck } from 'react-icons/fa'

const Transmission = () => {
    return (
        <>
            <h2 className='mx-auto mt-5 text-4xl font-semibold text-white'>Transmission</h2>
            <div className='mt-2 w-28'>
                <div className='flex items-center gap-2'>
                    <div className='flex h-4 w-4 items-center justify-center rounded-sm border border-[#999]'>
                        <FaCheck color='#999' size={10} />
                    </div>
                    <h2 className='text-lg text-white'>Automatic</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex h-4 w-4 items-center justify-center rounded-sm border border-[#999]'>
                        {/* <BsCheckLg color='#999' size={13} /> */}
                    </div>
                    <h2 className='text-lg text-white'>Manual</h2>
                </div>
            </div>
        </>
    )
}

export default Transmission
