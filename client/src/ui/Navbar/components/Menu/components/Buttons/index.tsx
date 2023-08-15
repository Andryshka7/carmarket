import { IoCarSport } from 'react-icons/io5'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { HiLogout } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import useAuthStore from 'store/auth'

interface Props {
    closeMenu: () => void
}

const Buttons = ({ closeMenu }: Props) => {
    const { setUser } = useAuthStore()
    return (
        <div className='mt-4 text-white' onClick={closeMenu}>
            <NavLink to='mylistings' className='mt-1 flex items-center gap-2'>
                <IoCarSport size={35} color='white' />
                <h2 className='text-xl font-semibold'>My listings</h2>
            </NavLink>
            <NavLink to='/createlisting' className='mt-1 flex items-center gap-2'>
                <BiMessageSquareAdd size={35} color='white' />
                <h2 className='text-xl font-semibold'>List car</h2>
            </NavLink>
            <div className='mt-1 flex items-center gap-2' onClick={()=>setUser(null)}>
                <HiLogout size={35} color='white' />
                <h2 className='text-xl font-semibold'>Logout</h2>
            </div>
        </div>
    )
}

export default Buttons
