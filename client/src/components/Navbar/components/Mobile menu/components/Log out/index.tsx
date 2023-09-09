import { HiLogout } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { useAuthStore } from 'store'

const LogOut = () => {
    const { logOut } = useAuthStore()

    return (
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
    )
}

export default LogOut
