import { IoCarSport } from 'react-icons/io5'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { HiLogout } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { useAuthStore } from 'store'

interface Props {
    closeMenu: () => void
}

const Buttons = ({ closeMenu }: Props) => {
    const { user, logOut } = useAuthStore()
    return user ? (
        <div
            className='mt-4 text-white'
            onClick={closeMenu}
        >
            <NavLink
                to='/mylistings'
                className='mt-1 flex items-center gap-2'
            >
                <IoCarSport
                    size={35}
                    color='white'
                />
                <h2 className='text-xl font-semibold'>My listings</h2>
            </NavLink>

            <NavLink
                to='/createlisting'
                className='mt-1 flex items-center gap-2'
            >
                <BiMessageSquareAdd
                    size={35}
                    color='white'
                />
                <h2 className='text-xl font-semibold'>List car</h2>
            </NavLink>

            <NavLink
                to='/'
                className='mt-1 flex items-center gap-2'
                onClick={logOut}
            >
                <HiLogout
                    size={35}
                    color='white'
                />
                <h2 className='text-xl font-semibold'>Logout</h2>
            </NavLink>
        </div>
    ) : (
        <div
            className='mt-4 flex items-center gap-4'
            onClick={closeMenu}
        >
            <NavLink
                to='login'
                className='rounded-md border-2 border-white px-4 py-1 font-semibold text-white'
            >
                Log in
            </NavLink>
            <NavLink
                to='signup'
                className='rounded-md border-2 border-white px-4 py-1 font-semibold text-white'
            >
                Sign up
            </NavLink>
        </div>
    )
}

export default Buttons
