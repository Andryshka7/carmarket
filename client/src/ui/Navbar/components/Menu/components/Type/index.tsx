import { FaCheck } from 'react-icons/fa'

const Type = () => (
    <>
        <h2 className='text-white mx-auto text-4xl mt-5 font-semibold'>Type</h2>
        <div className='w-28 mt-2'>
            <div className='flex gap-2 items-center'>
                <div className='flex items-center justify-center w-4 h-4 border border-[#999] rounded-sm'>
                    <FaCheck color='#999' size={10} />
                </div>
                <h2 className='text-white text-lg'>Fuel</h2>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='flex items-center justify-center w-4 h-4 border border-[#999] rounded-sm'>
                    {/* <BsCheckLg color='#999' size={13} /> */}
                </div>
                <h2 className='text-white text-lg'>Electric</h2>
            </div>
        </div>
    </>
)

export default Type
