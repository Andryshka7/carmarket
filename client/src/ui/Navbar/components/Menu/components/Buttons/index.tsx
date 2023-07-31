import { IoCarSport } from 'react-icons/io5'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { HiLogout } from 'react-icons/hi'

const Buttons = () => (
    <div className='mt-4'>
        <div className='mt-1 flex items-center gap-2'>
            <IoCarSport size={35} color='white' />
            <h2 className='text-white font-semibold text-xl'>My listings</h2>
        </div>
        <div className='mt-1 flex items-center gap-2'>
            <BiMessageSquareAdd size={35} color='white' />
            <h2 className='text-white font-semibold text-xl'>List car</h2>
        </div>
        <div className='mt-1 flex items-center gap-2'>
            <HiLogout size={35} color='white' />
            <h2 className='text-white font-semibold text-xl'>Logout</h2>
        </div>
    </div>
)

export default Buttons
